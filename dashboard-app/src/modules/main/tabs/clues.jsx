// Sous-composant de CluesTab
function ClueItem({ clue, activatedClues, activeClue }) {
  const isActivated =
    activatedClues.filter((aClue) => aClue.id === clue.id).length > 0;
  return (
    <div>
      <span>{clue.content}</span>
      <button onClick={() => activeClue(clue)} disabled={isActivated}>
        {isActivated ? <>L'indice a déjà été activé</> : <>Activer l'indice</>}
      </button>
    </div>
  );
}

// Composant principal
function CluesTab({ clues, activatedClues, activeClue }) {
  return (
    <div>
      <h3>Gestion des indices</h3>
      {clues.map((aClue) => (
        <ClueItem
          key={aClue.id}
          clue={aClue}
          activatedClues={activatedClues}
          activeClue={activeClue}
        />
      ))}
    </div>
  );
}

export default CluesTab;
