function AnimationTable({ tab, tabs, activeTab, setActiveTab, index }) {
  function handleClick(e) {
    setActiveTab(tabs[index])
  }

  return (<>
    <div onClick={handleClick} className={(tab.id === activeTab?.id) ? "AnimationTableActive" : "AnimationTableInactive"}> {tab?.label} </div>
  </>);
}


function DashboardMainNav({tabs, activeTab,setActiveTab}) {
  return (
    <section className="AnimationTable">
        {tabs.map((tab, index) => {
          return(<>
            <AnimationTable key={index} index={index} tab={tab} activeTab={activeTab} setActiveTab={setActiveTab} tabs={tabs} />
          </>)})}
    </section>
  )

}

export default DashboardMainNav