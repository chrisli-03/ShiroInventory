import React from 'react'
import { Form, Row, Col, Input, Button } from 'antd'
import { useHistory } from 'react-router-dom'
import { request } from '~/lib/api'
import './WarehouseNew.scss'

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
  const onFinish = value => {
    request('warehouse', 'post', { data: value })
      .then(data => redirectTo('/warehouse/list'))
  }

  const redirectTo = path => {
    history.push(path)
  }

  return <div>
    <h6>New Warehouse</h6>
    <Form
      {...formLayout}
      name="new_warehouse"
      className="page_form"
      onFinish={onFinish}
    >
      <Form.Item
        name="warehouseName"
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
        name="warehouseAddress"
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