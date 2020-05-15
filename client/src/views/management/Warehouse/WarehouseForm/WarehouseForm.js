import React, { useEffect, useState } from 'react'
import { Form, Row, Col, Input, Button } from 'antd'
import { useHistory, Link, useParams } from 'react-router-dom'
import { request } from '~/lib/api'
import Spinner from '~/components/Spinner/Spinner'
import './WarehouseForm.scss'

const WarehouseForm = () => {
  const [ loadingForm, setLoadingForm ] = useState(false)
  const { id } = useParams()
  const history = useHistory()
  const [ form ] = Form.useForm()

  const onFinish = value => {
    request(`warehouse${id ? `/${id}` : ''}`, id ? 'put' : 'post', { data: value })
      .then(data => redirectTo('/warehouse/list'))
  }

  const redirectTo = path => {
    history.push(path)
  }

  useEffect(() => {
    if (id) {
      setLoadingForm(true)
      request(`warehouse/${id}`, 'get').then(data => {
        setLoadingForm(false)
        form.setFieldsValue(data)
      })
    }
  }, [id])

  if (loadingForm) {
    return <Spinner />
  }

  return <div>
    <h6>{ id ? 'Edit' : 'New' } Warehouse</h6>
    <Form
      form={form}
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
        <Button type="primary" htmlType="submit">{ id ? 'Edit' : 'Create' }</Button>
        <Link to='/warehouse/list'><Button className="ml-3" type="default">Cancel</Button></Link>
      </Form.Item>
    </Form>
  </div>
}

export default WarehouseForm