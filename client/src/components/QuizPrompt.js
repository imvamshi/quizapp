import React, { useState } from 'react';

import Quiz from './Quiz';
import EndScreen from './EndScreen';
import QuizMainMenu from './QuizMainMenu'

import { QuizContext } from "../Helpers/Contexts"

function QuizPrompt() {
    /* Global State */
    const [gameState, setGameState] = useState("menu");
    const [score, setScore] = useState(0);
    const [timer, setTimer] = useState(0);

    return (
        <div className='App flex'>
            <h1>File uploaded. (QuizPrompt/))  Begin quiz now!)</h1>
            <p1> Timer Runs Here </p1>


            {/* The following provided state can be accessed in the components inside QuizContext */}

            <QuizContext.Provider value={{ gameState, setGameState, score, setScore, timer, setTimer }}>
                {gameState == "menu" && <QuizMainMenu />}
                {gameState == "quiz" && <Quiz />}
                {gameState == "endScreen" && <EndScreen />}
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