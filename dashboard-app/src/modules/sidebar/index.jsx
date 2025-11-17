// import React
import { useState } from "react"
// import components
import DashboardSidebarStoryline from "./storyline"

function DashboardSidebar({activeTab, setActiveTab}) {
  return (
    <aside className="StoryLineContainer">
        <DashboardSidebarStoryline activeTab={activeTab} setActiveTab={setActiveTab}/>
    </aside>                
  )
}

export default DashboardSidebar