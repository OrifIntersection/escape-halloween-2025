// Sous-composants de ActiveTab
import AnimationsTab from "./tabs/animations";
import AnswersTab from "./tabs/answers";
import CluesTab from "./tabs/clues";

// Fonctions "Helpers"
function findAllAnimations(storyline) {
  return storyline.sections.reduce(
    (animations, aSection) => animations.concat(aSection.animations),
    []
  );
}

function findAllClues(storyline) {
  return storyline.sections.reduce(
    (clues, aSection) => clues.concat(aSection.clues),
    []
  );
}

function findAllAnswers(storyline) {
  return storyline.sections.reduce(
    (answers, aSection) => answers.concat(aSection.answers),
    []
  );
}

// Composant principal
function ActiveTab({
  activeTab,
  storyline,
  game,
  playAnimation,
  activeClue,
  validAnswer,
}) {
  return (
    <section>
      
      {activeTab.id === "animations" && (
        <AnimationsTab
          animations={findAllAnimations(storyline)}
          playingAnimation={game.playingAnimation}
          playAnimation={playAnimation}
        />
      )}
      {activeTab.id === "clues" && (
        <CluesTab
          clues={findAllClues(storyline)}
          activatedClues={game.activatedClues}
          activeClue={activeClue}
        />
      )}
      {activeTab.id === "answers" && (
        <AnswersTab
          answers={findAllAnswers(storyline)}
          successfulAnswers={game.successfulAnswers}
          validAnswer={validAnswer}
        />
      )}
    </section>
  );
}

export default ActiveTab;
