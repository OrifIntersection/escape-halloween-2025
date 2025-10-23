// Composant principal
function Header({ storyline }) {
  return (
    <header>
      <h2>Trame de l'histoire</h2>
      <p>Nom du scénario : {storyline.title}</p>
      <p>Durée totale : {storyline.durationInMinutes} minutes</p>
    </header>
  );
}

export default Header;
