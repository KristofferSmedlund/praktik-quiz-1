import React, { useState } from "react";
import AvatarPicker from "./AvatarPicker";

export default function App() {
  const questions = [
    {
      questionText: "När får man vistas på ett skjutfält?",
      answerOptions: [
        {
          answerText: "När du blivit godkänd av verkställande officer",
          isCorrect: false,
        },
        { answerText: "När övning ej pågår", isCorrect: true },
        { answerText: "Aldrig", isCorrect: false },
      ],
    },
    {
      questionText: "Vart kan man hitta information om att fältet är avlyst?",
      answerOptions: [
        { answerText: "I lokal tidning", isCorrect: false },
        {
          answerText: "På försmaktens hemsida & informationsskyltar på plats",
          isCorrect: true,
        },
        { answerText: "Värnpliktsnytt", isCorrect: false },
      ],
    },
    {
      questionText:
        "Vad händer om du bryter mot ett tillträdelseförbud på ett skjutfält?",
      answerOptions: [
        {
          answerText: "Innebär livsfara och omhändertagande samt polisanmälan",
          isCorrect: true,
        },
        { answerText: "Du får böta 10 000 SEK", isCorrect: false },
        {
          answerText: "Du får aldrig besöka närområdet igen",
          isCorrect: false,
        },
      ],
    },

    {
      questionText:
        "Vilket är maxstaffet om man beträder ett avlyst skjutfält?",
      answerOptions: [
        {
          answerText: "Ett halvår",
          isCorrect: false,
        },
        { answerText: "Ett år", isCorrect: false },
        {
          answerText: "Två år",
          isCorrect: true,
        },
      ],
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  const [isDone, setIsDone] = useState(false);
  const [name, setName] = useState("");

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  const questionsComp = (
    <div className="app">
      {showScore ? (
        <div className="score-section">
          Hej {name}, du fick {score} av {questions.length}
        </div>
      ) : (
        <>
          <div className="question-section">
            <div className="question-count">
              <span>Question {currentQuestion + 1}</span>/{questions.length}
            </div>
            <div className="question-text">
              {questions[currentQuestion].questionText}
            </div>
          </div>
          <div className="answer-section">
            {questions[currentQuestion].answerOptions.map((answerOption) => (
              <button
                onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}
              >
                {answerOption.answerText}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );

  return (
    <>
      {isDone ? (
        questionsComp
      ) : (
        <AvatarPicker setIsDone={setIsDone} setName={setName} />
      )}
    </>
  );
}
