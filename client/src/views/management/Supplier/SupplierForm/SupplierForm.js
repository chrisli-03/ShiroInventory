import React, { useEffect, useState } from 'react'
import { Form, Row, Col, Input, Button } from 'antd'
import { useHistory, Link, useParams } from 'react-router-dom'
import { request } from '~/lib/api'
import Spinner from '~/components/Spinner/Spinner'
import './SupplierForm.scss'

const SupplierForm = () => {
  const [ loadingForm, setLoadingForm ] = useState(false)
  const { id } = useParams()
  const history = useHistory()
  const [ form ] = Form.useForm()

  const onFinish = value => {
    request(`supplier${id ? `/${id}` : ''}`, id ? 'put' : 'post', { data: value })
      .then(data => redirectTo('/supplier/list'))
  }

  const redirectTo = path => {
    history.push(path)
  }

  useEffect(() => {
    if (id) {
      setLoadingForm(true)
      request(`supplier/${id}`, 'get').then(data => {
        setLoadingForm(false)
        form.setFieldsValue(data)
      })
    }
  }, [id])

  if (loadingForm) {
    return <Spinner />
  }

  return <div>
    <h6>{ id ? 'Edit' : 'New' } Supplier</h6>
    <Form
      form={form}
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
        <Button type="primary" htmlType="submit">{ id ? 'Edit' : 'Create' }</Button>
        <Link to='/supplier/list'><Button className="ml-3" type="default">Cancel</Button></Link>
      </Form.Item>
    </Form>
  </div>
}

export default SupplierForm