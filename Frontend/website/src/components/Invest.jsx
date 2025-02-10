import { useState } from "react";
import InvestmentTool from "./Investment";
import CompareInvestments from "./CompareInvest";
import Info from "./Info";
import TabButton from "./TabButton";

export default function Invest(){
    const [selectInv, setSelectInv] = useState("info")
    console.log(selectInv);
    return(
        <> <section id="invest">

        
            <h1>invest</h1>
            <menu>
            <button onClick={() => setSelectInv("invest")} className={selectInv === "invest" ? "active" : ""}>invest</button>
            <button onClick={() => setSelectInv("compare") }className={selectInv === "compare" ? "active" : ""}>compare</button>
            <button onClick={() => setSelectInv("info")} className={selectInv === "info" ? "active" : ""}>info</button>

            </menu>
            <div style={{ marginTop: "20px" }}>
                {selectInv === "invest" && <InvestmentTool />}
                {selectInv === "compare" && <CompareInvestments />}
                {selectInv === "info" && <Info />}
            </div>
            </section>
        </>
    )
}