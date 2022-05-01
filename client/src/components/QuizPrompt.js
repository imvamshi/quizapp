import React, { useState } from 'react';

import Quiz from './Quiz';
import EndScreen from './EndScreen';
import QuizMainMenu from './QuizMainMenu'

import { QuizContext } from "../Helpers/Contexts"
import QuizForm from './QuizForm';

function QuizPrompt(props) {
    /* Global State */
    const { quizData, setQuizData } = props;
    const [gameState, setGameState] = useState("menu");
    const [score, setScore] = useState(0);
    const [timer, setTimer] = useState(0);
    const [currQuestion, setCurrQuestion] = useState(0);

    console.log(`QuizData in QuizPrompt ${JSON.stringify(quizData)}`);
    return (
        <div className='App flex'>
            <h1>Play Quiz Pro</h1>
            
            {/* <p2> No. of questions are {quizData.qbank.question.length}</p2> */}


            {/* The following provided state can be accessed in the components inside QuizContext */}

            <QuizContext.Provider value={{ gameState, 
                setGameState, score, setScore, timer, setTimer, quizData,
                currQuestion, setCurrQuestion }}>
                {gameState == "menu" && <QuizMainMenu />}
                {gameState == "quiz" && <Quiz />}
                {gameState == "endScreen" && <EndScreen />}
                {gameState == "home" && <QuizForm />}
            </QuizContext.Provider>

        </div>
    )
}

export default QuizPrompt;



/*

import React from 'react';
import 'antd/dist/antd.css';
import '../index.css';
import { Card, Button } from 'antd';
import { Radio, Input, Space } from 'antd';
import { useNavigate } from 'react-router-dom';
import { RightOutlined } from '@ant-design/icons';


const Quiz = () => {

    const state = {
        value: 1
    }
    const onRadioChange = e => {
        // console.log('radio checked', e.target.value);
        // this.setState({
        //     value: e.target.value,
        // });
    };
    const onFinish = (values) => {
        console.log('Received values of form: ', values);
    };

    const navigate = useNavigate();
    
    return (
        <div className="App flex">
            <div class="quiz-frame">
                <div className="site-card-border-less-wrapper">
                    <Card title="Card title" bordered={false} style={{ width: 300 }}>
                        {}
                        </Card>
                        </div>
                        <div class="quiz-next flex">
                            <Button type="primary" className="login-form"
                                shape="circle"
                                icon={<RightOutlined />}
                                onClick={() => navigate("/")} />
        
                        </div>
                    </div>
                </div>
            );
        
        };
        
        export default Quiz;

*/