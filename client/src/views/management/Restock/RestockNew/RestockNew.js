import React from 'react'
import { Form, Row, Col, Input, Button } from 'antd'
import { useHistory } from 'react-router-dom'
import { request } from '~/lib/api'
import './RestockNew.scss'

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
      name="new_restock"
      className="page_form"
      onFinish={onFinish}
    >
      <Row gutter={24}>
        <Col xs={24} md={12} lg={8}>
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
        </Col>
        <Col xs={24} md={12} lg={8}>
          <Form.Item
            name="supplier"
            label="Supplier"
          >
            <Input placeholder="Supplier" />
          </Form.Item>
        </Col>
      </Row>
      <Form.Item>
        <Button type="primary" htmlType="submit">Create</Button>
        <Button className="ml-3" type="default" onClick={() => redirectTo('/restock/list')}>Cancel</Button>
      </Form.Item>
    </Form>
  </div>
}

export default RestockNew