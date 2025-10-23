import DashboardHeader from './modules/header'
import DashboardMain from './modules/main'
import DashboardSidebar from './modules/sidebar'

import './Dashboard.css'

function Dashboard() {

  return (
    <div className="dashboard">
      <DashboardHeader />
      <div class="wrapper">
        <DashboardSidebar />
        <DashboardMain />
      </div>
    </div>
  )
}

export default Dashboard
