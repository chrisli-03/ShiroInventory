import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { Form, Row, Col, Input, Select, Button } from 'antd'
import { PlusOutlined } from "@ant-design/icons"
import { request } from '~/lib/api'
import tableInfo from '~/data/table/tableInfo'
import { getList } from '~/store/list/actions'
import Spinner from '~/components/Spinner/Spinner'
import './RestockNew.scss'
import { connect } from 'react-redux'
import 'antd/es/table/style/css'

const { Option } = Select;

const tableKey = tableInfo.supplier.key

const RestockNew = ({ loading, dataSource, getSupplier }) => {

  const options = dataSource.map((supplier, i) => <Option value={supplier.id} key={i}>{supplier.supplierName}</Option>)

  const history = useHistory()
  const [form] = Form.useForm()

  const onFinish = value => {
    request('restock', 'post', { data: value })
      .then(data => redirectTo('/restock/list'))
  }

  const redirectTo = path => {
    history.push(path)
  }

  useEffect(() => {
    getSupplier()
  }, [getSupplier])

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
          >
            <Select
              showSearch
              placeholder="Supplier"
              optionFilterProp="children"
              filterOption={(input, option) =>
                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
              }
            >
              {options}
            </Select>
          </Form.Item>
        </Col>
      </Row>
      <Form.List name="detail">
        {(fields, { add, remove }) => (
          <div className="ant-table ant-table-small ant-table-fixed-header">
            <table style={{tableLayout: "auto", width: '100%'}}>
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
                      <Form.Item name={[index, "itemName"]} noStyle>
                        <Input placeholder="Item Name" />
                      </Form.Item>
                    </td>
                    <td className="ant-table-cell">
                      <Form.Item name={[index, "itemCode"]} noStyle>
                        <Input placeholder="Item Code" />
                      </Form.Item>
                    </td>
                    <td className="ant-table-cell">
                      <Form.Item name={[index, "itemSpec"]} noStyle>
                        <Input placeholder="Specification" />
                      </Form.Item>
                    </td>
                    <td className="ant-table-cell">
                      <Form.Item name={[index, "warehouse"]} noStyle>
                        <Input placeholder="Warehouse" />
                      </Form.Item>
                    </td>
                    <td className="ant-table-cell">
                      <Form.Item name={[index, "itemPrice"]} noStyle>
                        <Input placeholder="Unit Price" prefix={'￥'} />
                      </Form.Item>
                    </td>
                    <td className="ant-table-cell">
                      <Form.Item name={[index, "itemQuantity"]} noStyle>
                        <Input placeholder="Quantity" />
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
        <Button className="ml-3" type="default" onClick={() => redirectTo('/restock/list')}>Cancel</Button>
      </Form.Item>
    </Form>
  </div>
}

const mapStateToProps = state => ({
  loading: state.list[tableKey].loading,
  dataSource: state.list[tableKey].dataSource
})

const mapDispatchToProps = dispatch => ({
  getSupplier: (page, size) => dispatch(getList(page, size, tableKey))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RestockNew)