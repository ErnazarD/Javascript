let apiQuotes = [];

// show new quotes 
function newQuote(){
    const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
    console.log(quote);
}

// get Quotes from API
async function getQuotes(){
    const apiUrl = 'https://jacintodesign.github.io/quotes-api/data/quotes.json';
    try {
        const responce = await fetch(apiUrl);
        apiQuotes = await responce.json();
        newQuote();
    } catch (error) {
        // Catch the error here
    }
}

// On load
getQuotes();