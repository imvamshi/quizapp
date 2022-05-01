import React, { useContext, useState } from "react";
import axios from "axios";
import { QuizContext } from "../Helpers/Contexts"
import "../App.css";
import { Questions } from "../Helpers/QuestionBank";

function EndScreen() {
    const { score, setScore, setGameState, setTimer } = useContext(QuizContext);

    const restartQuiz = () => {
        setScore(0);
        setGameState("menu");
        setTimer(Date.now() + 1000 * 7);

        /* Trigger backend API to store quiz results in database */
        // axios.get("http://localhost:8080/", { crossdomain: true }).then(response => {
        //     setText(response.data.text);
        //     setAuthor(response.data.author);
        // });
    }

    return (
        <div className='Menu flex'>
            <h1 className='headingEndScreen'>Quiz finished. Well played!</h1>
            <h3 className='score'> {score} / {Questions.length} {" "}</h3>
            <button onClick={restartQuiz}> Restart Quiz </button>
        </div>
    )
}

export default EndScreen;