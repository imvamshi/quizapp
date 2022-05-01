import React, { createContext, useState } from 'react';
import 'antd/dist/antd.css';
import { Form, Input, InputNumber, Button, Checkbox, Upload, message } from 'antd';
import { UserOutlined, FieldTimeOutlined } from '@ant-design/icons';
import { UploadOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

import { UserDataContext } from '../Helpers/Contexts';

const userDataRead = {}

const props = {
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
      console.log(typeof e.target.result);
      //message.success(e.target.result);
      message.success(e.target.result)
      const bank = e.target.result.split('\n');
      for (let s = 0; s < bank.length; s++) {
        message.success(bank[s]);
        console.log(bank[s]);
      }
    };
    reader.readAsText(file);
    console.log(reader);
    // Prevent upload
    return false;
  }
};

function onChange(value) {
  console.log('changed', value);
}

const QuizForm = () => {
  const { userData, setUserData } = useState(userDataRead)

  const onFinish = (values) => {
    console.log('Received values of form: ', values);
  };
  const navigate = useNavigate();
  const routeChange = (path) => {
    message.success(`reached path ${path}`)
    navigate(path);
  }

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
            defaultValue={40}
            onChange={onChange}
            addonAfter="Timer (Seconds)"
            className="login-form-button" />

        </Form.Item>

        <Form.Item>
          <Upload {...props} >
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
            onClick={() => routeChange("/quiz")}>
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