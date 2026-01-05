//import React
import { useEffect, useState, Fragment } from "react";

//import components

//import assets
import image from "../../../../public/mocks/images/sequences/image.png"

//import styles 
import "./style.css";

function SequenceItem3({ sequence, setActiveSequence }) {
  function handleClick() {
    setActiveSequence(sequence)
  }

  return (<>
    <div className="AnimationItem" onClick={handleClick}>
      <div className="AnimationItemDescription">
        <div className="AnimationItemDescriptionPreview">
          <img alt="aperçu de séquence" src={image} style={{ height: "100%", width: "150px" }} />
        </div>
        <div className="AnimationDescriptionInfos">
          <div className="AnimationDescriptionInfosDescription">
            Enigme : {sequence.id}
          </div>
          <div className="AnimationDescriptionInfosTitle">
            {sequence.content}
          </div>
        </div>
      </div>
      <div className="AnimationItemDuration">{sequence.displayAfter} sec.</div>
    </div>
  </>)
}

function DashboardMainCluesTab({ setActiveSequence }) {
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
        <div className="AnimationHeaderDescription">Indices :</div>
        <div className="AnimationHeaderDuration">Lancer après : </div>
      </div>
      <div className="AnimationList">
        {(sequences) ? <>
          {sequences?.sections.map((sequenceItem) => <Fragment key={sequenceItem.id}> {
            sequenceItem.clues.map((sequenceClues, index) => <SequenceItem3 key={index} sequence={sequenceClues} setActiveSequence={setActiveSequence} />)
          }
          </Fragment>
          )}
        </> : <>Loading sequences</>}
      </div>
    </div>
  )
}

export default DashboardMainCluesTab
