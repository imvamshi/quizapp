import React, { useContext, useState } from 'react';
// import { Statistic, Row, Col } from 'antd';
import { QuizContext } from "../Helpers/Contexts"
import "../App.css"

function QuizMainMenu() {
    /* Global State */
    const { gameState, setGameState, timer, setTimer } = useContext(QuizContext);
    // const { Countdown } = Statistic;

    // const onFinish = () => {
    //     console.log("Timer finished! in <Quiz />");
    //     setGameState("endScreen");
    // }

    const startButtonOnClick = () => {
        setTimer(Date.now() + timer*1000);
        setGameState("quiz");
    }

    return (
        <div className='flex Menu'>
            {/* <div className='flex'>
                <Row gutter={0}>
                    <Col span={20}>
                        <Countdown title="Time left" value={Date.now() + timer * 1000} onFinish={onFinish} />
                    </Col>
                </Row>
            </div> */}
            <button onClick={startButtonOnClick}>Start Quiz</button>
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