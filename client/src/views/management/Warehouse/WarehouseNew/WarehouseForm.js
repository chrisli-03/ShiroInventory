import React from 'react'
import { Form, Row, Col, Input, Button } from 'antd'
import { useHistory, Link } from 'react-router-dom'
import { request } from '~/lib/api'
import './WarehouseForm.scss'

const WarehouseForm = () => {
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
      name="new_warehouse"
      className="page_form"
      onFinish={onFinish}
    >
      <Row gutter={24}>
        <Col xs={24} md={12} lg={8}>
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
        </Col>
        <Col xs={24} md={12} lg={8}>
          <Form.Item
            name="warehouseAddress"
            label="Warehouse Address"
          >
            <Input placeholder="Warehouse Address" />
          </Form.Item>
        </Col>
      </Row>
      <Form.Item>
        <Button type="primary" htmlType="submit">Create</Button>
        <Link to='/warehouse/list'><Button className="ml-3" type="default">Cancel</Button></Link>
      </Form.Item>
    </Form>
  </div>
}

export default WarehouseForm