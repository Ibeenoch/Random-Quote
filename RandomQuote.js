import React from 'react'
import './randomQuote.css';
import 'font-awesome/css/font-awesome.min.css';
import { useState, useEffect } from 'react';

function RandomQuote() {
    const [quote, setQuote]= useState('')
    const [author, setAuthor]= useState('')

    useEffect(() => {
        getQuote()
    }, [])

    const getQuote = () => {
        let url= 'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json';
   fetch(url).then(res => res.json()).then(data => {
       let dataQuote = data['quotes'];
     let randomNum= Math.floor(Math.random() * dataQuote.length);
      
     let randomQuote = dataQuote[randomNum];
     setQuote(randomQuote.quote)
     setAuthor(randomQuote.author)
   })
  }

     const handleQuote = () => {
       getQuote(); 
   }
    return (
        <div>
         <div id="quote-box">
             <div className='text'>
   <div id='text'><p>{quote}</p> </div>   
   <div id='author'><p>{author}</p></div>
  </div>
  <div className='social' >
<div className='social-media'>
   <a id='tweet-quote' className='twitter' href='"twitter.com/intent/tweet"'><i className='fa fa-twitter fa-5x'></i></a>
   <a id='tumbir-quote' className='tumblr' href='"twitter.com/intent/tweet"'><i className='fa fa-tumblr fa-5x'></i></a>
   </div>
   <button  onClick={handleQuote} id='new-quote'>New Quote</button>
    <div id='text'></div>
     </div>
        </div>    
        </div>     

    )
}

export default RandomQuote;
