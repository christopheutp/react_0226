const API_URL = "https://dummyjson.com/quotes/random"


export async function getRandomQuote() {
    const res = await fetch(API_URL);
    if(!res.ok){
        throw new Error(`erreur ${res.status} ${res.statusText}`)
    }
    const data = await res.json();
    return {
        text: data.quote,
        author: data.author || "Anonyme",
    };
}