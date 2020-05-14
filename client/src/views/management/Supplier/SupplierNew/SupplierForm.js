import React from 'react'
import { Form, Row, Col, Input, Button } from 'antd'
import { useHistory, Link } from 'react-router-dom'
import { request } from '~/lib/api'
import './SupplierForm.scss'

const SupplierForm = () => {
  const history = useHistory()
  const onFinish = value => {
    request('supplier', 'post', { data: value })
      .then(data => redirectTo('/supplier/list'))
  }

  const redirectTo = path => {
    history.push(path)
  }

  return <div>
    <h6>New Supplier</h6>
    <Form
      name="new_supplier"
      className="page_form"
      onFinish={onFinish}
    >
      <Row gutter={24}>
        <Col xs={24} md={12} lg={8}>
          <Form.Item
            name="supplierName"
            label="Supplier Name"
            rules={[
              {
                required: true,
                message: 'Please input warehouse name'
              }
            ]}
          >
            <Input placeholder="Supplier Name" />
          </Form.Item>
        </Col>
        <Col xs={24} md={12} lg={8}>
          <Form.Item
            name="supplierAddress"
            label="Supplier Address"
          >
            <Input placeholder="Supplier Address" />
          </Form.Item>
        </Col>
        <Col xs={24} md={12} lg={8}>
          <Form.Item
            name="supplierContact"
            label="Supplier Contact"
          >
            <Input placeholder="Supplier Contact" />
          </Form.Item>
        </Col>
        <Col xs={24} md={12} lg={8}>
          <Form.Item
            name="supplierContactName"
            label="Supplier Contact Name"
          >
            <Input placeholder="Supplier Contact Name" />
          </Form.Item>
        </Col>
      </Row>
      <Form.Item>
        <Button type="primary" htmlType="submit">Create</Button>
        <Link to='/supplier/list'><Button className="ml-3" type="default">Cancel</Button></Link>
      </Form.Item>
    </Form>
  </div>
}

export default SupplierForm