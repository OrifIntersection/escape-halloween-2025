// import React
import {useState} from "react";

// import components
import DashboardHeader from './modules/header'
import DashboardMain from './modules/main'
import DashboardSidebar from './modules/sidebar'

//import styles
import './Dashboard.css'

function Dashboard() {
  const [tabs, setTabs] = useState(
    [
      {
        "id": 0,
        "label": "Écran principal",
      },
      {
        "id": 1,
        "label": "Écran indices",
      },
      {
        "id": 2,
        "label": "Écran input",
      },
      {
        "id": 3,
        "label": "Dashboard",
      }
    ]
  );
  
  const [activeTab, setActiveTab] = useState(tabs[0]);

  return (
    <div className="dashboard">
      <DashboardHeader />
      <div className="wrapper">
        <DashboardSidebar activeTab={activeTab} setActiveTab={setActiveTab}/>
        <DashboardMain activeTab={activeTab} setActiveTab={setActiveTab} tabs={tabs}/>
      </div>
    </div>
  )
}

export default Dashboard