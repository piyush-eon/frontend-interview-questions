import React from "react";

const QuestionNumber = ({
  questions,
  activeQuestion,
  onClickQuestion = () => {},
}) => {
  return questions.map((q, index) => (
    <button
      className={
        activeQuestion == index ? "active questionNumber" : "questionNumber"
      }
      value={index}
      key={index}
      onClick={(event) => onClickQuestion(event.target.value)}
    >
      {index + 1}
    </button>
  ));
};

export default QuestionNumber;
