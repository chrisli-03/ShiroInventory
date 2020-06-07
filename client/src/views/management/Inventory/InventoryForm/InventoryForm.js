import React, { useState, useEffect } from 'react'
import { Col, Row, Table } from 'antd'

const columns = [
  {
    title: 'Restock Date',
    dataIndex: 'creationDate',
    key: 'creationDate'
  },
  {
    title: 'Restock Price',
    dataIndex: 'itemPrice',
    key: 'itemPrice'
  },
  {
    title: 'Restock Amount',
    dataIndex: 'itemQuantity',
    key: 'itemQuantity'
  },
  {
    title: 'Consumption',
    dataIndex: 'consumption',
    key: 'consumption'
  },
  {
    title: 'In Stock',
    render: (_, { itemQuantity, consumption }) => itemQuantity - consumption
  }
]

const InventoryForm = ({ location: { state: { item } } }) => {
  const [ stocks, setStocks ] = useState([])
  
  useEffect(() => {
    let totalConsumption = item.inventoryItemConsumptions.reduce((acc, consumption) => acc + consumption.consumptionAmount, 0)
    setStocks((item.inventoryItemRestocks.map((restock, i) => {
      const res = Object.assign({}, restock)
      res.key = i
      if (restock.itemQuantity > totalConsumption) {
        res.consumption = totalConsumption
        totalConsumption = 0
      }
      else {
        res.consumption = restock.itemQuantity
        totalConsumption -= restock.itemQuantity
      }
      return res
    })))
  }, [item])

  console.log(stocks)

  return <div>
    <Row gutter={24} className="mb-3">
      <Col xs={24} md={12} lg={8}>
        <b>Item Name:</b> { item.itemName }
      </Col>
      <Col xs={24} md={12} lg={8}>
        <b>Item Code:</b> { item.itemCode }
      </Col>
      <Col xs={24} md={12} lg={8}>
        <b>Item Specification:</b> { item.itemSpec }
      </Col>
    </Row>
    <Table
      columns={columns}
      dataSource={stocks}
      size="small"
      pagination={false}
    />
  </div>
}

export default InventoryForm