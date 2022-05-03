import React, { useState, useContext, useEffect } from "react";
import { QuizContext } from "../Helpers/Contexts";
import { Questions } from "../Helpers/QuestionBank";
import { Statistic, Row, Col } from "antd";
import { addLog } from "../services/logServices";
var axios = require('axios');

const Options = (props) => {
    const { Questions, chooseOption, optionSelected, currQuestion, quizData } = props;
    // const array = Questions[currQuestion].options;
    const array = quizData.qbank.options[currQuestion];
    // console.log(`"Quiz Data = ${JSON.stringify(quizData)}`);
    return (
        <>
            {array.map((option, number) => {
                // here you return the new array created by map
                console.log(
                    `Number is ${number}, Option is ${option}, chooseOption(${number})`
                );
                console.log(`op selected = ${optionSelected}, option = ${option}`);
                return (
                    <button
                        className={optionSelected === `${number + 1}` ? "button selected" : "button"}
                        onClick={() => chooseOption(`${number + 1}`)}
                    >
                        {option}
                    </button>
                );
            })}
        </>
    );
};

function Quiz() {
    const { score, setScore, setGameState, timer, setTimer, quizData } =
        useContext(QuizContext);

    const [currQuestion, setCurrQuestion] = useState(0);
    const [optionSelected, setOptionSelected] = useState("");

    // useEffect(() => {
    //     // setTimer(timer);
    //     console.log(
    //         `loaded <Quiz /> component. Timer is set for ${(timer - Date.now()) / 1000
    //         } secs.`
    //     );
    // });

    const chooseOption = (option) => {
        console.log(`Clicked button ${option}`);
        setOptionSelected(option);
    };

    const checkAnswerAndIncrementScore = () => {
        return new Promise((res, rej) => {
            if (optionSelected == quizData.qbank.answer[currQuestion]) {
                setScore(score + 1);
            }
            res();
        })
    }

    const nextQuestion = () => {
        console.log(
            `Option selected = ${optionSelected} \n Correct Answer = ${Questions[currQuestion].answer}`
        );
        // console.log(`optionSelected == Questions[currQuestion].answer -> ${optionSelected == Questions[currQuestion].answer}`);

        checkAnswerAndIncrementScore();
        // alert(score);
        if (currQuestion == quizData.qbank.question.length - 1) {
            // show results button
        }
        setCurrQuestion(currQuestion + 1);
    };

    const logUserScore = () => {
        return new Promise(async (res, rej) => {
            const _score = `${score} / ${quizData.qbank.question.length}`;
            let _percent = ((score/quizData.qbank.question.length) * 100).toFixed(2);
            _percent = _percent.toString();
            const dat = new Date().toString();
            const _logstring = `Logging: score ${_score}
            % Correct: ${_percent}`;
            console.log(`_logstring = ${_logstring}`);

            res();
            
            // const requestBody = { log: `${_logstring}`, username: 'testttuser' };
            // var data = JSON.stringify(requestBody);
            
            // var config = {
            //     method: 'post',
            //     url: 'http://localhost:8080/api/logs',
            //     headers: { 
            //         'Content-Type': 'application/json'
            //     },
            //     data : data
            // };
            

            // axios(config)
            //     .then(function (response) {
            //         console.log(JSON.stringify(response.data));
            //         res();
            //     })
            //     .catch(function (error) {
            //          console.log(error);
            //          res();
            // });


        })
    }

    const finishQuiz = () => {
        checkAnswerAndIncrementScore().then((res, rej) => {
            logUserScore().then(setGameState("endScreen"))
        })
        
        // setGameState("endScreen");
    };

    const { Countdown } = Statistic;
    const deadline = Date.now() + 1000 * 5; // Moment is also OK

    const onFinish = () => {
        console.log("Timer finished! in <Quiz />");
        logUserScore().then(setGameState("endScreen"));
        // setGameState("endScreen");
    };

    const getTimerValue = () => {
        return Date.now() + quizData.timer * 1000
    }

    const timerValue = Date.now() + quizData.timer * 1000;

    /* Dynamic */
    const initialMinute = Math.floor(quizData.timer / 60);
    const initialSeconds = quizData.timer - initialMinute * 60;

    /* Static */
    // const initialMinute = 0;
    // const initialSeconds = 20;

    const [minutes, setMinutes] = useState(initialMinute);
    const [seconds, setSeconds] = useState(initialSeconds);

    useEffect(() => {
        let myInterval = setInterval(() => {
            if (seconds > 0) {
                setSeconds(seconds - 1);
            }
            if (seconds === 0) {
                if (minutes === 0) {
                    clearInterval(myInterval);
                    onFinish();
                } else {
                    setMinutes(minutes - 1);
                    setSeconds(59);
                }
            }
            // if (seconds === 0) {
            //     clearInterval(myInterval);
            //     onFinish();
            // }
        }, 1000)
        return () => {
            clearInterval(myInterval);
        };
    });

    return (
        <div className="Quiz flex">
            {/* <p>Question Answers | In (Quiz/) component</p> */}
            <div className="flex">
                <Row gutter={0}>
                    <Col span={30}>
                        {/* <Countdown
                            title="Time left"
                            value={timerValue}
                            onFinish={onFinish}
                        /> */}
                        <p className="flex heading timer ">{minutes} : {seconds}</p>
                    </Col>
                </Row>
            </div>
            <h2 className="heading">{quizData.qbank.question[currQuestion]}</h2>
            <div className="options flex">
                <Options {...{ Questions, chooseOption, optionSelected, currQuestion, quizData }} />
            </div>
            {currQuestion == quizData.qbank.question.length - 1 ? (
                <button onClick={finishQuiz}>Finish Quiz</button>
            ) : (
                <button onClick={nextQuestion}>Next Question</button>
            )}
        </div>
    );
}

