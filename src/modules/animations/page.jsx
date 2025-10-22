import { useState, useEffect } from "react";
import image from '../../assets/images/sequences/image.png';
import "./style.css";
//------------------------------------------------------------------------------------------------------------------------------  ECRAN PRINCIPAL  -----------
function SequenceItem1({ sequence1, setActiveSequence1 }) {

  // Fonction du click sur la séquence

  function handleClick(e) {
    e.preventDefault();
    setActiveSequence1(sequence1);
  }

  return (<>
    <div className="AnimationSequenceContainer" onClick={handleClick}>
      <div>
        <img alt="aperçu de séquence" src={image} style={{ height: "100%", width: "150px" }} />
      </div>

      <div className="AnimationSequenceInfoCont">
        <div className="AnimationSequenceInfoTitle">
          {sequence1.title}
        </div>
        <div className="AnimationSequenceInfoDescr">
          {sequence1.description}
        </div>
      </div>

      <div>
        {sequence1.order}
      </div>

      <div style={{ paddingLeft: "2%" }}>
        {sequence1.duration}
      </div>
    </div>
    <hr style={{ color: "black" }} />
  </>)
}

function ActiveSequencePreview({ sequence }) {

  return (<>
    <div style={{ overflow: "hidden" }} className="AnimationSequencePreviewCont">
      <video style={{ objectFit: "cover", width: "100%", height: "100%" }} controls="true" src={sequence.file} type="video/mp4" autoPlay muted playsInline />
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





function AnimationsPage() {

  //------------------------------------------------------------------------------------------
  //                                        Séquences
  //------------------------------------------------------------------------------------------ 

  // State de la séquence active + son aperçu
  const [activeSequence, setActiveSequence] = useState(null);

  //------------------------------------------------------------------------------------------
  //                                         Données 
  //------------------------------------------------------------------------------------------
  const [sequences1, setSequences1] = useState(null);

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
        setSequences1(data)
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



//-------------------------------------------------------------------------------------------------------------------------  ECRAN SECONDAIRE  ----------------
 
const [sequences2, setSequences2] = useState(null);

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
        setSequences2(data)
      })
      .catch(error => {
        console.log("Catch Error : ", error);
      })
  }, []);

//------------------------------------------------------------------------------------------------------------------------  Fonctions des écrans  -----
function PrincipalScreen() {
    return (<>
      <div className="AnimationContainer">
        <div className="AnimationTable">
          {tabs.map((tab, index) => {
            return (<>
              <AnimationTable tab={tab} index={index} activeTab={activeTab} setActiveTab={setActiveTab} tabs={tabs} />
            </>)
          })}

        </div>
        {(activeSequence) ? <ActiveSequencePreview sequence={activeSequence} /> : <NoActiveSequencePreview />}
        <div className="AnimationSequenceTitles">
          <p>Séquences :</p>
          <p>Position</p>
          <p>Durée</p>
        </div>
        <div className="AnimationSequencesListCont">
          {(sequences1) ? <>
            {sequences1.map((SequenceItem1) => <SequenceItem1 sequence1={SequenceItem1} setActiveSequence1={setActiveSequence1} />)}
          </> : <>Loading sequences</>}
        </div>
      </div>
    </>)
  }

  function SecondaryScreen() {
    return (<>
      <div className="AnimationContainer">
        <div className="AnimationTable">
          {tabs.map((tab, index) => {
            return (<>
              <AnimationTable tab={tab} index={index} activeTab={activeTab} setActiveTab={setActiveTab} tabs={tabs} />
            </>)
          })}

        </div>
        {(activeSequence) ? <ActiveSequencePreview sequence={activeSequence} /> : <NoActiveSequencePreview />}
        <div className="AnimationSequenceTitles">
          <p>Séquences :</p>
          <p>Position</p>
          <p>Durée</p>
        </div>
        <div className="AnimationSequencesListCont">
          {(sequences2) ? <>
            {sequences2.map((sequenceItem) => <SequenceItem sequence={sequenceItem} setActiveSequence={setActiveSequence} />)}
          </> : <>Loading sequences</>}
        </div>
      </div>
    </>)
  }

  function InputScreen() {

  }

  function Dashboard() {

  }

  switch (activeTab) {
    case tabs[0]:
      return (<>
        <PrincipalScreen />
      </>)
    case tabs[1]:
      return (<>
        <SecondaryScreen />
      </>)
    case tabs[2]:
      break;
    case tabs[3]:
      break;
  }

}

export default AnimationsPage;
