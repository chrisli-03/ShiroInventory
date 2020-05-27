import React, { useEffect, useState } from 'react'
import { Form, Row, Col, Input, Button } from 'antd'
import { useHistory, Link, useParams } from 'react-router-dom'
import { request } from '~/lib/api'
import Spinner from '~/components/Spinner/Spinner'
import './ConsumptionForm.scss'

const ConsumptionForm = () => {
  const [ loadingForm, setLoadingForm ] = useState(false)
  const { id } = useParams()
  const history = useHistory()
  const [ form ] = Form.useForm()

  const onFinish = value => {
    request(`consumption${id ? `/${id}` : ''}`, id ? 'put' : 'post', { data: value })
      .then(data => redirectTo('/consumption/list'))
  }

  const redirectTo = path => {
    history.push(path)
  }

  useEffect(() => {
    if (id) {
      setLoadingForm(true)
      request(`consumption/${id}`, 'get').then(data => {
        setLoadingForm(false)
        form.setFieldsValue(data)
      })
    }
  }, [id])

  if (loadingForm) {
    return <Spinner />
  }

  return <div>
    <h6>{ id ? 'Edit' : 'New' } Consumption</h6>
    <Form
      form={form}
      name="new_consumption"
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
      </Row>
      <Form.Item>
        <Button type="primary" htmlType="submit">{ id ? 'Edit' : 'Create' }</Button>
        <Link to='/consumption/list'><Button className="ml-3" type="default">Cancel</Button></Link>
      </Form.Item>
    </Form>
  </div>
}

export default ConsumptionForm