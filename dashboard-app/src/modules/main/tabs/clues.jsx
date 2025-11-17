//import React
import {useEffect, useState} from "react";

//import components

//import assets
import image from "../../../../public/mocks/images/sequences/image.png"

//import styles 
import "./style.css";


function SequenceItem3({ sequence, setActiveSequence }) {
  
  function handleClick() {
    setActiveSequence(sequence);
  }

  return (<><div className="AnimationItem" onClick={handleClick}>

    <div className="AnimationItemDescription">
      <div className="AnimationItemDescriptionPreview">
        <img alt="aperçu de séquence" src={image} style={{ height: "100%", width: "150px" }} />
      </div>

      <div className="AnimationDescriptionInfos">
        <div className="AnimationDescriptionInfosTitle">
          {sequence.title}
        </div>
        <div className="AnimationDescriptionInfosDescription">
          {sequence.description}
        </div>
      </div>
    </div>
    <div className="AnimationItemPosition">{sequence.order}</div>
    <div className="AnimationItemDuration">{sequence.duration}</div>

  </div>
  </>)
}

function DashboardMainCluesTab({setActiveSequence}) {
  const [sequences, setSequences] = useState(null);
  useEffect(() => {
    fetch("/mocks/sequence_animation.json")
      .then(response => {
        if (!response.ok) {
          throw new Error("Error");
        }
        return response.json();
      })
      .then(data => {
        console.log("Clues data succes", data);
        setSequences(data)
      })
      .catch(error => {
        console.log("Catch Error : ", error);
      })  
  }, []);

  return (
    <>
      <div className="AnimationTitles">
        <p>Indices :</p>
        <p>Position</p>
        <p>Durée</p>
      </div>
      <div className="AnimationList">
        {(sequences) ? <>
          {sequences.map((sequenceItem) => <SequenceItem3 sequence={sequenceItem} setActiveSequence={setActiveSequence} />)}
        </> : <> Loading sequences</>}
      </div>
    </>
  )
}

export default DashboardMainCluesTab
