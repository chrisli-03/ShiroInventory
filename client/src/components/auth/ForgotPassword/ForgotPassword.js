import React from 'react'
import { Form, Input, Button } from 'antd'
import './ForgotPassword.scss'

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

const ForgotPassword = ({ setForm }) => {
  const onFinish = (form) => {
    console.log(form)
  }

  return (
    <div className="wrapper">
      <h2 className="form-header">Forgot Password</h2>
      <Form
        {...layout}
        className="forgot_password-form"
        name="login"
        initialValues={{ remember: true }}
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
          label="Email"
          name="email"
          rules={[
            { type: 'email', message: 'Please input a valid Email!' },
            { required: true, message: 'Please input your Email!' }
          ]}>
          <Input placeholder="Email" />
        </Form.Item>

        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit" className="login-form-button">
            Reset Password
          </Button>
          Or <Button type="link" style={{ padding: 0 }} onClick={() => setForm(<Login setForm={setForm} />)}>back to login</Button>
        </Form.Item>
      </Form>
    </div>
  )
}

export default ForgotPassword