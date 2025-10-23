// Sous-composants de Storyline
import StorylineHeader from "./header";
import StorylineSection from "./section";

// Styles
import "./index.css";

// Composant principal
function Storyline({ storyline, ...props }) {
  return (
    <div className="storyline">
      <StorylineHeader storyline={storyline} />
      {storyline.sections.map((aSection) => (
        <StorylineSection key={aSection.id} section={aSection} {...props} />
      ))}
    </div>
  );
}

export default Storyline;
