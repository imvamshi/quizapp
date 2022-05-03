import React, { useContext, useState, useNavigate, useEffect } from "react";
import { message, Button } from "antd";
import axios from "axios";
import { QuizContext } from "../Helpers/Contexts"
import "../App.css";
import { Questions } from "../Helpers/QuestionBank";
import APIURL from "../services/constants";

function EndScreen() {
    const { score, setScore, setGameState, setTimer, setCurrQuestion, quizData } = useContext(QuizContext);
    useEffect(() => {
        // call api or anything
        const _score = `${score} / ${quizData.qbank.question.length}`;
        let _percent = ((score/quizData.qbank.question.length) * 100).toFixed(2);
        _percent = _percent.toString();
        const dat = new Date().toString();
        const _logstring = `Date: ${dat}
        Logging: score ${_score}
        % Correct: ${_percent}`;

        var axios = require('axios');
        const requestBody = { log: `${_logstring}`, username: quizData.username };
        var data = JSON.stringify(requestBody);

        var config = {
            method: 'post',
            url: `${APIURL}/api/logs`,
            headers: { 
            'Content-Type': 'application/json'
            },
            data : data
        };

        axios(config)
        .then(function (response) {
            console.log(JSON.stringify(response.data));
        })
        .catch(function (error) {
            console.log(error);
        });
        console.log("api call done EndScreen");
     });
    const restartQuiz = () => {
        setScore(0);
        setGameState("menu");
        setTimer(Date.now() + 1000 * 7);
        setCurrQuestion(0);

        console.log("Logging into the database.");
        const userName = quizData.userName;


        /* Trigger backend API to store quiz results in database */

       
        // axios.get("http://localhost:8080/", { crossdomain: true }).then(response => {
        //     setText(response.data.text);
        //     setAuthor(response.data.author);
        // });
    }
    // const goHome = () => {
    //     setGameState("home");
    // }

    // const navigate = useNavigate();
    // const routeChange = (path) => {
    //     message.success(`reached path ${path}`)
    //     navigate(path);
    // }



    // const onFinish = (values) => {
    //     console.log('Received values of form: ', values);
    //     routeChange("/");
    // };


    return (
        <div className='Menu flex'>
            <h1 className='headingEndScreen'>Quiz finished. Well played!</h1>
            <h3 className='score'> {score} / {quizData.qbank.question.length} {" "}</h3>
            <button onClick={restartQuiz}> Restart Quiz </button>
            {/* <button onClick={routeChange("/")}> Restart Quiz </button> */}
            {/* <Button type="primary" className="login-form-button"

                onClick={() => routeChange("/")}>
                Gooo Home
            </Button> */}

        </div>
    )
}

export default EndScreen;