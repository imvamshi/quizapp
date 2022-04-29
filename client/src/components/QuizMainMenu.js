import React, { useState } from 'react';
import Quiz from './Quiz';
import EndScreen from './EndScreen';

import { QuizContext } from "../Helpers/Contexts"

function QuizMainMenu() {
    /* Global State */
    const [gameState, setGameState] = useState("menu");

    return (
        <div className='App flex'>
            <h1>File has been uploaded. (Instructions)</h1>


            {/* The following provided state can be accessed in the components inside QuizContext */}

            <QuizContext.Provider value={{ gameState, setGameState }}>
                {gameState == "menu" && <Quiz />}
                {gameState == "quiz" && <Quiz />}
                {gameState == "endScreen" && <EndScreen />}
            </QuizContext.Provider>

        </div>
    )
}

export default QuizMainMenu;



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