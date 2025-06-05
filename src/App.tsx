import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState<number>(0);

  const [multiplier1, setMultiplier1] = useState<number>(1);
  const [multiplier2, setMultiplier2] = useState<number>(0);
  const [multiplier3, setMultiplier3] = useState<number>(0);
  const [passiveIncome, setPassiveIncome] = useState<number>(0);
  const [passiveIncome2, setPassiveIncome2] = useState<number>(0);
  const [passiveIncome3, setPassiveIncome3] = useState<number>(0);

  const [multiplierPrice1, setMultiplierPrice1] = useState<number>(10);
  const [multiplierPrice2, setMultiplierPrice2] = useState<number>(20);
  const [multiplierPrice3, setMultiplierPrice3] = useState<number>(30);
  const [passiveIncomePrice, setPassiveIncomePrice] = useState<number>(10);
  const [passiveIncomePrice2, setPassiveIncomePrice2] = useState<number>(20);
  const [passiveIncomePrice3, setPassiveIncomePrice3] = useState<number>(30);

  const multiplier = multiplier1 + multiplier2 + multiplier3;
  const income = passiveIncome + passiveIncome2 + passiveIncome3;

  useEffect(() => {
    const savedCount = localStorage.getItem('clickCount');
    if (savedCount !== null) {
      setCount(parseFloat(savedCount));
    }
    const savedMultiplier1 = localStorage.getItem('multiplier1');
    if (savedMultiplier1 !== null) {
      setMultiplier1(parseFloat(savedMultiplier1));
    }
    const savedMultiplier2 = localStorage.getItem('multiplier2');
    if (savedMultiplier2 !== null) {
      setMultiplier2(parseFloat(savedMultiplier2));
    }
    const savedPrice1 = localStorage.getItem('multiplierPrice1');
    if (savedPrice1 !== null) {
      setMultiplierPrice1(parseFloat(savedPrice1));
    }
    const savedPrice2 = localStorage.getItem('multiplierPrice2');
    if (savedPrice2 !== null) {
      setMultiplierPrice2(parseFloat(savedPrice2));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('clickCount', count.toString());
  }, [count]);

  useEffect(() => {
    localStorage.setItem('multiplier1', multiplier1.toString());
    localStorage.setItem('multiplier2', multiplier2.toString());
    localStorage.setItem('multiplierPrice1', multiplierPrice1.toString());
    localStorage.setItem('multiplierPrice2', multiplierPrice2.toString());
  }, [multiplier1, multiplier2, multiplierPrice1, multiplierPrice2]);

  const handleClick = () => {
    setCount(prev => +(prev + multiplier).toFixed(2));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(prev => +(prev + income).toFixed(2));
      }, 100);
    return () => clearInterval(interval);
  }, [income]);

 const clicks1 = 1.5;
 const price1 = 1.6;
  const handleBuyMultiplier1 = () => {
    if (count >= multiplierPrice1) {
      setCount(prev => +(prev - multiplierPrice1).toFixed(2));
      setMultiplier1(prev => +(prev + clicks1).toFixed(2));
      setMultiplierPrice1(prev => +(prev * price1).toFixed(2));
    }
  };
const clicks2 = 1.8;
const price2 = 2;
  const handleBuyMultiplier2 = () => {
    if (count >= multiplierPrice2) {
      setCount(prev => +(prev - multiplierPrice2).toFixed(2));
      setMultiplier2(prev => +(prev + clicks2).toFixed(2));
      setMultiplierPrice2(prev => +(prev * price2).toFixed(2));
    }
  };
  const clicks3 = 2.3;
  const price3 = 2.7;
  const handleBuyMultiplier3 = () => {
    if (count >= multiplierPrice3) {
      setCount(prev => +(prev - multiplierPrice3).toFixed(2));
      setMultiplier3(prev => +(prev + clicks3).toFixed(2));
      setMultiplierPrice3(prev => +(prev * price3).toFixed(2));
    }
  };
  const income1 = 0.1;
  const handlePassiveIncome = () => {
    if (count >= passiveIncomePrice) {
      setCount(prev => +(prev - passiveIncomePrice).toFixed(2));
      setPassiveIncome(prev => +(prev + income1).toFixed(2));
      setPassiveIncomePrice(prev => +(prev * price1).toFixed(2));
    }
  };
  const income2 = 0.3;
  const handlePassiveIncome2 = () => {
    if (count >= passiveIncomePrice2) {
      setCount(prev => +(prev - passiveIncomePrice2).toFixed(2));
      setPassiveIncome2(prev => +(prev + income2).toFixed(2));
      setPassiveIncomePrice2(prev => +(prev * price2).toFixed(2));
    }
  };
  const income3 = 0.5;
  const handlePassiveIncome3 = () => {
    if (count >= passiveIncomePrice3) {
      setCount(prev => +(prev - passiveIncomePrice3).toFixed(2));
      setPassiveIncome3(prev => +(prev + income3).toFixed(2));
      setPassiveIncomePrice3(prev => +(prev * price3).toFixed(2));
    }
  };

  return (
    <div className="Main">
      <h1>Click Counter</h1>
      <p>Click count: {count.toFixed(2)}</p>
      <p>
        Current multiplier: {multiplier.toFixed(2)}x
      </p>
      <p>Current passive income:{income .toFixed(2)} /s</p>
      <button onClick={handleClick}>Click me!</button>
      <div className="buy__menu">
        <div className="clicking">
      <button onClick={handleBuyMultiplier1} disabled={count < multiplierPrice1}>
      Buy Multiplier {clicks1} (Price: {multiplierPrice1.toFixed(2)})
      </button>
      <button onClick={handleBuyMultiplier2} disabled={count < multiplierPrice2}>
      Buy Multiplier {clicks2} (Price: {multiplierPrice2.toFixed(2)})
      </button>
      <button onClick={handleBuyMultiplier3} disabled={count < multiplierPrice3}>
        Buy Multiplier {clicks3} (Price: {multiplierPrice3.toFixed(2)})
      </button>
      </div>
      <div className="Passive">
        <button onClick={handlePassiveIncome} disabled={count < passiveIncomePrice}>
          Buy passive income {income1} (Price: {passiveIncomePrice.toFixed(2)})
          </button>
        <button onClick={handlePassiveIncome2} disabled={count < passiveIncomePrice2}>
          Buy passive income {income2} (Price: {passiveIncomePrice2.toFixed(2)})
        </button>
        <button onClick={handlePassiveIncome3} disabled={count < passiveIncomePrice3}>
          Buy passive income {income3} (Price: {passiveIncomePrice3.toFixed(2)})
        </button>
      </div>
      </div>
    </div>
  );  
}

export default App;
