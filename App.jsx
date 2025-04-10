import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

const API_KEY = 'YOUR_GOOGLE_API_KEY';

const App=()=>{
  const [text, setText]=useState('');
  const [translatedText, setTranslatedText] = useState('');
  const [sourceLang, setSourceLang] = useState('en');
  const [targetLang, setTargetLang] = useState('hi');

  const translateText = async()=>{
    try{
      const res=await axios.post(
        `https://translation.googleapis.com/language/translate/v2?key=${API_KEY}`,
        {
          q: text,
          source: sourceLang,
          target: targetLang,
          format: 'text'
        }
      );
      setTranslatedText(res.data.data.translations[0].translatedText);
    }catch(error){
      console.error('Translation error:', error);
    }
  };

  return(
    <div className="app">
      <h1>Google Translator</h1>
      <textarea placeholder="Enter text here..."
      value={text}
      onChange={(e)=>setText(e.target.value)} />

      <div className="selector">
        <select value={sourceLang} onChange={(e)=>setSourceLang(e.target.value)}>
          <option value="en">English</option>
          <option value="hi">Hindi</option>
          <option value="es">Spanish</option>
          <option value="fr">French</option>
        </select>
        <select value={targetLang} onChange={(e)=>setTargetLang(e.target.value)}>
          <option value="hi">Hindi</option>
          <option value="en">English</option>
          <option value="es">Spanish</option>
          <option value="fr">french</option>
        </select>
        <button onClick={translateText}>Translate</button>
      </div>
      <div className="output">
        <h2>Translation:</h2>
        <p>{translatedText}</p>
      </div>
    </div>
  );
};
export default App;