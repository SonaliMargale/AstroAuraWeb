import React from 'react';
import { FiArrowRight } from 'react-icons/fi';
import './SuggestQuestion.css';

const SuggestQuestion = () => {
  const questions = [
    "What does my Sun, Moon, and Rising sign say about my core personality?",
    "How do the elements (fire, earth, air, water) dominate or balance in my chart?",
    "What house placement has the most influence on my personality?",
    "Is there a stellium in my chart? What does it signify?"
  ];

  return (
    <div className="suggest-question-wrapper">
    <div className="suggest-question-container">
      {questions.map((question, index) => (
        <div key={index} className="question-item">
          <span>{question}</span>
          <div className="icon-circle">
            <FiArrowRight />
          </div>
        </div>
      ))}
    </div>
    </div>
  );
};

export default SuggestQuestion;
