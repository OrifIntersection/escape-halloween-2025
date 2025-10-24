// Librairie externe
import { useState } from "react";

// Sous-composants de Dashboard
import DashboardHeader from "./modules/header";
import DashboardMain from "./modules/main";
import DashboardSidebar from "./modules/sidebar";

// Styles
import "./Dashboard.css";

// Données statiques
import storyline from "./assets/storyline.json";

// Composant principal
function Dashboard() {

  // Comment
  var [game, setGame] = useState({
    playingAnimation: null,
    activatedClues: [],
    successfulAnswers: [],
  });

  const playAnimation = (animationToPlay) => {
    setGame({ ...game, playingAnimation: animationToPlay });
  };

  const activeClue = (clueToActive) => {
    setGame({
      ...game,
      activatedClues: [...game.activatedClues, clueToActive],
    });
  };

  const validAnswer = (answerToValid) => {
    setGame({
      ...game,
      successfulAnswers: [...game.successfulAnswers, answerToValid],
    });
  };

  return (
    <div className="dashboard">
      <DashboardHeader storyline={storyline} />
      <div className="wrapper">
        <DashboardSidebar storyline={storyline} game={game} />
        <DashboardMain
          storyline={storyline}
          game={game}
          playAnimation={playAnimation}
          activeClue={activeClue}
          validAnswer={validAnswer}
        />
      </div>
    </div>
  );
}

export default Dashboard;
