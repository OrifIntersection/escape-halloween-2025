// Composant principal
function Answers({ answers, successfulAnswers }) {
  return (
    <>
      <h4> Réponses </h4>
      {answers.map((anAnswer) => (
        <p key={anAnswer.id}>
          <span>
            {anAnswer.name} | Solution : {anAnswer.solution}&nbsp;
          </span>
          {successfulAnswers.filter(
            (aSuccessfulAnswer) => aSuccessfulAnswer.id === anAnswer.id
          ).length > 0 && <span>(Réponse validée)</span>}
        </p>
      ))}
    </>
  );
}

export default Answers;
