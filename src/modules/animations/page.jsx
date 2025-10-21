import { useState, useEffect } from "react";
import image from '../../assets/images/sequences/image.png';
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
    <hr style={{color:"black"}}/>
  </>)
}


/*

   { 
            (Data) ? <video controls="true" src={Data[0].file} />  : <> </>    
          }
 */

function ActiveSequencePreview({ sequence }) {
 
  return (<>
    <div style={{overflow:"hidden"}} className="AnimationSequencePreviewCont">
      <video style={{objectFit:"cover", width:"100%", height:"100%"}} controls="true" src={sequence.file} type="video/mp4" autoPlay muted playsInline/> 
    </div>
  </>);
}

function NoActiveSequencePreview() {
  return (
    <div style={{margin:"20px"}} className="AnimationSequencePreviewCont">
      <p className="AnimationSequenceP">
        Désactivé
      </p>
    </div>
  );
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
    fetch("/mocks/sequence.json")
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

  //------------------------------------------------------------------------------------------

  return (<>
    <div className="AnimationContainer">
      <div className="AnimationTable">
        <p style={{display:"flex", flexDirection:"row"}}>Écran principal</p>
        <p>Écran secondaire</p>
        <p>Écran input</p>
        <p>S</p>
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

export default AnimationsPage;
