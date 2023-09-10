import React, { useState, useEffect } from "react";
import Quiz from "../../components/quiz";

import AllQuizes from "../../data/all-quizes.js";

import "./index.css";

const defaultGame = {
  quizes: null,
  currentQuizIndex: -1
};

const QuizGame = () => {
  const [game, setGame] = useState(defaultGame);

  useEffect(() => {
    const updatedGame = { ...defaultGame };
    const quizes = AllQuizes.map((quiz, quizIndex) => ({
      ...quiz,
      index: quizIndex,
      choices: [...quiz.choices],
      selections: []
    }));
    updatedGame.quizes = quizes;
    updatedGame.currentQuizIndex = quizes.length > 0 ? 0 : -1;

    // TODO: Remove below currentQuizIndex assignment
    const lastValidQuestion = AllQuizes.findIndex(
      quiz => quiz.question === "Question"
    );
    updatedGame.currentQuizIndex = lastValidQuestion - 1;

    setGame(updatedGame);
  }, []);

  const handleSelectChoice = choiceIndex => {
    if (
      game.quizes[game.currentQuizIndex].selections.indexOf(choiceIndex) > -1
    ) {
      return;
    }
    const updatedGame = {
      ...game,
      quizes: game.quizes.map((quiz, quizIndex) =>
        quizIndex === game.currentQuizIndex
          ? {
              ...quiz,
              isPass: undefined,
              selections:
                quiz.answers.length < 2
                  ? [choiceIndex]
                  : [
                      ...quiz.selections.slice(-1 * (quiz.answers.length - 1)),
                      choiceIndex
                    ]
            }
          : quiz
      )
    };
    setGame(updatedGame);
  };

  const handlePrev = () => {
    setGame({ ...game, currentQuizIndex: game.currentQuizIndex - 1 });
  };

  const handleNext = () => {
    setGame({ ...game, currentQuizIndex: game.currentQuizIndex + 1 });
  };

  const handleSubmitAnswer = () => {
    const currentQuiz = game.quizes[game.currentQuizIndex];
    const isPass =
      [...currentQuiz.answers].sort().join(",") ===
      [...currentQuiz.selections].sort().join(",");
    const updatedGame = {
      ...game,
      quizes: game.quizes.map((quiz, quizIndex) =>
        quizIndex === game.currentQuizIndex
          ? {
              ...quiz,
              isPass
            }
          : quiz
      )
    };
    setGame(updatedGame);
  };

  return (
    <div className="quiz-game-container">
      {!game.quizes ? (
        <div>Loading quizes...</div>
      ) : game.quizes.length < 1 ? (
        <div>No quize found !!</div>
      ) : (
        <div className="quiz-game">
          <h4>Total Questions: {game.quizes.length}</h4>
          <Quiz
            quiz={game.quizes[game.currentQuizIndex]}
            onSelect={handleSelectChoice}
          />
          <div className="btn-container">
            <button
              className="secondary"
              disabled={game.currentQuizIndex < 1}
              onClick={handlePrev}
            >
              &lt; Prev
            </button>
            <button
              className="primary"
              disabled={
                game.quizes[game.currentQuizIndex].selections.length !==
                game.quizes[game.currentQuizIndex].answers.length
              }
              onClick={handleSubmitAnswer}
            >
              Submit
            </button>
            <button
              className="secondary"
              disabled={game.currentQuizIndex >= game.quizes.length - 1}
              onClick={handleNext}
            >
              Next &gt;
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default QuizGame;
