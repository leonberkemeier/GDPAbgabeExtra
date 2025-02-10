import Container from "react-bootstrap/esm/Container";
import AreaChart from './AreaChart';
import LineChart from './LineChart';
import TabButton from "./TabButton";

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

//Endpunkt bietet falsched Datenformat (lange dran gesessen) -> neues Format
const transformData = (data) => {
    if (!data || data.length !== 3) return [];

    return data[0].map((_, index) => ({
        year: data[0][index].year,
        stock: data[0][index].amount,      
        bond: data[1][index].amount,        
        real_estate: data[2][index].amount  
    }));
};


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

    const fetchAllData = async () => {
        const investmentTypes = ["stock", "bond", "realestate"];
    
        try {
            const responses = await Promise.all(
                investmentTypes.map((type) =>
                    fetch("http://localhost:8080/api/investments/simulate", {
                        method: "POST",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify({
                            amount,
                            duration,
                            investmentType: type, 
                        }),
                    }).then((res) => res.json())
                )
            );
    
            setData(responses);
            console.log(responses); 
        } catch (error) {
            console.error("Fehler beim Abrufen der Daten:", error);
        }
    };
    
    const chartData = transformData(data);
    console.log(chartData);
    // console.log(lastItem);
    return (
      <>
        <div className="content">
            <h1>Invest with us!</h1>
            <br />
            <Container className="Grid-Container">
            <GridItem title="Entwicklung Anlagewert">
                <LineChart data={chartData}></LineChart>  
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

                  <button onClick={fetchAllData}>Simulate Investment</button>
              </div>
            </GridItem>  
            </Container>
            <br />
           
        
        </div>

        </>
    )
}

export default InvestmentTool;