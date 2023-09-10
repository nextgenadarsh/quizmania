import React, { useEffect, useMemo, useState } from "react";
import Quiz from "./components/quiz";
import AwsQuizzes from "../../data/aws";

import "./index.scss";

const defaultState = {
  selectedTags: new Set(),
  quizzes: AwsQuizzes,
  curIndex: 0,
  quiz: { ...AwsQuizzes[0], selectedChoices: new Set() }
};

const QuizGame = () => {
  const [state, setState] = useState(defaultState);

  const allTags = useMemo(() => {
    const allTags = new Set();
    AwsQuizzes.forEach(quiz => {
      quiz.tags.forEach(tag => allTags.add(tag));
    });
    return allTags;    
  }, []);

  useEffect(() => {
    const quizzes = state.selectedTags.size > 0
      ? AwsQuizzes.filter(quiz => quiz.tags.some(qt => state.selectedTags.has(qt)))
      : AwsQuizzes;
    setState({ ...state, quizzes: quizzes, curIndex: 0, quiz: { ...quizzes[0], selectedChoices: new Set() } })
  }, [state.selectedTags]);

  const handleShuffleQuestions = () => {
    const shuffledQuizzes = state.quizzes.sort((a, b) => {
      const randomNumber = parseInt(Math.random() * 10);
      return a.question.charAt(randomNumber) < b.question.charAt(randomNumber) ? -1 : 1;
    });
    setState({ ...state, curIndex: 0, quizzes: shuffledQuizzes, quiz: { ...shuffledQuizzes[0], selectedChoices: new Set() } });
  };

  const handleSelectChoice = (selectedChoice) => {
    const updatedQuiz = { ...state.quiz };

    if (updatedQuiz.selectedChoices.size >= updatedQuiz.answers.length) {
      updatedQuiz.selectedChoices.clear();
    }
    if (updatedQuiz.selectedChoices.has(selectedChoice)) {
      updatedQuiz.selectedChoices.delete(selectedChoice);
    } else {
      updatedQuiz.selectedChoices.add(selectedChoice);
    }
    setState({ ...state, quiz: updatedQuiz });
  };

  const handlePreviousClick = () => {
    setState({
      ...state,
      curIndex: state.curIndex - 1,
      isSubmitted: false,
      quiz: {
        ...state.quizzes[state.curIndex - 1],
        selectedChoices: new Set()
      }
    });
  };
  const handleNextClick = () => {
    setState({
      ...state,
      curIndex: state.curIndex + 1,
      isSubmitted: false,
      quiz: {
        ...state.quizzes[state.curIndex + 1],
        selectedChoices: new Set()
      }
    });
  };
  const handleSubmit = () => {
    setState({ ...state, isSubmitted: true });
  };
  const handleTagClick = (tag) => {
    const updatedTags = new Set(Array.from(state.selectedTags));
    if (updatedTags.has(tag)) {
      updatedTags.delete(tag);
    } else {
      updatedTags.add(tag);
    }
    setState({ ...state, selectedTags: updatedTags })
  };
  const handleClearTags = () => {
    setState({...state, selectedTags: new Set()});
  };

  return (
    <div className="quiz-game">
      <div className="tags-container">
        {
          Array.from(allTags).map((tag) => (<span className={`tag ${state.selectedTags.has(tag) ? 'selected' : ''}`} onClick={() => handleTagClick(tag)} key={tag}>{` #${tag} `}</span>))
        }
        <button onClick={handleClearTags}>Clear Tags</button>
      </div>
      <div className="controls">
        <span>Total Questions: {state.quizzes.length}</span>
        <button onClick={handleShuffleQuestions}>Shuffle Questions</button>
      </div>
      <div>
        {state.quiz ? <Quiz quiz={state.quiz} curIndex={state.curIndex}
          selectedChoices={state.curChoices}
          onSelectChoice={handleSelectChoice}
          isSubmitted={state.isSubmitted} /> : null}
      </div>
      <div className="navigation">
        <button disabled={state.curIndex < 1} onClick={handlePreviousClick}>Previous</button>
        <button disabled={state.quiz.selectedChoices.size < state.quiz?.answers?.length} onClick={handleSubmit}>submit</button>
        <button disabled={state.curIndex >= state.quizzes.length - 1} onClick={handleNextClick}>Next</button>
      </div>
    </div>
  );
};

export default QuizGame;