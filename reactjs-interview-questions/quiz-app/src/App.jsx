import { useState } from "react";
import "./App.css";
import questions from "./constants/questions.json";
import Question from "./components/question";
import Result from "./components/result";
import QuestionNumber from "./components/QuestionNumber";

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [activeQuestion, setActiveQuestion] = useState(0);

  // Keep all of the logic in App.jsx

  const handleNextQuestion = (newQues) => {
    setCurrentQuestion(parseInt(currentQuestion) + 1);
    setActiveQuestion(parseInt(currentQuestion) + 1);
    setUserAnswers([...userAnswers, newQues]);
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setUserAnswers([]);
    setActiveQuestion(0);
  };

  const onClickQuestion = (index) => {
    setActiveQuestion(parseInt(index));
    setCurrentQuestion(parseInt(index));
  };
  return (
    <div className="App">
      <h1>World Quiz</h1>

      {/* Questions Marking */}
      {currentQuestion < questions.length && (
        <QuestionNumber
          questions={questions}
          activeQuestion={activeQuestion}
          onClickQuestion={onClickQuestion}
        />
      )}

      {/* Questions Component */}
      {currentQuestion < questions.length && (
        <Question
          question={questions[currentQuestion]}
          onAnswerClick={handleNextQuestion}
          userAnswers={userAnswers}
        />
      )}

      {/* Result Component */}
      {currentQuestion === questions.length && (
        <Result
          userAnswers={userAnswers}
          questions={questions}
          resetQuiz={resetQuiz}
        />
      )}
    </div>
  );
}

export default App;
