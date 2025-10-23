// Sous-composant de Sidebar
import SidebarStoryline from "./storyline";

// Composant principal
function Sidebar(props) {
  return (
    <aside>
      <SidebarStoryline {...props} />
    </aside>
  );
}

export default Sidebar;
