import React from 'react'
import { Form, Input, Button } from 'antd'
import { useHistory } from 'react-router-dom'
import { request } from '~/lib/api'
import './RestockNew.scss'

const formLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 8 }
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 16 }
  }
}

const RestockNew = () => {
  const history = useHistory()
  const onFinish = value => {
    request('restock', 'post', { data: value })
      .then(data => redirectTo('/restock/list'))
  }

  const redirectTo = path => {
    history.push(path)
  }

  return <div>
    <h6>New Restock</h6>
    <Form
      {...formLayout}
      name="new_restock"
      className="page_form"
      onFinish={onFinish}
    >
      <Form.Item
        name="formID"
        label="Form ID"
        rules={[
          {
            required: true,
            message: 'Please input form ID'
          }
        ]}
      >
        <Input placeholder="Form ID" />
      </Form.Item>
      <Form.Item
        name="supplier"
        label="Supplier"
      >
        <Input placeholder="Supplier" />
      </Form.Item>
      <Form.Item
        wrapperCol={{
          xs: { span: 24, offset: 0 },
          sm: { span: 16, offset: 8 }
        }}
      >
        <Button type="primary" htmlType="submit">Create</Button>
        <Button className="ml-3" type="default" onClick={() => redirectTo('/restock/list')}>Cancel</Button>
      </Form.Item>
    </Form>
  </div>
}

export default RestockNew