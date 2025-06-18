// First step
const quotes = [
  { quote: "The best way to get started is to quit talking and begin doing.", author: "Walt Disney" },
  { quote: "Success is not final, failure is not fatal: It is the courage to continue that counts.", author: "Winston Churchill" },
  { quote: "Don't watch the clock; do what it does. Keep going.", author: "Sam Levenson" },
  { quote: "It always seems impossible until it's done.", author: "Nelson Mandela" },
  { quote: "You miss 100% of the shots you don't take.", author: "Wayne Gretzky" },
  { quote: "Believe you can and you're halfway there.", author: "Theodore Roosevelt" }
];

// 2. 
const quoteText  = document.getElementById('quote');
const authorText = document.getElementById('author');
const generateBtn = document.getElementById('generateBtn');

// 3. when button got clicked,something will happen.
generateBtn.addEventListener("click", () => {

    // 4. Get a random quote from the array 
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const selectedQuote = quotes[randomIndex];

    // 5. Display the Quote in HTML
    quoteText.innerText = selectedQuote.quote;
    authorText.innerText = `- ${selectedQuote.author}`;
});

