// Sous-composants de Nav
function NavLink({ tab, activeTab, setActiveTab }) {
  const handleClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setActiveTab(tab);
  };

  return (
    <>
      <button
        className={activeTab.id === tab.id ? "active" : ""}
        onClick={handleClick}
        disabled={activeTab.id === tab.id}
      >
        {tab.name}
      </button>
      <span>&nbsp;</span>
    </>
  );
}

// Composant principal
function Nav({ tabs, activeTab, setActiveTab }) {
  return (
    <nav>
      {tabs.map((aTab) => (
        <NavLink
          key={aTab.id}
          tab={aTab}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
      ))}
    </nav>
  );
}

export default Nav;
