import React from 'react';
import 'antd/dist/antd.css';
import { Form, Input, InputNumber, Button, Checkbox, Upload, message } from 'antd';
import { UserOutlined, FieldTimeOutlined } from '@ant-design/icons';
import { UploadOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

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
    const onFinish = (values) => {
        console.log('Received values of form: ', values);
    };
    const navigate = useNavigate();
    const routeChange = () => {
        let path = "/";
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


                <Form.Item>
                    <Button type="primary" htmlType="submit" className="login-form-button">
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