//import React
import { useState } from "react";

//import de composants
import DashboardMainNav from "./nav"
import DashboardMainActiveTab from "./active-tab"
import DashboardMainAnimationsTab from "./tabs/animations"
import DashboardMainAnswersTab from "./tabs/answers"
import DashboardMainCluesTab from "./tabs/clues"

//import de styles
import "./main.css"

//import d'assets


function DashboardMain({activeTab, setActiveTab, tabs}) {
  const [activeSequence, setActiveSequence] = useState(null);

  function Rest({activeTab, setActiveTab, activeSequence, setActiveSequence, tabs}) {
    return(<>
      <DashboardMainNav activeTab={activeTab} setActiveTab={setActiveTab} tabs={tabs} />
      <DashboardMainActiveTab activeTab={activeTab} activeSequence={activeSequence} setActiveSequence={setActiveSequence} />
    </>)
  }
  
  switch (activeTab.id){
    case 0:
      return(<>
        <main className="MainElementTab">
          <Rest activeTab={activeTab} setActiveTab={setActiveTab} activeSequence={activeSequence} setActiveSequence={setActiveSequence} tabs={tabs}/>
          <DashboardMainAnimationsTab setActiveSequence={setActiveSequence} />
        </main>
      </>)
    case 1:
      return(<>
        <main className="MainElementTab">
          <Rest activeTab={activeTab} setActiveTab={setActiveTab} activeSequence={activeSequence} setActiveSequence={setActiveSequence} tabs={tabs}/>
          <DashboardMainCluesTab activeSequence={activeSequence} setActiveSequence={setActiveSequence} />
        </main>
      </>)
    case 2:
      return(<>
        <main className="MainElementTab">
          <Rest activeTab={activeTab} setActiveTab={setActiveTab} activeSequence={activeSequence} setActiveSequence={setActiveSequence} tabs={tabs}/>
          <DashboardMainAnswersTab activeSequence={activeSequence} setActiveSequence={setActiveSequence} />
        </main>
      </>)
  }
}

export default DashboardMain
