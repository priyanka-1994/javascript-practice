const amountFROMConverter = document.getElementById('amountFROMConverter');
const currencyFROMConverter = document.getElementById('currencyFROMConverter');
const amountTOConverter = document.getElementById('amountTOConverter'); 
const currencyTOConverter = document.getElementById('currencyTOConverter');
const convertButton = document.getElementById('currency-converter');
const resultParagraph = document.getElementById('amount'); 

const exchangeRates = {
    "INR": {
        "USD": 0.012, // 1 INR = 0.012 USD (approx)
        "EUR": 0.011, // 1 INR = 0.011 EUR (approx)
        "CAD": 0.016, // 1 INR = 0.016 CAD (approx)
        "AUD": 0.018, // 1 INR = 0.018 AUD (approx)
        "INR": 1      // 1 INR = 1 INR
    },
    "USD": {
        "INR": 83.5,  // 1 USD = 83.5 INR (approx)
        "EUR": 0.92,
        "CAD": 1.36,
        "AUD": 1.50,
        "USD": 1
    },
    "EUR": {
        "INR": 90.76, // 1 EUR = 90.76 INR (approx)
        "USD": 1.08,
        "CAD": 1.48,
        "AUD": 1.63,
        "EUR": 1
    },
    "CAD": {
        "INR": 61.27, // 1 CAD = 61.27 INR (approx)
        "USD": 0.73,
        "EUR": 0.67,
        "AUD": 1.10,
        "CAD": 1
    },
    "AUD": {
        "INR": 55.43, // 1 AUD = 55.43 INR (approx)
        "USD": 0.67,
        "EUR": 0.61,
        "CAD": 0.91,
        "AUD": 1
    }
};

convertButton.addEventListener("click", () => {
    const amount = parseFloat(amountFROMConverter.value); // Convert the input string to a number
    const fromCurrency = currencyFROMConverter.value;    // e.g., "INR"
    const toCurrency = currencyTOConverter.value;        // e.g., "USD"

    // Basic validation: Check if amount is a valid positive number
    if (isNaN(amount) || amount <= 0) {
        resultParagraph.textContent = "Please enter a valid positive amount.";
        amountFROMConverter.value = 1; // Reset to 1 or clear for user convenience
        return; 
    }

    let convertedAmount;

    // Check if we have rates for the selected currencies
    if (exchangeRates[fromCurrency] && exchangeRates[fromCurrency][toCurrency]) {
        convertedAmount = amount * exchangeRates[fromCurrency][toCurrency];
        
        resultParagraph.textContent = `Total Amount: ${convertedAmount.toFixed(2)} ${toCurrency}`;
        amountTOConverter.value = convertedAmount.toFixed(2);
    } else {
        resultParagraph.textContent = `Conversion rate not available for ${fromCurrency} to ${toCurrency}.`;
        amountTOConverter.value = ""; 
    }
});
