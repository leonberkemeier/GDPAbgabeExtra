import Container from "react-bootstrap/esm/Container";
import AreaChart from './AreaChart';
import LineChart from './LineChart';
import TabButton from "./TabButton";

import { useState, useEffect } from 'react';


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
                    fetch("https://invest.leonberkemeier.de/api/investments/simulate", {
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
        <div className="compare">
            <h1>Invest with us!</h1>
            <br />
            <Container className="Grid-Container">
            <div className="chartContainer">
              <h3>Entwicklung Anlageklassen</h3>
              <div className="chartItem">
              <LineChart data={chartData}></LineChart> 
              </div>
            </div>
            <div className="inputcontainer">
            <h3>Vergleiche die Anlageklassen</h3>
              <div className='InputContainer' style={{ padding: "20px" }}>
              
                  
                  
                  <label>AnlageBetrag:</label>
                  <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} />

                  <label>AnlageDauer (Jahre):</label>
                  <input type="number" value={duration} onChange={(e) => setDuration(e.target.value)} />

                  <button onClick={fetchAllData}>Simulate Investment</button>
              </div>
            </div>
            
            
            </Container>   
        
        </div>

        </>
    )
}
  


export default InvestmentTool;