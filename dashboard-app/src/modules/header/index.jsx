// Sous-composants de Header
import HeaderTitle from "./title";

// Composant principal
function Header({ storyline }) {
  return (
    <header className="main-header">
      <HeaderTitle>{storyline.title}</HeaderTitle>
    </header>
  );
}

export default Header;
