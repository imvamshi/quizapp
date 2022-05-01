import React, { useState, useContext } from 'react';
import { QuizContext } from '../Helpers/Contexts';
import { Questions } from "../Helpers/QuestionBank";
import { Statistic, Row, Col } from 'antd';

function Quiz() {

    const { score, setScore, setGameState } = useContext(QuizContext);

    const [currQuestion, setCurrQuestion] = useState(0);
    const [optionSelected, setOptionSelected] = useState("");

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
            return <button className='button' onClick={() => chooseOption(op[number])}>{option}</button>
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
        setGameState("endScreen");
    }

    return (
        <div className='Quiz flex'>
            <p>Question  Answers | In (Quiz/) component</p>
            <div className='flex'>
                <Row gutter={0}>
                    <Col span={20}>
                        <Countdown title="Time left" value={deadline} onFinish={onFinish} />
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