import React, { useState, useEffect } from "react";
import "./Game.css";
import "./Menu.js";

function TriviaGame({ apiUrl }) {
  //new state variables//
  const [question, setQuestion] = useState("");
  const [answerOptions, setAnswerOptions] = useState([]);
  const [correctAnswer, setCorrectAnswer] = useState("");
  const [score, setScore] = useState(0);
  //this seta default no. of questions to 10, unless changed by user//
  const [numQuestions, setNumQuestions] = useState(10);
  const [questionCount, setQuestionCount] = useState(1);
  const [gameOver, setGameOver] = useState(false);

  useEffect(() => {
    async function fetchQuestion() {
      try {
        //await response from the API//
        const response = await fetch(apiUrl);
        //await new "data" variable, initialised with parsed json data//
        const data = await response.json();
        //gets "results" array from our "data" variable (objects in API)//
        const results = data.results;
        const currentQuestion = results[questionCount - 1];
        //update state variables for new question//
        setQuestion(currentQuestion.question);
        setCorrectAnswer(currentQuestion.correct_answer);
        //uses concat method to merge the "incorrect_answers" array with the "correct_answer" to give a new array, "allAnswers"//
        const allAnswers = currentQuestion.incorrect_answers.concat(currentQuestion.correct_answer);
        //this sorts the answers array in alphanumeric order//
        setAnswerOptions(allAnswers.sort());
      } catch (error) {
        console.error(error);
      }
    }
    //request a new question and update states//
    if (questionCount <= numQuestions) {
      fetchQuestion();
      //if we reach the question limit (10), end game//
    } else {
      setGameOver(true);
    }
  }, [questionCount, apiUrl]);

  //handle function 1//
  function handleAnswerOption(answer) {
    if (answer === correctAnswer) {
      setScore(score + 1);
    }
    setQuestionCount(questionCount + 1);
  }

  //handle function 2//
  function handleNumQuestionsChange(event) {
    setNumQuestions(parseInt(event.target.value));
  }

  return (
    // conditional ternary operator, if gameOver is truthy, the first parentheses code will render
    <div className="container">
      {gameOver ? (
        <div className="game">
          <h1>Game Over</h1>
          <p>Your final score is: {score}</p>
        </div>
      ) : (
        // this code will render if gameOver is falsy
        <div>
          <h1>Trivia Game</h1>
          <p>
            Question {questionCount} of {numQuestions}
          </p>
          {/* check this */}
          <h2 dangerouslySetInnerHTML={{ __html: question }}></h2>
          <ul>
            {/* map method iterates over the answerOptions array, and creates a li and a button */}
            {answerOptions.map((option) => (
              <li key={option}>
                <button onClick={() => handleAnswerOption(option)}>{option}</button>
              </li>
            ))}
          </ul>
          <p>Score: {score}</p>
          <label>
            {/* user can select how many questions they can have, max 50. default is 10 */}
            Number of questions:
            <input type="number" min="1" max="50" value={numQuestions} onChange={handleNumQuestionsChange} />
          </label>
        </div>
      )}
    </div>
  );
}

export default TriviaGame;
