//import React
import { useState, useEffect } from "react";

//import styles
import "./storyline.css";

function StorylineSectionHeader({ section }) {
  return (<>
    <div className="StorylineLayoutContainer">
      <section className="StorylineLayout">
        <div className="StoryLineName" style={{ fontSize: "27px" }}>{section.name}</div>
        <div className="StoryLineDescription">{section.description}</div>
      </section>
      <section className="StorylineLayout">
        <div>{section.difficulty}</div>
        <div style={{ display: "flex", flexFlow: "row nowrap", justifyContent: "center" }}>{section.durationInMinutes} mins.</div>
      </section>
    </div>
  </>)
}

function StorylineSectionAnimationContent({ animation }) {
  return (<>
    <div className="StoryLineContent">
      <div style={{ display: "flex", flexDirection: "row", alignItems: "flex-start", width: "80px" }}>{animation.position}</div>
      <div style={{ display: "flex", flexDirection: "row", alignItems: "flex-start",  width: "200px"}} className="StoryLineContentPosition ">{animation.name}</div>
      <div style={{ display: "flex", flexDirection: "row", alignItems: "flex-start", width: "auto" }}>Durée : {animation.durationInSeconds} sec.</div>
    </div>
  </>)
}

function StorylineSectionCluesContent({ clues }) {
  return (<>
    <div className="StoryLineContent">
      <div style={{ display: "flex", flexDirection: "row", alignItems: "flex-start", width: "80px" }}>{clues.id}</div>
      <div style={{ display: "flex", flexDirection: "row", alignItems: "flex-start", width: "60%" }} className="StoryLineContentPosition ">{clues.content}</div>
      <div style={{ display: "flex", flexDirection: "row", alignItems: "flex-start", width: "auto" }}>Durée : {clues.displayAfter} sec.</div>
    </div>
  </>)
}

function StorylineSectionInputContent({ input, section, index2, position, setPosition }) {
  /*setPosition(position + 1)*/
  switch (input.sectionsId) {
    case section.id:
      return (<>
        <div className="StoryLineContent">
          <div style={{ display: "flex", flexDirection: "row", alignItems: "flex-start", width: "60%" }} className="StoryLineContentPosition ">{input.content}</div>
          <div style={{ display: "flex", flexDirection: "row", alignItems: "flex-start", width: "auto" }}>{position}</div>
        </div>
      </>)
  }

}

function StorylineSection({ section, activeTab, input, index }) {
  const [position, setPosition] = useState(1)
  switch (activeTab.label) {
    case "Écran principal":
      return (<>
        <div className="StoryLineLayoutBox">
          <StorylineSectionHeader section={section} />
          <div className="StoryLineLayoutContentContainer">
            {(section) ? <> {section.animations.map((animation) => <StorylineSectionAnimationContent key={animation.id} animation={animation} />)}</> : <><h2>Loading Storyline...</h2></>}
          </div>
        </div>
      </>)
    case "Écran indices":
      return (<>
        <div className="StoryLineLayoutBox">
          <StorylineSectionHeader section={section}/>
          <div className="StoryLineLayoutContentContainer">
            {(section) ? <> {section.clues.map((clues) => <StorylineSectionCluesContent key={clues.id} clues={clues} />)}</> : <><h2>Loading Storyline...</h2></>}
          </div>
        </div>
      </>)
    case "Écran input":
      return (<>
        <div className="StoryLineLayoutBox">
          <StorylineSectionHeader section={section} />
          <div className="StoryLineLayoutContentContainer">{
            (input) ?
              <> {input?.inputs.map((input, index2) => <StorylineSectionInputContent key={input.id} input={input} section={section} index2={index2} position={position} setPosition={setPosition} />)}</>
              : <><h2>Loading Storyline...</h2></>}
          </div>
        </div>
      </>)
  }
}

function StorylineLayout({ storyLine, activeTab, input }) {
  return (<>
    <div className="StoryLineTitle">
      Trame de l'histoire
    </div>
    {storyLine?.sections.map((section, index) => <StorylineSection key={section.id} index={index} section={section} activeTab={activeTab} input={input} />)}
  </>)
}

//Principal
function DashboardSidebarStoryline({ activeTab }) {
  const [storyLine, setStoryLine] = useState(null);
  const [input, setInput] = useState(null);

  useEffect(() => {
    fetch("/mocks/storyline.json")
      .then(res => res.json())
      .then(data => {
        setStoryLine(data)
      })
      .catch(error => {
        console.log("Catch Error : ", error)
      })
  }, [])

  useEffect(() => {
    fetch("/mocks/input.json")
      .then(res => res.json())
      .then(data => {
        setInput(data)
      })
      .catch(error => {
        console.log("Catch Error : ", error)
      })
  }, [])

  return (<StorylineLayout storyLine={storyLine} activeTab={activeTab} input={input} />)
}

export default DashboardSidebarStoryline
