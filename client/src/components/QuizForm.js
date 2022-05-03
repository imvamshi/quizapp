import React, { createContext, useState } from 'react';
import 'antd/dist/antd.css';
import { Form, Input, InputNumber, Button, Checkbox, Upload, message } from 'antd';
import { UserOutlined, FieldTimeOutlined } from '@ant-design/icons';
import { UploadOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import { GetFileContents } from '../services/quizFileService';

import { addLog } from '../services/logServices';

import axios from "axios";


const QuizForm = (props) => {

  // const { userData, setUserData } = useState(userDataRead)

  const { quizData, setQuizData } = props;

  const onChange = (value) => {
    setQuizData({ ...quizData, 'timer': value });
    console.log('changed quiz timer', value);
  }
  const onChangeNoOfQuestions = (value) => {
    setQuizData({ ...quizData, 'noq': value });
    console.log('changed Question count', value);
    console.log(`quizData after incrementing Question count ${JSON.stringify(quizData)}`);

  }
  const uploadProps = {
    username: '',
    timer: '',

    name: 'file',
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    headers: {
      authorization: 'authorization-text',
    },
    onChange(info) {
      if (info.file.status !== 'uploading') {
        console.log(info.file, info.fileList);
      }
      if (info.file.status === 'done') {
        message.success(`${info.file.name} file uploaded successfully`);
        console.log(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === 'error') {
        message.error(`${info.file.name} file upload failed.`);
      }
    },

    beforeUpload: (file) => {
      const reader = new FileReader();

      reader.onload = e => {
        // message.success(e.target.result)
        // const bank = e.target.result.split('\n');
        // for (let s = 0; s < bank.length; s++) {
        //   console.log(bank[s]);
        // }

        const qbank = GetFileContents(e.target.result);
        setQuizData({ ...quizData, qbank });
        message.success("Uploaded");
        console.log(`quizData after file upload = ${JSON.stringify(quizData)}`);
        console.log(`qbank after file upload = ${JSON.stringify(qbank)}`);
      };
      reader.readAsText(file);
      console.log(reader);
      // Prevent upload
      return false;
    }
  };

  const navigate = useNavigate();

  const routeChange = (path) => {
    message.success(`reached path ${path}`)
    navigate(path);
  }

  const onFinish = (values) => {
    console.log('Received values of form: ', values);

    if(Object.keys(values).length > 0) {
      console.log('there are values');
      setQuizData({ ...quizData, username: values.username, timer: values.timer, noq: values.noq });
      routeChange("/quiz");
    } else {
      console.log('no values');
    }

    //onClick={() => onFinish()}>
  };

  const dothis = async () => {
    /* Trigger backend API to store quiz results in database */

    // axios.get("http://localhost:8080/", { crossdomain: true }).then(response => {
    //   setText(response.data.text);
    //   setAuthor(response.data.author);
    // });

    // var config = {
    //   method: 'get',
    //   url: 'http://quiz-raghu.herokuapp.com/api/tasks',
    //   headers: {}
    // };
    // var config2 = {
    //   method: 'post',
    //   url: 'http://localhost:8080/api/logs',
    //   headers: {},
    //   body: {
    //     log: `log---`, username: 'testttuser' 
    //   }
    // };

    // axios(config)
    //   .then(function (response) {
    //     console.log(JSON.stringify(response.data));
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //   });
    //   console.log(config2);
    //   axios(config2)
    //   .then(function (response) {
    //     console.log("config2 response below");
    //     console.log(JSON.stringify(response.data));
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //   });
    // var axios = require('axios');
    // var data = JSON.stringify({
    //   "log": "log---",
    //   "username": "testttuser"
    // });
    
    // var config = {
    //   method: 'post',
    //   url: 'http://localhost:8080/api/logs',
    //   headers: { 
    //     'Content-Type': 'application/json'
    //   },
    //   data : data
    // };
    
    // axios(config)
    // .then(function (response) {
    //   console.log(JSON.stringify(response.data));
    // })
    // .catch(function (error) {
    //   console.log(error);
    // });
 

  };



  return (
    <div className="App flex">
      <Form
        name="normal_login"
        className="login-form"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
      >
        <Form.Item
          name="username"
          rules={[
            {
              required: true,
              message: 'Please input your Username!',
            },
          ]}
        >
          <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
        </Form.Item>
        <Form.Item
          name="timer"
          rules={[
            {
              required: true,
              message: 'Please input timer',
            },
          ]}
        >
          {/* <Input
          prefix={<FieldTimeOutlined className="site-form-item-icon" />}
          type="text"
          placeholder="Timer"
        /> */}
          <InputNumber
            min={1}
            max={1000}

            onChange={onChange}
            addonAfter="Timer (Seconds)"
            className="login-form-button" />

        </Form.Item>

        <Form.Item
          name="noq"
          rules={[
            {
              required: true,
              message: 'No. of questions',
            },
          ]}
        >
          {/* <Input
          prefix={<FieldTimeOutlined className="site-form-item-icon" />}
          type="text"
          placeholder="Timer"
        /> */}
          <InputNumber
            min={1}
            max={1000}
            onChange={onChangeNoOfQuestions}
            addonAfter="No. of questions"
            className="login-form-button" />

        </Form.Item>

        <Form.Item>
          <Upload {...uploadProps} >
            <Button
              icon={<UploadOutlined />}
              className="upload-button"
            >
              Click to Upload Quiz file
            </Button>
          </Upload>
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" className="login-form-button"
            >
            Start Quiz
          </Button>
        </Form.Item>

        <Button type="primary" className="login-form-button"

          onClick={() => routeChange("/log")}>
          Get Log File
        </Button>
      </Form>
    </div>
  );
};

export default QuizForm;