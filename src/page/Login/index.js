import React, { useNavigate } from'react-router-dom';
import { Button, Checkbox, Form, Input } from 'antd';
import "./index.css"

export default function Login() {
  const navigate = useNavigate();

  const onFinish = (values) => {
    console.log('Success:', values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  const handleClick = () => {
    navigate('/home'); 
  }

  return (
    <div >
      <Form
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        style={{
          maxWidth: 600,
          width:'482px',
          position:'absolute',
          top:'50%',
          left:'50%',
          transform:'translate(-50%,-50%)',
          backgroundColor:'aliceblue',
          paddingTop:'50px',
          paddingRight:'50px'
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >

        <div className='head'>违章文本分类系统</div>
        <Form.Item
          label="账号"
          name="username"
          rules={[
            {
              required: true,
              message: 'Please input your username!',
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="密码"
          name="password"
          rules={[
            {
              required: true,
              message: 'Please input your password!',
            },
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 12,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit" onClick={handleClick}>
            登录
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}