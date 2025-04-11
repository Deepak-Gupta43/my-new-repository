import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

const Converter = () => {
  const [currencies, setCurrencies] = useState([]);
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('EUR');
  const [amount, setAmount] = useState(1);
  const [result, setResult] = useState(null);

  useEffect(() => {
    axios.get('https://api.frankfurter.app/currencies')
      .then(res => setCurrencies(Object.keys(res.data)));
  }, []);

  const convert = () => {
    if (fromCurrency === toCurrency) {
      setResult(amount);
      return;
    }

    axios.get(`https://api.frankfurter.app/latest?amount=${amount}&from=${fromCurrency}&to=${toCurrency}`)
      .then(res => setResult(res.data.rates[toCurrency]));
  };

  return (
    <div className="converter">
      <h2>Currency Converter</h2>
      <div className="form">
        <input
          type="number"
          value={amount}
          onChange={e => setAmount(e.target.value)}
        />
        <select value={fromCurrency} onChange={e => setFromCurrency(e.target.value)}>
          {currencies.map(cur => <option key={cur}>{cur}</option>)}
        </select>
        <span>to</span>
        <select value={toCurrency} onChange={e => setToCurrency(e.target.value)}>
          {currencies.map(cur => <option key={cur}>{cur}</option>)}
        </select>
        <button onClick={convert}>Convert</button>
      </div>
      {result && (
        <h3>{amount} {fromCurrency} = {result} {toCurrency}</h3>
      )}
    </div>
  );
};

export default Converter;
