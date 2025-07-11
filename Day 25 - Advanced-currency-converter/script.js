// 1. Get references to HTML elements using their IDs
const amountInput = document.getElementById('currency-num');
const fromCurrencySelect = document.getElementById("currency-from");
const toCurrencySelect = document.getElementById("currency-to");
const convertButton = document.getElementById("conversion");
const resultParagraph = document.getElementById("result");

// 2. Your API Key and Base URL for Exchangerate-API
const API_KEY = "Your_API_KEY"; 
const BASE_URL = `https://v6.exchangerate-api.com/v6/${API_KEY}/latest/`;

// 3. Function to fetch exchange rates from the API
async function getExchangerates(currencyCode) {
    try {
        // Construct the full API URL for the specified base currency
        const response = await fetch(`${BASE_URL}${currencyCode}`);
        
        // Check if the network response was successful (status 200-299)
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        // Parse the JSON data from the response
        const data = await response.json();
        console.log(`Exchange rates for ${currencyCode}:`, data); // Log the data for debugging
        return data; // Return the fetched data
    } catch (error) {
        // Handle any errors that occur during the fetch operation
        console.error("Could not fetch exchange rate: ", error);
        resultParagraph.textContent = "Error fetching rates. Please try again later.";
        return null; // Return null to indicate an error
    }
} 
// 4. Function to populate the currency dropdowns
function populateCurrencies(rates) {
    // Extract all currency codes (keys) from the conversion_rates object
    const currencyCodes = Object.keys(rates);

    // Clear existing options (if any, though in this case, only default ones)
    fromCurrencySelect.innerHTML = ''; 
    toCurrencySelect.innerHTML = '';

    // Loop through each currency code and create an option for both dropdowns
    currencyCodes.forEach(code => {
        // Option for the 'from' dropdown
        const optionFrom = document.createElement('option');
        optionFrom.value = code;
        optionFrom.textContent = code;
        fromCurrencySelect.appendChild(optionFrom);

        // Option for the 'to' dropdown
        const optionTo = document.createElement('option');
        optionTo.value = code;
        optionTo.textContent = code;
        toCurrencySelect.appendChild(optionTo);
    });

    // Set default selected values for better user experience
    fromCurrencySelect.value = "USD"; // Default 'from' currency
    toCurrencySelect.value = "INR"; // Default 'to' currency
}

// 5. Initialization function to run when the page loads
async function initializeConverter() {
    // Fetch rates using a common base currency (like USD) to get all available currency codes
    const data = await getExchangerates("USD"); 
    if (data && data.conversion_rates) {
        populateCurrencies(data.conversion_rates);
    }
}

// Call the initialization function when the script starts
initializeConverter();


// 6. Event Listener for the Convert button
convertButton.addEventListener("click", async () => {
    // Get the current values from the input field and dropdowns
    const amount = amountInput.value;
    const fromCurrency = fromCurrencySelect.value;
    const toCurrency = toCurrencySelect.value;

    // --- Input Validation ---
    if (amount === "" || isNaN(amount) || parseFloat(amount) <= 0) {
        resultParagraph.textContent = "Please enter a valid positive amount.";
        return; // Stop the function if validation fails
    }

    // Handle case where source and target currencies are the same
    if (fromCurrency === toCurrency) {
        resultParagraph.textContent = `Converting ${fromCurrency} to ${toCurrency} means no change: ${amount} ${fromCurrency}.`;
        return;
    }

    // --- Fetching Specific Rates for Conversion ---
    // We need the rates relative to the 'fromCurrency' (the base currency for conversion)
    const data = await getExchangerates(fromCurrency);

    if (data && data.conversion_rates) {
        const rates = data.conversion_rates;

        // Check if the conversion rate for the 'toCurrency' exists
        if (rates[toCurrency]) {
            const exchangeRate = rates[toCurrency];
            const convertedAmount = (parseFloat(amount) * exchangeRate).toFixed(2); // Convert amount to float before multiplication, round to 2 decimal places

            resultParagraph.textContent = `${amount} ${fromCurrency} = ${convertedAmount} ${toCurrency}`;
        } else {
            resultParagraph.textContent = `Conversion rate not available for ${toCurrency}.`;
        }
    } else {
        // This covers cases where getExchangerates failed to return data
        resultParagraph.textContent = "Could not retrieve conversion rates for calculation.";
    }
});
