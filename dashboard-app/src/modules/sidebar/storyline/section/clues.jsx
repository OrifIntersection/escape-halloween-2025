// Composant principal
function Clues({ clues, activatedClues }) {
  return (
    <>
      <h4> Indices </h4>
      {clues.map((aClue) => (
        <p key={aClue.id}>
          <span>{aClue.content}&nbsp;</span>
          {activatedClues.filter(
            (anActivatedClue) => anActivatedClue.id === aClue.id
          ).length > 0 && <span>(Indice activé)</span>}
        </p>
      ))}
    </>
  );
}

export default Clues;
