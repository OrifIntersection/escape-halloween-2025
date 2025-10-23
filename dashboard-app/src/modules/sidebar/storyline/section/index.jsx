// Sous-composants de Section
import SectionAnimations from "./animations";
import SectionClues from "./clues";
import SectionAnswers from "./answers";

// Composant principal
function Section({ section, game }) {
  return (
    <section>
      <h3>{section.name}</h3>
      <p>Durée estimée : {section.durationInMinutes} minutes</p>
      <p>Difficulté : {section.difficulty}</p>
      {section.animations.length > 0 && (
        <SectionAnimations
          animations={section.animations}
          playingAnimation={game.playingAnimation}
        />
      )}
      {section.clues.length > 0 && (
        <SectionClues
          clues={section.clues}
          activatedClues={game.activatedClues}
        />
      )}
      {section.answers.length > 0 && (
        <SectionAnswers
          answers={section.answers}
          successfulAnswers={game.successfulAnswers}
        />
      )}
    </section>
  );
}

export default Section;
