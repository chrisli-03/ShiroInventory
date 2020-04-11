import React from 'react'
import { connect } from 'react-redux'
import { Form, Input, Button, Checkbox } from 'antd'
import { login } from '~/store/auth/actions'
import './Login.scss'

const Register = React.lazy(() => import(/* webpackChunkName: "components/auth/Register" */ '~/components/auth/Register/Register'))
const ForgotPassword = React.lazy(() => import(/* webpackChunkName: "components/auth/ForgotPassword" */ '~/components/auth/ForgotPassword/ForgotPassword'))

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 }
}

const tailLayout = {
  wrapperCol: {
    span: 24
  }
}

const Login = ({ login, setForm }) => {
  const onFinish = ({ username, password }) => {
    login(username, password)
  }

  return (
    <div className="wrapper">
      <h2 className="form-header">Login</h2>
      <Form
        {...layout}
        className="login-form"
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
          label="Password"
          name="password"
          rules={[{ required: true, message: 'Please input your Password!' }]}
        >
          <Input.Password placeholder="Password" />
        </Form.Item>

        <Form.Item {...tailLayout}>
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <Button
            className="login-form-forgot"
            type="link"
            style={{ padding: 0 }}
            onClick={() => setForm(<ForgotPassword setForm={setForm} />)}
          >
            Forgot password
          </Button>
        </Form.Item>

        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit" className="login-form-button">
            Log in
          </Button>
          Or <Button type="link" style={{ padding: 0 }} onClick={() => setForm(<Register setForm={setForm} />)}>register now!</Button>
        </Form.Item>
      </Form>
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  login: (username, password) => dispatch(login(username, password)),
})

export default connect(
  null,
  mapDispatchToProps
)(Login)