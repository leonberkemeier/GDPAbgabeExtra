import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AreaChart from './assets/components/AreaCharts';
import BarChart from './assets/components/BarChart';
// import InputItem from './assets/components/InputItem';

import api from './api/axiosConfig';

function Header(){
  return (
    <header>
        <h1>React Essentials</h1>
        <p>
          Fundamentals in React my guy
        </p>
    </header>
  )
}

function GridItem({title, children}){
  return(
    <div className="GridItemDiv">
      <h3>{title}</h3>
      <div className="GridItem">
        {children}
      </div>
    </div>
  )
}

function App() {
  const [data, setData] = useState(null);
  const [amount, setAmount] = useState(10000);
  const [duration, setDuration] = useState(5);
  const [investmentType, setInvestmentType] = useState("stock");

  const fetchData = async () => {
    const response = await fetch("http://localhost:8080/api/investments/simulate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        amount,
        duration,
        investmentType,
      }),
    });
  
    const result = await response.json();
    setData(result);
    console.log(result);  // Statt console.log(data)
  };

  return (
    <>
      <GridItem title="Entwicklung Anlagewert">
        <AreaChart data={data} />  
      </GridItem>

      <GridItem title="Rate">
        <BarChart data={data} />
      </GridItem>
      <GridItem title="input">
      <div className='InputContainer' style={{ padding: "20px" }}>
            <h2>Investment Simulation</h2>
            <label>Investitions Typ:</label>
            <select value={investmentType} onChange={(e) => setInvestmentType(e.target.value)}>
                <option value="stock">Aktien</option>
                <option value="bond">Anleihe</option>
                <option value="realestate">Imobilien</option>
            </select>
            <label>AnlageBetrag:</label>
            <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} />

            <label>AnlageDauer (Jahre):</label>
            <input type="number" value={duration} onChange={(e) => setDuration(e.target.value)} />

            

            <button onClick={fetchData}>Simulate Investment</button>

            
        </div>
      </GridItem>
    </>
  )
}

export default App
