// Composant principal
function Animations({ animations, playingAnimation }) {
  return (
    <>
      <h4> Animations </h4>
      {animations.map((anAnimation) => (
        <p key={anAnimation.id}>
          <span>{anAnimation.name}&nbsp;</span>
          {anAnimation.id === playingAnimation?.id && (
            <span>(Animation en cours)</span>
          )}
        </p>
      ))}
    </>
  );
}

export default Animations;