export default Quiz;

/*
import React, { useState, useContext, useEffect } from 'react';
import { QuizContext } from '../Helpers/Contexts';
import { Questions } from "../Helpers/QuestionBank";
import { Statistic, Row, Col } from 'antd';

function Quiz() {
    const { score, setScore, setGameState, timer, setTimer } = useContext(QuizContext);

    const [currQuestion, setCurrQuestion] = useState(0);
    const [optionSelected, setOptionSelected] = useState("");

    useEffect(() => {
        // setTimer(timer);
        console.log(`loaded <Quiz /> component. Timer is set for ${(timer - Date.now())/1000} secs.`);
    });

    

    const chooseOption = (option) => {
        console.log(`Clicked button ${option}`);
        setOptionSelected(option);
    };

    const renderButtons = () => {
        console.log(`Rendering Buttons: Current optionSelected is ${optionSelected}`);
        // works fine
        const array = Questions[currQuestion].options;
        var number = 0;
        const op = ["", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11"];
        const buttonGroup = array.map((option, number) => { // here you return the new array created by map
            number = number + 1;
            console.log(`Number is ${number}, Option is ${option}, chooseOption(${op[number]})`);
            return <button className={optionSelected===number ? 'selected' : ''} onClick={() => chooseOption(op[number])}>{option}</button>
        });
        return buttonGroup;
    };

    const nextQuestion = () => {
        console.log(`Option selected = ${optionSelected} \n Correct Answer = ${Questions[currQuestion].answer}`);
        // console.log(`optionSelected == Questions[currQuestion].answer -> ${optionSelected == Questions[currQuestion].answer}`);

        if (optionSelected == Questions[currQuestion].answer) {
            setScore(score + 1);
        }
        // alert(score);
        if (currQuestion == 'sizeOfTotalAskableQuestions') {
            // show results button
        }
        setCurrQuestion(currQuestion + 1);
    };

    const finishQuiz = () => {
        if (optionSelected == Questions[currQuestion].answer) {
            setScore(score + 1);
        }
        setGameState("endScreen");
    }

    const { Countdown } = Statistic;
    const deadline = Date.now() + 1000 * 5; // Moment is also OK
    const onFinish = () => {
        console.log("Timer finished! in <Quiz />");
        setGameState("endScreen");
    }

    return (
        <div className='Quiz flex'>
            <p>Question  Answers | In (Quiz/) component</p>
            <div className='flex'>
                <Row gutter={0}>
                    <Col span={20}>
                        <Countdown title="Time left" value={Date.now() + timer*1000} onFinish={onFinish} />
                    </Col>
                </Row>
            </div>
            <h2 className='heading'>{Questions[currQuestion].prompt}</h2>
            <div className="options flex">
                {renderButtons()}
            </div>
            {currQuestion == Questions.length - 1 ?
                (<button onClick={finishQuiz}>Finish Quiz</button>) : (
                    <button onClick={nextQuestion}>Next Question</button>
                )}

        </div>
    )
}

export default Quiz;
*/