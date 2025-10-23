// Sous-composant de AnswersTab
function AnswerItem({ answer, successfulAnswers, validAnswer }) {
  const isValidated =
    successfulAnswers.filter((anAnswer) => anAnswer.id === answer.id).length >
    0;
  return (
    <div>
      <span>
        {answer.name} (Solution : {answer.solution})
      </span>
      <button onClick={() => validAnswer(answer)} disabled={isValidated}>
        {isValidated ? <>La réponse est validée</> : <>Valider la réponse</>}
      </button>
    </div>
  );
}

// Composant principal
function AnswersTab({ answers, successfulAnswers, validAnswer }) {
  return (
    <div>
      <h3>Gestion des réponses</h3>
      {answers.map((anAnswer) => (
        <AnswerItem
          key={anAnswer.id}
          answer={anAnswer}
          successfulAnswers={successfulAnswers}
          validAnswer={validAnswer}
        />
      ))}
    </div>
  );
}

export default AnswersTab;
