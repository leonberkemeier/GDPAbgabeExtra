import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AreaChart from './assets/components/AreaCharts';
import BarChart from './assets/components/BarChart';
import InputItem from './assets/components/InputItem';

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
  const [amount, setAmount] = useState(1000);
  const [volatility, setVolatility] = useState(0.2);
  const [duration, setDuration] = useState(5);
  const [investmentType, setInvestmentType] = useState("stock");

  const fetchData = async () => {
      const response = await fetch("http://localhost:8080/api/investments/simulate", {
          method: "POST",
          headers: {
              "Content-Type": "application/json",
          },
          body: JSON.stringify({
              amount: amount,
              volatility: volatility,
              duration: duration,
              investmentType: investmentType,
          }),
      });

      const result = await response.json();
      setData(result);
      console.log(result);
    };

  return (
    <>
      <GridItem title="Entwicklung Anlagewert">
        <AreaChart/>  
      </GridItem>
      <GridItem title="Rate">
        <BarChart/>  
      </GridItem> 
      <GridItem title="input">
      <div className='InputContainer' style={{ padding: "20px" }}>
            <h2>Investment Simulation</h2>
            <label>Amount:</label>
            <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} />

            <label>Duration (years):</label>
            <input type="number" value={duration} onChange={(e) => setDuration(e.target.value)} />

            <label>Investment Type:</label>
            <select value={investmentType} onChange={(e) => setInvestmentType(e.target.value)}>
                <option value="stock">Stock</option>
                <option value="bond">Bond</option>
                <option value="real_estate">Real Estate</option>
            </select>

            <button onClick={fetchData}>Simulate Investment</button>

            {/* {data && (
                <div>
                    <h3>Simulation Results:</h3>
                    <p>Years: {data.years.join(", ")}</p>
                    <p>Values: {data.values.join(", ")}</p>
                </div>
            )} */}
        </div>
      </GridItem>
    </>
  )
}

export default App
