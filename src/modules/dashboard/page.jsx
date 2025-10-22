import { useState } from "react";
import AnimationsPage from "../animations/page.jsx";
import AnswersPage from "../answers/page.jsx";
import CluesPage from "../clues/page.jsx";
import "./style.css";

function SequencesAnimations() {
  return(<>
      <AnimationsPage/>
  </>)
}

function SequencesAnswers() {
  return(<>
      <AnswersPage/>
  </>)
}

function SequencesClues() {
  return(<>
    <h1 style={{margin:"20px"}}>
      <CluesPage/>
    </h1>
  </>)
}
function DashboardPage() {

  // Dashboard - Content of sequencies table
  let element;

  const [Sequence, setSequence] = useState(0);
 
  switch(Sequence) {
    case 0:
      element = <SequencesAnimations/>
    break;

    case 1:
      element = <SequencesAnswers/>
    break;

    case 2:
      element = <SequencesClues/>
    break;
  }

  // Autres var

  return (<>
  
    <div className="DashboardContainer">
      <h1>
              TABLEAU DE BORD HALLOWEEN         
      </h1>
      <div className="DashboardNavCont">

      </div>
      <div className="DashboardElementsCont">
        <div className="DashboardElementStoryframeCont">
          <p style={{margin:"20px"}}> Trame de l'histoire </p>
        </div>
        <div className="DashboardElementSequenceCont">
          {element}
        </div>
      </div>
    </div>
  </>)
}

export default DashboardPage
