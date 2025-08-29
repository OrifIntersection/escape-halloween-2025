import { useState, useEffect } from "react";

import "./style.css";

function SequenceItem({Sequences}) {
  
  console.log("SequenceItem", Sequences);

  return (<>
    <div className="AnimationSequenceContainer">
      <div>
        <img alt="" src="/sequences/image.png" style={{}}/>
      </div>
      <div className="AnimationSequenceInfoCont">
        <div className="AnimationSequenceInfoTitle">

        {Sequences[0].title}
        </div>
        <div className="AnimationSequenceInfoDescr">

        </div>
      </div>
      <div></div>
      <div></div>
    </div>
    
    
    <h1>Hello</h1>
  </>)  
}

function AnimationsPage() {

// Données mockées

  const [Sequences, setSequences] = useState("");

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
            <div className="AnimationSequencesListCont">
            <SequenceItem Sequences={Sequences}/>
          
            </div>
      </div>
  </>)
}

export default AnimationsPage;
