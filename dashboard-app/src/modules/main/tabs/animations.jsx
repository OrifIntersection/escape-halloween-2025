//import React
import { useState, useEffect, use, Fragment } from "react";

//import components

//import assets
import image from "/public/mocks/images/sequences/image.png";

//import styles
import "./style.css";

function SequenceItem1({ sequence, setActiveSequence }) {
  console.log(sequence, "sequence final")
  // Fonction du click sur la séquence
  function handleClick() {
    setActiveSequence(sequence);
  }

  return (<>
    <div className="AnimationItem" onClick={handleClick}>
      <div className="AnimationItemDescription">
        <div className="AnimationItemDescriptionPreview">
          <img alt="aperçu de séquence" src={image} style={{ height: "100%", width: "150px" }} />
        </div>
        <div className="AnimationDescriptionInfos">
          <div className="AnimationDescriptionInfosTitle">
            {sequence.name}
          </div>
          <div className="AnimationDescriptionInfosDescription">
            {sequence.id}
          </div>
        </div>
      </div>
      <div className="AnimationItemDuration">{sequence.durationInSeconds} sec.</div>
    </div>
  </>)
}

function DashboardMainAnimationsTab({ setActiveSequence }) {
  const [sequences, setSequences] = useState(null);

  useEffect(() => {
    fetch("/mocks/storyline.json")
      .then(res => res.json())
      .then(data => {
        setSequences(data)
      })
      .catch(error => {
        console.log("Catch Error : ", error)
      })
  }, [])

  return (
    <div className="AnimationWrapper">
      <div className="AnimationHeader">
        <div className="AnimationHeaderDescription">Séquences :</div>
        <div className="AnimationHeaderDuration">Durée :</div>
      </div>
      <div className="AnimationList">
        {(sequences) ? <>
          {sequences?.sections.map((sequenceItem) => <Fragment key={sequenceItem.id}>{
            sequenceItem.animations.map((sequenceAnimation, index) => <SequenceItem1 key={index} sequence={sequenceAnimation} setActiveSequence={setActiveSequence} />)
          }</Fragment>)}
        </> : <>Loading sequences</>}
      </div>
    </div>
  )
}

export default DashboardMainAnimationsTab
