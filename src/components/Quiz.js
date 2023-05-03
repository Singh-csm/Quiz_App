import React, { useState } from "react";
import Question from "./Question";
import questions from "./questions";
import Paper from '@mui/material/Paper';
import "../App.css"

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);

  const handleSelect = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }
    if (currentQuestion === questions.length - 1) {
      alert(`You scored ${score + 1} out of ${questions.length}`);
    } else {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const current = questions[currentQuestion];

  return (
    <div>

<Paper className="paper"  elevation={17}>

      <h1>Quiz</h1>

      <Question {...current} onSelect={handleSelect} />
</Paper>
    </div>
  );
};

export default Quiz;
