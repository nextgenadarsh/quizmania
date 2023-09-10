import React, { useState } from "react";

import "./index.scss";

const Quiz = ({ quiz, curIndex, isSubmitted, onSelectChoice }) => {
  const handleSelectChoice = (selectedChoice) => {
    onSelectChoice(selectedChoice);
  };

  return (
    <div className="quiz">
      <div className="question">{curIndex + 1}. {quiz.question}</div>
      {quiz.choices.map((choice, index) => {
        const classNames = ["text"];
        if(quiz.selectedChoices.has(index)) {
          classNames.push("selected");
        }
        if(isSubmitted) {
          if(quiz.answers.includes(index)) {
            classNames.push("correct");
          } else {
            classNames.push("incorrect");
          }
        }

        return (
          <div key={`choice${index}`} className={`quiz-choice`}>
            <div onClick={() => handleSelectChoice(index)}
              className={`${classNames.join(" ")}`}
            >{choice.text}</div>
          </div>
        )
      })}
    </div>
  );
};

export default Quiz;