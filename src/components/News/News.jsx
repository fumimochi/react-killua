import React from 'react';
import { useState } from 'react';
import s from './News.module.css'

const News = () => {

    let [topic, setTopic] = useState('');
    const ol = document.querySelector('ol');


    function retrieve(e) {
        e.preventDefault();
        ol.textContent = '';

        const apiKey = '00900e8d847542398ba8c5de0e637f0c';
        let url =  `https://newsapi.org/v2/everything?q=${topic}&apiKey=${apiKey}`;

        fetch(url).then(response => {
            return response.json()
        }).then(data => {
            data.articles.forEach(article => {
                let li = document.createElement('li');
                li.textContent = '';
                let a = document.createElement('a');
                a.setAttribute('href', article.url);
                a.setAttribute('target', '_blank');
                a.textContent = article.title;
                li.appendChild(a);
                ol.appendChild(li);
            })
        }).catch(error => {
            alert(error);
        })
      
    } 

    return (
        <div className={s.main}>
            <form className={s.search}>
                <div className={s.entering}>
                    <label>{'Enter your clue word to find links for news'}</label>
                </div>
                <div className={s.input__container}>
                    <input className={s.input} type='text' 
                    value={topic} onChange={ event => setTopic(event.target.value) } />
                    <button onClick={retrieve}>F I N D</button>
                </div>
            </form>
            <ol className={s.classList}></ol>
        </div>
    )
}

export default News;