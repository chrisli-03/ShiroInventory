import React from 'react'
import { Button, Pagination, Table } from 'antd'
import './Inventory.scss'

const dataSource = [
  {
    key: '1',
    name: 'Mike',
    age: 32,
    address: '10 Downing Street',
  },
  {
    key: '2',
    name: 'John',
    age: 42,
    address: '10 Downing Street',
  }
]

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  },
]

const Inventory = () => {
  const onChange = pageNumber => {
    console.log(pageNumber)
  }
  return (
    <div className="table-layout">
      <div className="table-layout-buttons">
        <Button type="primary">Primary</Button>
      </div>
      <Table dataSource={dataSource} columns={columns} size="small" scroll={{ y: 240 }} pagination={false} />
      <Pagination showQuickJumper defaultCurrent={1} total={dataSource.length} onChange={onChange} />
    </div>
  )
}

export default Inventory