import { useState } from "react";
import AnimationsPage from "../animations/page.jsx";
import AnswersPage from "../answers/page.jsx";
import CluesPage from "../clues/page.jsx";
import "./style.css";
function SequenceItem({ sequence, setActiveSequence }) {

  // Fonction du click sur la séquence

  function handleClick(e) {
    e.preventDefault();
    setActiveSequence(sequence);
  }

  return (<>
    <div className="AnimationSequenceContainer" onClick={handleClick}>
      <div>
        <img alt="aperçu de séquence" src={image} style={{ height: "100%", width: "150px" }} />
      </div>

      <div className="AnimationSequenceInfoCont">
        <div className="AnimationSequenceInfoTitle">
          {sequence.title}
        </div>
        <div className="AnimationSequenceInfoDescr">
          {sequence.description}
        </div>
      </div>

      <div>
        {sequence.order}
      </div>

      <div style={{ paddingLeft: "2%" }}>
        {sequence.duration}
      </div>
    </div>
    <hr style={{ color: "black" }} />
  </>)
}

function ActiveSequencePreview({ sequence }) {

  return (<>
    <div style={{ overflow: "hidden" }} className="AnimationSequencePreviewCont">
      <video style={{ objectFit: "cover", width: "100%", height: "100%" }} controls={true} src={sequence.file} type="video/mp4" autoPlay muted playsInline />
    </div>
  </>);
}

function NoActiveSequencePreview() {
  return (
    <div style={{}} className="AnimationSequencePreviewCont">
      <p className="AnimationSequenceP">
        Désactivé
      </p>
    </div>
  );
}

function AnimationTable({ tab, tabs, activeTab, index, setActiveTab }) {
  function handleClick(e) {
    e.preventDefault();
    setActiveTab(tabs[index])
  }
  return (<>
    <div onClick={handleClick} className={(tab.id === activeTab.id) ? "AnimationTableActive" : "AnimationTableInactive"}> {tab.label} </div>
  </>);
}
function DashboardPage() {
  
    //------------------------------------------------------------------------------------------
    //                                        Séquences
    //------------------------------------------------------------------------------------------ 
  
    // State de la séquence active + son aperçu
    const [activeSequence, setActiveSequence] = useState(null);
  
    //------------------------------------------------------------------------------------------
    //                                         Données 
    //------------------------------------------------------------------------------------------
    const [sequences, setSequences] = useState(null);
  
    /*                                                  /\
       Récupération des données via useState Sequences /||\
                                                        ||
                                                        ||
    */
    useEffect(() => {
      fetch("/mocks/sequence_pincipal.json")
        .then(response => {
          if (!response.ok) {
            throw new Error("Error");
          }
          return response.json();
        })
        .then(data => {
          console.log("Fetch succes, update: ", data);
          setSequences(data)
        })
        .catch(error => {
          console.log("Catch Error : ", error);
        })
    }, []);
  
  
    //----------------------------------Navigation bar-----------------------------------------
  
    const [tabs, setTabs] = useState(
      [
        {
          "id": 0,
          "label": "Écran principal",
        },
        {
          "id": 1,
          "label": "Écran indices",
        },
        {
          "id": 2,
          "label": "Écran input",
        },
        {
          "id": 3,
          "label": "Dashboard",
        }
      ]
    );
  
    const [activeTab, setActiveTab] = useState(tabs[0]);
  
  // VIRER SES ECRANS SUR LES AUTRES FICHIER PAGE.JSX
  
  // Dashboard - Content of sequencies table
  let element;

  const [Sequence, setSequence] = useState(0);

  switch (Sequence) {
    case 0:
      element = <AnimationsPage SequenceItem={SequenceItem} tabs={tabs} setTabs={setTabs} activeTab={activeTab} setActiveTab={setActiveTab} sequences={sequences} setSequences={setSequences} activeSequence={activeSequence} setActiveSequence={setActiveSequence}/>
      break;
    case 1:
      element = <AnswersPage />
      break;

    case 2:
      element = <CluesPage />
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
          <p style={{ margin: "20px" }}> Trame de l'histoire </p>
        </div>
        <div className="DashboardElementSequenceCont">
          {element}
        </div>
      </div>
    </div>
  </>)
}

export default DashboardPage
