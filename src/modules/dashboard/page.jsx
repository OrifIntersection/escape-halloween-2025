import { useState } from "react"
import "./style.css"

function MainSequence() {
  return(<>
    <h1 style={{margin:"10px"}}>
      Main
    </h1>
  </>)
}

function InputSequence() {
  return(<>
    <h1>
      Input
    </h1>
  </>)
}

function HintsSequence() {
  return(<>
    <h1>
      Hints
    </h1>
  </>)
}
function DashboardPage() {

  // Dashboard - Elements des séquences
  const [Sequence, setSequence ] = useState(0);

  let element;
  switch(Sequence) {
    case 0:
      element = <MainSequence/>
    break;

    case 1:
      element = <InputSequence/>
    break;

    case 2:
      element = <HintsSequence/>
    break;
  }

  // Autres var

  return (<>
    <div className="DashboardContainer">
      <h1>
        
        Une page pour monitorer l'avancement des participants par les animateurs, et activer états de la partie.
        
      </h1>
      <div className="NavCont">

      </div>
      <div className="DashboardElementsCont">
        <div className="DashboardElementStoryframeCont">
          <p>Trame de l'histoire</p>
        </div>
        <div className="DashboardElementSequenceCont">
          {element}
        </div>
        {/*
        <div className="DashboardElementMenuCont">
          <p>Menu</p>
        </div>
        */}
      </div>
    </div>
  </>)
}

export default DashboardPage
