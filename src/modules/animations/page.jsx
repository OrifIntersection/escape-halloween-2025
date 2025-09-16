import { useState, useEffect } from "react";

import "./style.css";

function SequenceItem({Sequences, i}) {
  return (<>
    <div className="AnimationSequenceContainer">
      <div>
        <img alt="aperçu de séquence" src="assets/images/sequences/image.png" style={{height:"100px",width:"100px"}}/>
      </div>
      <div className="AnimationSequenceInfoCont">
        <div className="AnimationSequenceInfoTitle">
          {Sequences[i]?.title}
        </div>
        <div className="AnimationSequenceInfoDescr">
          {Sequences[i]?.description}
        </div>

      </div>
      <div>
        {Sequences[i]?.order}
      </div>
      <div style={{paddingLeft:"2%"}}>
        {Sequences[i]?.duration}
      </div>
    </div>  
  </>)  
}

function AnimationsPage() {

// Données mockées

  const [Sequences, setSequences] = useState("");
  let i = 0;

//                                                  /\
// Récupération des données via useState Sequences /||\
//                                                  ||
//                                                  ||

  useEffect(() => {
    fetch("/mocks/sequence.json")
        .then(response => {
          if (!response.ok) {
            throw new Error("Error");
          }
          return response.json();
        })
        .then(data => {
          setSequences(data)
          console.log("Fetch succes, update: ", data);

        })
        .catch(error => {
          console.log("Catch Error : ", error);
        })
    }, []);


  return (<>
      <div className="AnimationContainer">
            <div className="AnimationSequencePreviewCont">
              <p>Aperçu</p>
            </div>
            <div>
              
            </div>
            <div className="AnimationSequenceTitles">
              <p>Séquences :</p>
              <p>Position</p>
              <p>Durée</p>
              </div>
            <div className="AnimationSequencesListCont">
            <SequenceItem Sequences={Sequences} i={0}/>
            <SequenceItem Sequences={Sequences} i={1}/>
            <SequenceItem Sequences={Sequences} i={2}/>
            </div>
      </div>
  </>)
}

export default AnimationsPage;
