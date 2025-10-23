// Sous-composant de AnimationsTab
function AnimationItem({ animation, playingAnimation, playAnimation }) {
  const isPlaying = animation.id === playingAnimation?.id;
  return (
    <div>
      <span>{animation.name}</span>
      <button onClick={() => playAnimation(animation)} disabled={isPlaying}>
        {isPlaying ? <>L'animation est en cours</> : <>Lancer l'animation</>}
      </button>
    </div>
  );
}

// Composant principal
function AnimationsTab({ animations, playingAnimation, playAnimation }) {
  return (
    <div>
      <h3>Gestion des animations</h3>
      {animations.map((anAnimation) => (
        <AnimationItem
          key={anAnimation.id}
          animation={anAnimation}
          playingAnimation={playingAnimation}
          playAnimation={playAnimation}
        />
      ))}
    </div>
  );
}

export default AnimationsTab;
