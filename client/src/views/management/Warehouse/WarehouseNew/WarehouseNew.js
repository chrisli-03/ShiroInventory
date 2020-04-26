import React from 'react'
import { Form, Row, Col, Input, Button } from 'antd'
import './WarehouseNew.scss'
import { useHistory } from 'react-router-dom'

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

const WarehouseNew = () => {
  const history = useHistory()
  const [form] = Form.useForm()
  const onFinish = () => {
    console.log(123)
  }

  const redirectTo = path => {
    history.push(path)
  }

  return <div>
    <h6>New Warehouse</h6>
    <Form
      {...formLayout}
      form={form}
      name="new_warehouse"
      className="page_form"
      onFinish={onFinish}
    >
      <Form.Item
        name="warehouse_name"
        label="Warehouse Name"
        rules={[
          {
            required: true,
            message: 'Please input warehouse name'
          }
        ]}
      >
        <Input placeholder="Warehouse Name" />
      </Form.Item>
      <Form.Item
        name="warehouse_address"
        label="Warehouse Address"
      >
        <Input placeholder="Warehouse Address" />
      </Form.Item>
      <Form.Item
        wrapperCol={{
          xs: { span: 24, offset: 0 },
          sm: { span: 16, offset: 8 }
        }}
      >
        <Button type="primary" htmlType="submit">Create</Button>
        <Button className="ml-3" type="default" onClick={() => redirectTo('/warehouse/list')}>Cancel</Button>
      </Form.Item>
    </Form>
  </div>
}

export default WarehouseNew