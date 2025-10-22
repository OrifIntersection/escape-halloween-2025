import { useState, useEffect } from "react";
import image from '../../assets/images/sequences/image.png';
import "./style.css";
//--------------------------------------------------------------------------------------------------------------------------------ECRAN PRINCIPAL -----------
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



//-------------------------------------------------------------------------------------------------------------------------  Ecran secondaires  ----------------
 




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
          {(sequences) ? <>
            {sequences.map((sequenceItem) => <SequenceItem sequence={sequenceItem} setActiveSequence={setActiveSequence} />)}
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
          {(sequences) ? <>
            {sequences.map((sequenceItem) => <SequenceItem sequence={sequenceItem} setActiveSequence={setActiveSequence} />)}
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
