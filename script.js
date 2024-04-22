const quotes = [
    "The only way to do great work is to love what you do. - Steve Jobs",
    "Believe you can and you're halfway there. - Theodore Roosevelt",
    "Strive not to be a success, but rather to be of value. - Albert Einstein",
    "Your time is limited, don't waste it living someone else's life. - Steve Jobs",
    "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
    "The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt",
    "It does not matter how slowly you go as long as you do not stop. - Confucius",
    "The best way to predict the future is to create it. - Peter Drucker",
    "Do not wait to strike till the iron is hot; but make it hot by striking. - William Butler Yeats",
    "Well done is better than well said. - Benjamin Franklin"
];

document.addEventListener('DOMContentLoaded', function () {
    const quoteDisplay = document.getElementById('quoteText');
    const generateBtn = document.getElementById('generateBtn');

    function generateQuote() {
        const randomIndex = Math.floor(Math.random() * quotes.length);
        const randomQuote = quotes[randomIndex];
        quoteDisplay.textContent = randomQuote;
    }

    generateBtn.addEventListener('click', generateQuote);

    // Generate initial quote
    generateQuote();
});
