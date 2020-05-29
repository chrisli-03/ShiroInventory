import React, { useEffect, useState } from 'react'
import { Form, Row, Col, Input, Button, Select } from 'antd'
import { useHistory, Link, useParams } from 'react-router-dom'
import { request } from '~/lib/api'
import Spinner from '~/components/Spinner/Spinner'
import './ConsumptionForm.scss'
import { PlusOutlined } from '@ant-design/icons'
import 'antd/es/table/style/css'

const { Option } = Select

const ConsumptionForm = () => {
  const [ loadingForm, setLoadingForm ] = useState(false)
  const [ loadingInventory, setLoadingInventory ] = useState(false)
  const [ inventory, setInventory ] = useState([])
  const [ itemUsed, setItemUsed ] = useState(new Set())
  const [ inventoryMap, setInventoryMap ] = useState(new Map())
  const { id } = useParams()
  const history = useHistory()
  const [ form ] = Form.useForm()

  const onFinish = value => {
    if (!value.consumptionFormDetails) value.consumptionFormDetails = []
    value.consumptionFormDetails.forEach(n => n.consumptionAmount = Number(n.consumptionAmount))
    request(`consumption${id ? `/${id}` : ''}`, id ? 'put' : 'post', { data: value })
      .then(data => redirectTo('/consumption/list'))
  }

  const redirectTo = path => {
    history.push(path)
  }

  const updateItem = () => {
    setItemUsed(form.getFieldValue(["consumptionFormDetails"]).reduce((acc, item) => item ? acc.add(item.itemCode) : acc, new Set()))
  }

  useEffect(() => {
    if (id) {
      setLoadingForm(true)
      request(`consumption/${id}`, 'get').then(data => {
        form.setFieldsValue(data)
        updateItem()
      }).finally(() => { setLoadingForm(false) })
    }
  }, [id])

  useEffect(() => {
    setLoadingInventory(true)
    request('inventory', 'get').then(data => {
      setInventory(data)
    }).finally(() => { setLoadingInventory(false) })
  }, [])

  useEffect(() => {
    setInventoryMap(inventory.reduce((acc, item) => acc.set(item.itemCode, item), new Map()))
  }, [inventory])

  if (loadingForm || loadingInventory) {
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
      <Form.List name="consumptionFormDetails">
        {(fields, { add, remove }) => (
          <div className="ant-table ant-table-small ant-table-fixed-header">
            <table style={{tableLayout: "fixed", width: '100%'}}>
              <colgroup></colgroup>
              <thead className="ant-table-thead">
              <tr>
                <th className="ant-table-cell">Item</th>
                <th className="ant-table-cell">Item Name</th>
                <th className="ant-table-cell">Specification</th>
                <th className="ant-table-cell">Available</th>
                <th className="ant-table-cell">Consumption Amount</th>
                <th className="ant-table-cell">Action</th>
              </tr>
              </thead>
              <tbody className="ant-table-tbody">
              {fields.map((field, index) => (
                <tr data-row-key="1" className="ant-table-row ant-table-row-level-0" key={index}>
                  <td className="ant-table-cell">
                    <Form.Item
                      name={[index, "itemCode"]}
                      className="mb-0 no-message"
                      rules={[{ required: true }]}
                    >
                      <Select
                        showSearch
                        placeholder="Item"
                        optionFilterProp="children"
                        filterOption={(input, option) =>
                          option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                        }
                        onChange={() => updateItem()}
                      >
                        {
                          inventory.map((item, i) => {
                            return <Option value={item.itemCode} key={i} disabled={itemUsed.has(item.itemCode)}>{`${item.itemName}/${item.itemCode}/${item.itemSpec}`}</Option>
                          })
                        }
                      </Select>
                    </Form.Item>
                  </td>
                  <td className="ant-table-cell">
                    <Form.Item
                      style={{ marginBottom: 0 }}
                      shouldUpdate={
                        (prevValues, currentValues) => {
                          if (!prevValues.consumptionFormDetails[index]) return true
                          return prevValues.consumptionFormDetails[index].itemCode !== currentValues.consumptionFormDetails[index].itemCode
                        }
                      }
                    >
                      {({ getFieldValue }) => {
                        const itemCode = getFieldValue(["consumptionFormDetails", index, "itemCode"])
                        return <Input placeholder="Item Name" disabled value={itemCode ? inventoryMap.get(itemCode).itemName : ''} />
                      }}
                    </Form.Item>
                  </td>
                  <td className="ant-table-cell">
                    <Form.Item
                      style={{ marginBottom: 0 }}
                      shouldUpdate={
                        (prevValues, currentValues) => {
                          if (!prevValues.consumptionFormDetails[index]) return true
                          return prevValues.consumptionFormDetails[index].itemCode !== currentValues.consumptionFormDetails[index].itemCode
                        }
                      }
                    >
                      {({ getFieldValue }) => {
                        const itemCode = getFieldValue(["consumptionFormDetails", index, "itemCode"])
                        return <Input placeholder="Item Name" disabled value={itemCode ? inventoryMap.get(itemCode).itemSpec : ''} />
                      }}
                    </Form.Item>
                  </td>
                  <td>
                    <Form.Item
                      style={{ marginBottom: 0 }}
                      shouldUpdate={
                        (prevValues, currentValues) => {
                          if (!prevValues.consumptionFormDetails[index]) return true
                          return prevValues.consumptionFormDetails[index].itemCode !== currentValues.consumptionFormDetails[index].itemCode
                        }
                      }
                    >
                      {({ getFieldValue }) => {
                        const itemCode = getFieldValue(["consumptionFormDetails", index, "itemCode"])
                        return itemCode ? inventoryMap.get(itemCode).itemAvailable : ''
                      }}
                    </Form.Item>
                  </td>
                  <td className="ant-table-cell">
                    <Form.Item
                      name={[index, "consumptionAmount"]}
                      className="mb-0 no-message"
                      rules={[
                        { required: true },
                        ({ getFieldValue }) => ({
                          validator(rule, value) {
                            if (value <= inventoryMap.get(form.getFieldValue(["consumptionFormDetails", index, "itemCode"])).itemAvailable) {
                              return Promise.resolve();
                            }
                            return Promise.reject('Not enough item available');
                          },
                        })
                      ]}
                    >
                      <Input placeholder="Consumption Amount" />
                    </Form.Item>
                  </td>
                  <td className="ant-table-cell">
                    <Button danger onClick={() => remove(field.name)}>
                      Remove
                    </Button>
                  </td>
                </tr>
              ))}
              </tbody>
            </table>
            <Button
              className="mb-3"
              type="dashed"
              onClick={() => add()}
              style={{ width: "100%" }}
              disabled={(form.getFieldValue(["consumptionFormDetails"]) || []).length === inventory.length}
            >
              <PlusOutlined /> Add Row
            </Button>
          </div>
        )}
      </Form.List>
      <Form.Item>
        <Button type="primary" htmlType="submit">{ id ? 'Edit' : 'Create' }</Button>
        <Link to='/consumption/list'><Button className="ml-3" type="default">Cancel</Button></Link>
      </Form.Item>
    </Form>
  </div>
}

export default ConsumptionForm