import React, { useState } from "react";
import "../App.css"


const Question = ({ question, options, answer, onSelect }) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleSelect = (option) => {
    setSelectedOption(option);
    onSelect(option === answer);
  };

  return (
    <div>
      <h2>{question}</h2>
      {options.map((option) => (
        <button className="button-89"
          key={option}
          onClick={() => handleSelect(option)}
        //   disabled={selectedOption !== null}
        >
          {option}
        </button>
      ))}
    </div>
  );
};

export default Question;



