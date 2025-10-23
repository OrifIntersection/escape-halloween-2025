// Librairie externe
import { useState } from "react";

// Sous-composants de Main
import MainNav from "./nav";
import MainActiveTab from "./active-tab";

// Données statiques
const TAB_LIST = [
  { id: "animations", name: "Animations" },
  { id: "clues", name: "Indices" },
  { id: "answers", name: "Réponses" },
];

// Composant principal
function Main(props) {
  const [activeTab, setActiveTab] = useState(TAB_LIST[0]);
  return (
    <main>
      <h2>Gestion du jeu</h2>
      <MainNav
        tabs={TAB_LIST}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      <MainActiveTab activeTab={activeTab} {...props} />
    </main>
  );
}

export default Main;
