import React from 'react'
import { Form, Input, Button } from 'antd'
import { useHistory } from 'react-router-dom'
import { request } from '~/lib/api'
import './SupplierNew.scss'

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

const SupplierNew = () => {
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
      {...formLayout}
      name="new_supplier"
      className="page_form"
      onFinish={onFinish}
    >
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
      <Form.Item
        name="supplierAddress"
        label="Supplier Address"
      >
        <Input placeholder="Supplier Address" />
      </Form.Item>
      <Form.Item
        name="supplierContact"
        label="Supplier Contact"
      >
        <Input placeholder="Supplier Contact" />
      </Form.Item>
      <Form.Item
        name="supplierContactName"
        label="Supplier Contact Name"
      >
        <Input placeholder="Supplier Contact Name" />
      </Form.Item>
      <Form.Item
        wrapperCol={{
          xs: { span: 24, offset: 0 },
          sm: { span: 16, offset: 8 }
        }}
      >
        <Button type="primary" htmlType="submit">Create</Button>
        <Button className="ml-3" type="default" onClick={() => redirectTo('/supplier/list')}>Cancel</Button>
      </Form.Item>
    </Form>
  </div>
}

export default SupplierNew