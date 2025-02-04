import Container from "react-bootstrap/esm/Container";
import AreaChart from './AreaChart';
import BarChart from './BarChart';

import { useState, useEffect } from 'react';

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

function InvestmentTool(){

    const [data, setData] = useState(null);
    const [amount, setAmount] = useState(10000);
    const [duration, setDuration] = useState(12);
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
        <section id="invest">
            <h1>Invest with us!</h1>
            <br />
            <Container>
            <GridItem title="Entwicklung Anlagewert">
            <AreaChart data={data} />  
            </GridItem>

            <GridItem title="Rate">
              <BarChart data={data} />
            </GridItem>
            <GridItem title="Input">
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
            </Container>
            
        </section>
    )
}

export default InvestmentTool;