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

function FinalAmount({data, amount}){
  if (data && data.length > 0) {
      console.log(data);
      const lastItem = data.at(-1);
      const LastAmount = lastItem.amount.toFixed(2);
      const LastYear = lastItem.year+1;
      
      if(LastAmount > amount){
        return(<>
          <h2>Endkapital nach {LastYear} Jahren : <p style={{ color: "green" }}>{LastAmount} EUR</p> bei einem Investment von <p style={{color:"white"}}>{amount} EUR </p></h2>
          <br />
          </>
        )
      
      } else{
        return(
          <h2>Endkapital nach {LastYear} Jahren : <p style={{ color: "red" }}>{LastAmount} EUR</p> bei einem Investment von <p style={{color:"white"}}>{amount} EUR </p></h2>
          
        )
      }

      
      
      
  } else {
      console.log("Daten sind nicht vorhanden");
      return(
        <p style={{ color: "white" }}>"Es sind noch keine Daten verfügbar. Bitte geben Sie Ihre gewünschten Investitionsparameter ein und starten Sie die Simulation, um eine Prognose zu erhalten."</p>
      )
  }
  
};

function InvestmentTool(){

    const [data, setData] = useState(null);
    const [amount, setAmount] = useState(10000);
    const [duration, setDuration] = useState(10);
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
    
    // console.log(lastItem);
    return (
        <section id="invest">
            <h1>Invest with us!</h1>
            <br />
            <Container className="Grid-Container">
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
            <br />
            <Container className="FinalAmount">
               <FinalAmount amount={amount} data={data}/>
            </Container>
        </section>
    )
}

export default InvestmentTool;