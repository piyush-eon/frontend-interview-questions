/* eslint-disable react/prop-types */

const Question = ({ question, onAnswerClick = () => {} }) => {
  return (
    <div className="question">
      <h2>{question.question}</h2>
      <ul className="options">
        {question.answerOptions.map((option) => {
          return (
            <li key={option.text}>
              <button
                onClick={() =>
                  onAnswerClick({
                    question: question.question,
                    answer: option.text,
                    isCorrect: option.isCorrect,
                  })
                }
              >
                {option.text}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Question;
