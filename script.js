const quoteConteiner = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const newQuoteBtn = document.getElementById('new-quote');
const loader = document.getElementById('loader');

let apiQuotes = [];

function loading(){
    loader.hidden = false;
    quoteConteiner.hidden = true;
}

// hide loader
function complete(){
    quoteConteiner.hidden = false;
    loader.hidden =true;
}

// show new quotes 
function newQuote(){
    loading();
    const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
    if (!quote.author) {
        authorText.textContent = 'Unknown';
    } else {
        authorText.textContent = quote.author;
    }
    if(quote.text.length > 120) {
        quoteText.classList.add('long-quote');
    } else {
        quoteText.classList.remove('long-quote');
    }
    // Set the quote, hide Loader
    quoteText.textContent = quote.text;
    complete();


    quoteText.textContent = quote.text;

}

// get Quotes from API
async function getQuotes(){
    loading();
    const apiUrl = 'https://jacintodesign.github.io/quotes-api/data/quotes.json';
    try {
        const responce = await fetch(apiUrl);
        apiQuotes = await responce.json();
        newQuote();
    } catch (error) {
        // Catch the error here
    }
}
// Tweet function 
function tweetQuote(){
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;
    window.open(twitterUrl, `_blank`);
}

// event listener

newQuoteBtn>addEventListener('click', newQuote);
twitterBtn.addEventListener(`click`, tweetQuote);

// On load
getQuotes();
