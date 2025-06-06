import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState<number>(0);

  const [multiplier1, setMultiplier1] = useState<number>(1);
  const [multiplier2, setMultiplier2] = useState<number>(0);
  const [multiplier3, setMultiplier3] = useState<number>(0);
  const [multiplier4, setMultiplier4] = useState<number>(0);
  const [multiplier5, setMultiplier5] = useState<number>(0);
  const [passiveIncome, setPassiveIncome] = useState<number>(0);
  const [passiveIncome2, setPassiveIncome2] = useState<number>(0);
  const [passiveIncome3, setPassiveIncome3] = useState<number>(0);
  const [passiveIncome4, setPassiveIncome4] = useState<number>(0);
  const [passiveIncome5, setPassiveIncome5] = useState<number>(0);

  const [multiplierPrice1, setMultiplierPrice1] = useState<number>(10);
  const [multiplierPrice2, setMultiplierPrice2] = useState<number>(20);
  const [multiplierPrice3, setMultiplierPrice3] = useState<number>(30);
  const [multiplierPrice4, setMultiplierPrice4] = useState<number>(40);
  const [multiplierPrice5, setMultiplierPrice5] = useState<number>(50);
  const [passiveIncomePrice, setPassiveIncomePrice] = useState<number>(10);
  const [passiveIncomePrice2, setPassiveIncomePrice2] = useState<number>(20);
  const [passiveIncomePrice3, setPassiveIncomePrice3] = useState<number>(30);
  const [passiveIncomePrice4, setPassiveIncomePrice4] = useState<number>(40);
  const [passiveIncomePrice5, setPassiveIncomePrice5] = useState<number>(50);

  const [incomeUpgrade, setIncomeUpgrade] = useState<number>(1);
  const [incomeUpgradePrice, setIncomeUpgradePrice] = useState<number>(1000);
  const [clickUpgrade, setClickUpgrade] = useState<number>(1);
  const [clickUpgradePrice, setClickUpgradePrice] = useState<number>(1000);

  const [incomeUpgrade2, setIncomeUpgrade2] = useState<number>(1);
  const [incomeUpgradePrice2, setIncomeUpgradePrice2] = useState<number>(100000);
  const [clickUpgrade2, setClickUpgrade2] = useState<number>(1);
  const [clickUpgradePrice2, setClickUpgradePrice2] = useState<number>(100000);

  const [incomeUpgrade3, setIncomeUpgrade3] = useState<number>(1);
  const [incomeUpgradePrice3, setIncomeUpgradePrice3] = useState<number>(10000000);
  const [clickUpgrade3, setClickUpgrade3] = useState<number>(1);
  const [clickUpgradePrice3, setClickUpgradePrice3] = useState<number>(10000000);


  const [ascend, setAscend] = useState<number>(1);
  const [ascendPrice, setAscendPrice] = useState<number>(1000000);

  const multiplier = ((((multiplier1 + multiplier2 + multiplier3 + multiplier4 + multiplier5) * clickUpgrade) * clickUpgrade2) * clickUpgrade3) * ascend;    
  
  const income = ((((passiveIncome + passiveIncome2 + passiveIncome3 + passiveIncome4 + passiveIncome5) * incomeUpgrade) * incomeUpgrade2) * incomeUpgrade3) * ascend;

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
const clicks2 = 2;
const price2 = 2.3;
  const handleBuyMultiplier2 = () => {
    if (count >= multiplierPrice2) {
      setCount(prev => +(prev - multiplierPrice2).toFixed(2));
      setMultiplier2(prev => +(prev + clicks2).toFixed(2));
      setMultiplierPrice2(prev => +(prev * price2).toFixed(2));
    }
  };
  const clicks3 = 2.5;
  const price3 = 2.8;
  const handleBuyMultiplier3 = () => {
    if (count >= multiplierPrice3) {
      setCount(prev => +(prev - multiplierPrice3).toFixed(2));
      setMultiplier3(prev => +(prev + clicks3).toFixed(2));
      setMultiplierPrice3(prev => +(prev * price3).toFixed(2));
    }
  };
  const price4 = 3.5;
  const clicks4 = 3;
    const handleBuyMultiplier4 = () => {
    if (count >= multiplierPrice4) {
      setCount(prev => +(prev - multiplierPrice4).toFixed(2));
      setMultiplier4(prev => +(prev + clicks4).toFixed(2));
      setMultiplierPrice4(prev => +(prev * price4).toFixed(2));
    }
  };

  const price5 = 6.5;
  const clicks5 = 5;
    const handleBuyMultiplier5 = () => {
    if (count >= multiplierPrice5) {
      setCount(prev => +(prev - multiplierPrice5).toFixed(2));
      setMultiplier5(prev => +(prev + clicks5).toFixed(2));
      setMultiplierPrice5(prev => +(prev * price5).toFixed(2));
    }
  };

  const income1 = 1;
  const handlePassiveIncome = () =>  {
    if (count >= passiveIncomePrice) {
      setCount(prev => +(prev - passiveIncomePrice).toFixed(2));
      setPassiveIncome(prev => +(prev + income1).toFixed(2));
      setPassiveIncomePrice(prev => +(prev * price1).toFixed(2));
    }
  };
  const income2 = 1.5;
  const handlePassiveIncome2 = () => {
    if (count >= passiveIncomePrice2) {
      setCount(prev => +(prev - passiveIncomePrice2).toFixed(2));
      setPassiveIncome2(prev => +(prev + income2).toFixed(2));
      setPassiveIncomePrice2(prev => +(prev * price2).toFixed(2));
    }
  };
  const income3 = 2;
  const handlePassiveIncome3 = () => {
    if (count >= passiveIncomePrice3) {
      setCount(prev => +(prev - passiveIncomePrice3).toFixed(2));
      setPassiveIncome3(prev => +(prev + income3).toFixed(2));
      setPassiveIncomePrice3(prev => +(prev * price3).toFixed(2));
    }
  };
  const income4 = 3;
  const handlePassiveIncome4 = () => {
    if (count >= passiveIncomePrice4) {
      setCount(prev => +(prev - passiveIncomePrice4).toFixed(2));
      setPassiveIncome4(prev => +(prev + income4).toFixed(2));
      setPassiveIncomePrice4(prev => +(prev * price4).toFixed(2));
    }
  };
  const income5 = 4.5;
  const handlePassiveIncome5 = () => {
    if (count >= passiveIncomePrice5) {
      setCount(prev => +(prev - passiveIncomePrice5).toFixed(2));
      setPassiveIncome5(prev => +(prev + income5).toFixed(2));
      setPassiveIncomePrice5(prev => +(prev * price5).toFixed(2));
    }
  };
  const upgrades = 3;
  const upgradecost = 50;
    const handleUpgradeClicks = () => {
    if (count >= clickUpgrade) {
      setCount(prev => +(prev - clickUpgradePrice).toFixed(2));
      setClickUpgrade(prev => +(prev * upgrades).toFixed(2));
      setClickUpgradePrice(prev => +(prev * upgradecost).toFixed(2));
    }
  };
    const handleUpgradeIncome = () => {
    if (count >= incomeUpgrade) {
      setCount(prev => +(prev - incomeUpgradePrice).toFixed(2));
      setIncomeUpgrade(prev => +(prev * upgrades).toFixed(2));
      setIncomeUpgradePrice(prev => +(prev * upgradecost).toFixed(2));
    }
  };
  const upgrades2 = 6;
  const upgradecost2 = 250;
      const handleUpgradeClicks2 = () => {
    if (count >= clickUpgrade2) {
      setCount(prev => +(prev - clickUpgradePrice2).toFixed(2));
      setClickUpgrade2(prev => +(prev * upgrades2).toFixed(2));
      setClickUpgradePrice2(prev => +(prev * upgradecost2).toFixed(2));
    }
  };
      const handleUpgradeIncome2 = () => {
    if (count >= incomeUpgrade2) {
      setCount(prev => +(prev - incomeUpgradePrice2).toFixed(2));
      setIncomeUpgrade2(prev => +(prev * upgrades2).toFixed(2));
      setIncomeUpgradePrice2(prev => +(prev * upgradecost2).toFixed(2));
    }
  };
  const upgrades3 = 35;
  const upgradecost3 = 15000;
       const handleUpgradeClicks3 = () => {
    if (count >= clickUpgrade3) {
      setCount(prev => +(prev - clickUpgradePrice3).toFixed(2));
      setClickUpgrade3(prev => +(prev * upgrades3).toFixed(2));
      setClickUpgradePrice3(prev => +(prev * upgradecost3).toFixed(2));
    }
  };
      const handleUpgradeIncome3 = () => {
    if (count >= incomeUpgrade3) {
      setCount(prev => +(prev - incomeUpgradePrice3).toFixed(2));
      setIncomeUpgrade3(prev => +(prev * upgrades3).toFixed(2));
      setIncomeUpgradePrice3(prev => +(prev * upgradecost3).toFixed(2));
    }
  };
  const ascention = 1;
  const ascentionprice = 1000;
  const handleAscend = () => {
    if (count >= ascendPrice) {
      setAscend(prev => +(prev + ascention).toFixed(2));
      setCount(0);
      setMultiplier1(1);
      setMultiplier2(0);
      setMultiplier3(0);
      setMultiplier4(0);
      setMultiplier5(0);
      setPassiveIncome(0);
      setPassiveIncome2(0);
      setPassiveIncome3(0);
      setPassiveIncome4(0);
      setPassiveIncome5(0);
      setMultiplierPrice1(10);
      setMultiplierPrice2(20);
      setMultiplierPrice3(30);
      setMultiplierPrice4(40);
      setMultiplierPrice5(50);
      setPassiveIncomePrice(10);
      setPassiveIncomePrice2(20);
      setPassiveIncomePrice3(30);
      setPassiveIncomePrice4(40);
      setPassiveIncomePrice5(50);
      setIncomeUpgrade(1);
      setIncomeUpgradePrice(1000);
      setClickUpgrade(1);
      setClickUpgradePrice(1000);
      setIncomeUpgrade2(1);
      setIncomeUpgradePrice2(100000);
      setClickUpgrade2(1);
      setClickUpgradePrice2(100000);
      setIncomeUpgrade3(1);
      setIncomeUpgradePrice3(10000000);
      setClickUpgrade3(1);
      setClickUpgradePrice3(10000000);
      setAscendPrice(prev => +(prev * ascentionprice).toFixed(2));
    }
  };

  return (
    <>
    <div className="ascends">
      <h2>Ascends</h2>
      <button className="ascend" onClick={handleAscend} disabled={count < ascendPrice}>
        Ascend {ascention} (Price: {ascendPrice.toFixed(2)})
        </button>
    </div>
    <div className="Main">
      <h1>Click Counter</h1>
      <p>Click count: {count.toFixed(2)}</p>
      <p> 
        Current clicks: {multiplier.toFixed(2)}x
      </p>
      <p>Current passive income:{income .toFixed(2)} /s</p>
      <p>Ascension level: {ascend}</p>
      <button className="click-button" onClick={handleClick}><div>Click me!</div></button>
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
      <button onClick={handleBuyMultiplier4} disabled={count < multiplierPrice4}>
        Buy Multiplier {clicks4} (Price: {multiplierPrice4.toFixed(2)})
      </button>
      <button onClick={handleBuyMultiplier5} disabled={count < multiplierPrice5}>
        Buy Multiplier {clicks5} (Price: {multiplierPrice5.toFixed(2)})
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
        <button onClick={handlePassiveIncome4} disabled={count < passiveIncomePrice4}>
          Buy passive income {income4} (Price: {passiveIncomePrice4.toFixed(2)})
        </button>
        <button onClick={handlePassiveIncome5} disabled={count < passiveIncomePrice5}>
          Buy passive income {income5} (Price: {passiveIncomePrice5.toFixed(2)})
        </button>
      </div>
      </div>
    </div>
    <div className="upgrades">
      <h2>Upgrades</h2>
      <button onClick={handleUpgradeClicks} disabled={count < clickUpgradePrice }>
        Click multiplier {clickUpgrade} (Price: {clickUpgradePrice.toFixed(2)})
        </button>
      <button onClick={handleUpgradeIncome} disabled={count < incomeUpgradePrice }>
        Income multiplier {incomeUpgrade} (Price: {incomeUpgradePrice.toFixed(2)})
        </button>
      <h2>Golden Upgrades</h2>
      <button onClick={handleUpgradeClicks2} disabled={count < clickUpgradePrice2 }>
        Click multiplier {clickUpgrade2} (Price: {clickUpgradePrice2.toFixed(2)})
        </button>
      <button onClick={handleUpgradeIncome2} disabled={count < incomeUpgradePrice2 }>
        Income multiplier {incomeUpgrade2} (Price: {incomeUpgradePrice2.toFixed(2)})
        </button>
      <h2>Diamond Upgrades</h2>
      <button onClick={handleUpgradeClicks3} disabled={count < clickUpgradePrice3 }>
        Click multiplier {clickUpgrade3} (Price: {clickUpgradePrice3.toFixed(2)})
        </button>
      <button onClick={handleUpgradeIncome3} disabled={count < incomeUpgradePrice3 }>
        Income multiplier {incomeUpgrade3} (Price: {incomeUpgradePrice3.toFixed(2)})
        </button>
    </div>
    </>
  );  
}

export default App;