import React, { useContext, useState } from 'react';
import { QuizContext } from "../Helpers/Contexts"
import "../App.css";
import { Questions } from "../Helpers/QuestionBank";

function EndScreen() {
    const { score, setScore, setGameState } = useContext(QuizContext);

    const restartQuiz = () => {
        setScore(0);
        setGameState("menu");
    }

    return (
        <div className='Menu flex'>
            <h1>Quiz finished. Well played!</h1>
            <h3> {score} / {Questions.length} {" "}</h3>
            <button onClick={restartQuiz}> Restart Quiz </button>
        </div>
    )
}

export default EndScreen;