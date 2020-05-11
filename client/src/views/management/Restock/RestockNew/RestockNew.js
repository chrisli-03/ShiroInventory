import React, { useEffect } from 'react'
import { useHistory, useParams, Link } from 'react-router-dom'
import { Form, Row, Col, Input, InputNumber, Select, Button } from 'antd'
import { PlusOutlined } from "@ant-design/icons"
import { request } from '~/lib/api'
import tableInfo from '~/data/table/tableInfo'
import { getList } from '~/store/list/actions'
import Spinner from '~/components/Spinner/Spinner'
import './RestockNew.scss'
import { connect } from 'react-redux'
import 'antd/es/table/style/css'

const { Option } = Select;

const supplierKey = tableInfo.supplier.key
const warehouseKey = tableInfo.warehouse.key

const RestockNew = ({ loading, suppliers, warehouses, getSupplier, getWarehouse }) => {
  const { id } = useParams()
  const history = useHistory()
  const [form] = Form.useForm()

  const supplierOptions = suppliers.map((supplier, i) => <Option value={supplier.id} key={i}>{supplier.supplierName}</Option>)
  const warehouseOptions = warehouses.map((warehouse, i) => <Option value={warehouse.id} key={i}>{warehouse.warehouseName}</Option>)

  const onFinish = value => {
    if (!value.detail) value.detail = []
    value.detail.forEach(n => n.itemPrice = Number(n.itemPrice))
    request('restock', 'post', { data: value })
      .then(data => redirectTo('/restock/list'))
  }

  const redirectTo = path => {
    history.push(path)
  }

  useEffect(() => {
    getSupplier()
  }, [getSupplier])

  useEffect(() => {
    getWarehouse()
  }, [getWarehouse])

  if (loading) {
    return <Spinner />
  }

  return <div>
    <h6>New Restock</h6>
    <Form
      form={form}
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
            rules={[
              {
                required: true,
                message: 'Please select warehouse'
              }
            ]}
          >
            <Select
              showSearch
              placeholder="Supplier"
              optionFilterProp="children"
              filterOption={(input, option) =>
                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
              }
            >
              {supplierOptions}
            </Select>
          </Form.Item>
        </Col>
      </Row>
      <Form.List name="detail">
        {(fields, { add, remove }) => (
          <div className="ant-table ant-table-small ant-table-fixed-header">
            <table style={{tableLayout: "fixed", width: '100%'}}>
              <colgroup></colgroup>
              <thead className="ant-table-thead">
                <tr>
                  <th className="ant-table-cell">Item Name</th>
                  <th className="ant-table-cell">Item Code</th>
                  <th className="ant-table-cell">Specification</th>
                  <th className="ant-table-cell">Warehouse</th>
                  <th className="ant-table-cell">Unit Price</th>
                  <th className="ant-table-cell">Quantity</th>
                  <th className="ant-table-cell">Total</th>
                  <th className="ant-table-cell">Action</th>
                </tr>
              </thead>
              <tbody className="ant-table-tbody">
                {fields.map((field, index) => (
                  <tr data-row-key="1" className="ant-table-row ant-table-row-level-0" key={index}>
                    <td className="ant-table-cell">
                      <Form.Item
                        name={[index, "itemName"]}
                        className="mb-0 no-message"
                        rules={[{ required: true }]}
                      >
                        <Input placeholder="Item Name" />
                      </Form.Item>
                    </td>
                    <td className="ant-table-cell">
                      <Form.Item
                        name={[index, "itemCode"]}
                        className="mb-0 no-message"
                        rules={[{ required: true }]}
                      >
                        <Input placeholder="Item Code" />
                      </Form.Item>
                    </td>
                    <td className="ant-table-cell">
                      <Form.Item
                        name={[index, "itemSpec"]}
                        className="mb-0 no-message"
                        rules={[{ required: true }]}
                      >
                        <Input placeholder="Specification" />
                      </Form.Item>
                    </td>
                    <td className="ant-table-cell">
                      <Form.Item
                        name={[index, "warehouse"]}
                        className="mb-0 no-message"
                        rules={[{ required: true }]}
                      >
                        <Select
                          showSearch
                          placeholder="Warehouse"
                          optionFilterProp="children"
                          filterOption={(input, option) =>
                            option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                          }
                        >
                          {warehouseOptions}
                        </Select>
                      </Form.Item>
                    </td>
                    <td className="ant-table-cell">
                      <Form.Item
                        name={[index, "itemPrice"]}
                        className="mb-0 no-message"
                        rules={[
                          { required: true },
                          { type: 'number', transform: value => Number(value) }
                        ]}
                      >
                        <Input placeholder="Unit Price" prefix={'￥'} />
                      </Form.Item>
                    </td>
                    <td className="ant-table-cell">
                      <Form.Item
                        name={[index, "itemQuantity"]}
                        className="mb-0 no-message"
                        rules={[{ required: true }]}
                      >
                        <InputNumber placeholder="Quantity" />
                      </Form.Item>
                    </td>
                    <td className="ant-table-cell">
                      <Form.Item
                        style={{ marginBottom: 0 }}
                        shouldUpdate={
                          (prevValues, currentValues) => {
                            if (!prevValues.detail[index]) return true
                            return (prevValues.detail[index].itemQuantity !== currentValues.detail[index].itemQuantity) ||
                              (prevValues.detail[index].itemPrice !== currentValues.detail[index].itemPrice)
                          }
                        }
                      >
                        {({ getFieldValue }) => {
                          const itemPrice = getFieldValue(["detail", index, "itemPrice"])
                          const itemQuantity = getFieldValue(["detail", index, "itemQuantity"])
                          if (typeof itemPrice === 'undefined' || itemPrice === '') return '-'
                          if (typeof itemQuantity === 'undefined' || itemPrice === '') return '-'
                          return `￥${(getFieldValue(["detail", index, "itemPrice"]) * getFieldValue(["detail", index, "itemQuantity"])).toFixed(2)}`
                        }}
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
            >
              <PlusOutlined /> Add Row
            </Button>
          </div>
        )}
      </Form.List>
      <Form.Item>
        <Button type="primary" htmlType="submit">Create</Button>
        <Link to='/restock/list'><Button className="ml-3" type="default">Cancel</Button></Link>
      </Form.Item>
    </Form>
  </div>
}

const mapStateToProps = state => ({
  loading: state.list[supplierKey].loading && state.list[warehouseKey].loading,
  suppliers: state.list[supplierKey].dataSource,
  warehouses: state.list[warehouseKey].dataSource
})

const mapDispatchToProps = dispatch => ({
  getSupplier: (page, size) => dispatch(getList(page, size, supplierKey)),
  getWarehouse: (page, size) => dispatch(getList(page, size, warehouseKey))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RestockNew)