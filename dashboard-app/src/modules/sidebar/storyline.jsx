//import React
import { useState, useEffect } from "react";

//import styles
import "./storyline.css";

function StorylineSectionAnimation({ animation }) {

  return (<>
    <div className="StoryLineContent">
      <div style={{display:"flex", flexDirection:"row",alignItems:"flex-start", width:"80px"}}>{animation.position}</div>
      <div style={{display:"flex", flexDirection:"row",alignItems:"flex-start", width:"60%"}}className="StoryLineContentPosition ">{animation.name}</div>
      <div style={{display:"flex", flexDirection:"row",alignItems:"flex-start", width:"35%"}}>Durée : {animation.durationInSeconds} sec.</div>
    </div>
  </>)
}

function StorylineSectionHeader({section}) {
  return (<>
    <div className="StorylineLayoutContainer">
      <section className="StorylineLayout">
        <div className="StoryLineName " style={{ fontSize: "27px" }}>{section.name}</div>
        <div className="StoryLineDescription ">{section.description}</div>
      </section>
      <section className="StorylineLayout">
        <div>{section.difficulty}</div>
        <div style={{ display: "flex", flexFlow: "row nowrap", justifyContent: "center" }}>{section.durationInMinutes}</div>
      </section> 
    </div>
  </>)
}

function StorylineSection({ section }) {
  return (<>
    <div className="StoryLineLayoutBox">
      <StorylineSectionHeader section={section} />
      {section.animations.map((animation) => <StorylineSectionAnimation key={animation.id} animation={animation} />)}
    </div>
  </>)
}

function StorylineLayout({ storyLine }) {
  return (<>
    <div className="StoryLineTitle">
      Trame de l'histoire
    </div>
    {storyLine?.sections.map((section) => <StorylineSection key={section.id} section={section} />)}
  </>)
}

//Principal
function DashboardSidebarStoryline({ isHovered }) {
  const [storyLine, setStoryLine] = useState(null);

  useEffect(() => {
    fetch("/mocks/storyline.json")
      .then(res => res.json())
      .then(data => {
        setStoryLine(data)
        console.log("Storyline fetch succes");
      })
      .catch(error => {
        console.log(error("Catch Error : ", error))
      })
  }, [])

  return (<>
    <StorylineLayout storyLine={storyLine} />
  </>)
}

export default DashboardSidebarStoryline
