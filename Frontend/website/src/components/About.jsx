import jamieimg from '../assets/img/jamie.jpeg';
export default function About(){
    return(
        <> 
        <section id="about">
            <h1>about</h1>
            <div className='about'>
                <h1>Investmentsimulation</h1>
                <h2>Willkommen auf dem <span>ultimativen</span> Investment-Simulator</h2>
                <p>Du wolltest schon immer wissen, wie du mit Aktien so richtig reich wirst? Hier bist du definitiv an der richitgen Stelle. Mit dieser Anlagen-Simulation gewinnst du jede Runde Monopoly. Auch kannst du mit dieser Anwendung in jeder Kaffeepause deine Anleihen ueberpruefen</p>
                <p>Wir simulieren dein Geld virtuel und lassen es ohne Riskio fuer dich arbeiten. Vielleicht findest du ja einen Weg unsere modernen Algorithmen in die Realitaet umzusetzen.</p>
                <p>Probier es aus und finde heraus ob du der naechste Warren Buffet wirst oder lieber dein hart erarbeites Geld unter die Matratze legst</p>
            </div>

            <div className="jamie">
                <div className="jamieimgcontainer">
                    <img src={jamieimg} alt="jamie" />
                </div>
                
            <div className="thanks">
                <h1>Ein grosses Dankeschoen an unseren Lead Developer Jamie!</h1>
                <p>Diese Website waere ohne meinen treuen vierbeinigen Assistenten Jamie niemals moeglich gewesen. Waehrend ich (Leon) mich mit Bugs herumgetrieben habe, hat er mich moralisch unterstuetzt - meistens indem er schnarchend unter dem Schreibtisch lag. Auch ist mit so einem treuen Freund kein Rubber-Duck-Debugging notwendig. Durch seine besonders aufmerksame Art - unterstuetzt durch Leckerli wird jeder Bug zu einer Kleinigkeit</p>
                <p>Sein groester Beitrag? Er hat seinen Kopf auf die Tastatur gelegt und aufeinmal waren alle Fehler behoben. Ich bin mir sicher, dass er heimlich ein Genie ist.</p>
                <p>Danke, Jamie, fuer deine unermuedliche Unterstuetzung, deine Weisheit und vorallem dafuer, dass du mich erinnerst, dass es im Leben nicht nur um Code, sondern auch um Leckerlies geht!</p>
            </div>
            </div>

            
        </section>
            
        </>
    )
}