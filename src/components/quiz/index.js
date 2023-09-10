import React from "react";
import { Alphabets } from "../../utils/alphabets";

import "./index.css";

const Quiz = ({ quiz, onSelect }) => {
  console.log(quiz);
  return (
    <div className="quiz-container">
      <div className="question-serial">#{quiz.index + 1}</div>
      <div className="question-choices">
        <div className="question" tabindex="0">
          {quiz.question}
        </div>
        <div className="choices-container">
          {quiz.choices.map((choice, choiceIndex) => {
            const containerClasses = ["choice-container"];
            if (quiz.selections.indexOf(choiceIndex) > -1) {
              containerClasses.push("selected");
            }
            if (quiz.isPass !== undefined) {
              if (quiz.answers.indexOf(choiceIndex) > -1) {
                containerClasses.push("success");
              } else if (quiz.selections.indexOf(choiceIndex) > -1) {
                containerClasses.push("error");
              }
            }

            return (
              <div
                className={containerClasses.join(" ")}
                tabindex="0"
                onClick={() => onSelect(choiceIndex)}
              >
                <div className="choice-serial">{Alphabets[choiceIndex]}</div>
                <div className="choice-text">{choice.text}</div>
              </div>
            );
          })}
        </div>
        <div className="tags-container">
          <span className="tag-label">Tags: </span>
          {quiz.tags.map(tag => (
            <span key={tag} className="tag-text">
              #{tag}{" "}
            </span>
          ))}
        </div>
        {quiz.isPass !== undefined && (
          <div className="help-container">
            <div className="help-label">Explanation</div>
            <div className="help-text">{quiz.help}</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Quiz;
