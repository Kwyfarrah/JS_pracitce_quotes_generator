import quotes from  './quotes.js';


export const showquotes = () => {
    let randomNumber = Math.floor(Math.random()*quotes.length);
    document.querySelector('p').innerHTML = `${quotes[randomNumber].quote} <h3>—${quotes[randomNumber].author}`;
  }