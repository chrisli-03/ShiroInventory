import React from 'react'
import { Form, Input, Button } from 'antd'
import './Register.scss'

const Login = React.lazy(() => import(/* webpackChunkName: "components/auth/Login" */ '~/components/auth/Login/Login'))

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 }
}

const tailLayout = {
  wrapperCol: {
    span: 24
  }
}

const Register = ({ setForm }) => {
  const onFinish = (form) => {
    console.log(form)
  }

  return (
    <div className="wrapper">
      <h2 className="form-header">Register</h2>
      <Form
        {...layout}
        className="register-form"
        name="register"
        onFinish={onFinish}
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[{ required: true, message: 'Please input your Username!' }]}
        >
          <Input placeholder="Username" />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: 'Please input your Password!' }]}
        >
          <Input.Password placeholder="Password" />
        </Form.Item>

        <Form.Item
          label="Repeat Password"
          name="passwordRepeat"
        >
          <Input.Password placeholder="Repeat Password" />
        </Form.Item>

        <Form.Item
          name="email"
          label="Email"
          rules={[
            { type: 'email', message: 'Please input a valid Email!' },
            { required: true, message: 'Please input your Email!' }
          ]}>
          <Input placeholder="Email" />
        </Form.Item>

        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit" className="login-form-button">
            Register
          </Button>
          Or <Button type="link" style={{ padding: 0 }} onClick={() => setForm(<Login setForm={setForm} />)}>back to login</Button>
        </Form.Item>
      </Form>
    </div>
  )
}

export default Register