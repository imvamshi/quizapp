import React, { useContext, useState, useNavigate } from "react";
import { message, Button } from "antd";
import axios from "axios";
import { QuizContext } from "../Helpers/Contexts"
import "../App.css";
import { Questions } from "../Helpers/QuestionBank";

function EndScreen() {
    const { score, setScore, setGameState, setTimer, setCurrQuestion, quizData } = useContext(QuizContext);

    const restartQuiz = () => {
        setScore(0);
        setGameState("menu");
        setTimer(Date.now() + 1000 * 7);
        setCurrQuestion(0);

        /* Trigger backend API to store quiz results in database */

        // axios.get("http://localhost:8080/", { crossdomain: true }).then(response => {
        //     setText(response.data.text);
        //     setAuthor(response.data.author);
        // });
    }
    // const goHome = () => {
    //     setGameState("home");
    // }

    const navigate = useNavigate();
    const routeChange = (path) => {
        message.success(`reached path ${path}`)
        navigate(path);
    }



    // const onFinish = (values) => {
    //     console.log('Received values of form: ', values);
    //     routeChange("/");
    // };


    return (
        <div className='Menu flex'>
            <h1 className='headingEndScreen'>Quiz finished. Well played!</h1>
            <h3 className='score'> {score} / {quizData.qbank.question.length} {" "}</h3>
            <button onClick={restartQuiz}> Restart Quiz </button>
            <button onClick={routeChange("/")}> Restart Quiz </button>
            <Button type="primary" className="login-form-button"

                onClick={() => routeChange("/")}>
                Gooo Home
            </Button>

        </div>
    )
}

export default EndScreen;