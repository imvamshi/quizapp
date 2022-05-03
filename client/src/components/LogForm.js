import React, {useState} from 'react';
import 'antd/dist/antd.css';
import { Form, Input, InputNumber, Button, Checkbox, Upload, message } from 'antd';
import { UserOutlined, FieldTimeOutlined } from '@ant-design/icons';
import { UploadOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import { Modal } from 'antd';
import { getLogs } from '../services/logServices';



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
        } else if (info.file.status === 'error') {
            message.error(`${info.file.name} file upload failed.`);
        }
    },
};

function onChange(value) {
    console.log('changed', value);
}

const NormalLoginForm = () => {
    const onFinish = async (values) => {
        console.log('Received values of form: ', values);
        const username = values.username.toLowerCase();
        const resp = await getLogs();
        console.log(JSON.stringify(resp.data));
        let _logs = '';
        for(let log of resp.data) {
            console.log(log);
            if(username == 'admin') {
                _logs = _logs + `\n>>>> User: ${log.username}\n`;
                _logs = _logs + log.log;
                _logs = _logs + "\n\n"
            } else if(log.username == username) {
                _logs = _logs + log.log;
                _logs = _logs + "\n\n"
            }
        }
        console.log(_logs);
        const element = document.createElement("a");
        document.getElementById('myInput').value = _logs;
        const file = new Blob([document.getElementById('myInput').value], {type: 'text/plain'});
        element.href = URL.createObjectURL(file);
        element.download = "log.txt";
        document.body.appendChild(element); // Required for this to work in FireFox
        element.click();

    };
    const navigate = useNavigate();
    const routeChange = () => {
        let path = "/";
        navigate(path);
    }

    const getLog = async () => {
        const resp = await getLogs();
        console.log(JSON.stringify(resp.data));

        console.log("clicked get logs", resp);
       
          
    }

    return (
        <div className="App flex">
            <textarea class="TextArea" id="myInput" value = "To view log, enter username and click 'Download Log'"/>
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


                <Form.Item>
                    <Button type="primary" htmlType="submit" className="login-form-button"
                    >
                        Download Log
                    </Button>
                </Form.Item>

                <Button type="primary" className="login-form-button"
                    onClick={routeChange}>
                    Home
                </Button>
            </Form>
        </div>
    );
};

export default NormalLoginForm;