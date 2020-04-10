import React from 'react'
import { Button, Pagination, Table } from 'antd'
import TableLayout from '~/components/layouts/TableLayout/TableLayout'
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

for (let i = 0; i < 100; i++) {
  dataSource.push({
    key: '2',
    name: 'John',
    age: 42,
    address: '10 Downing Street',
  })
}

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

  const onShowSizeChange = (current, size) => {
    console.log(current, size)
  }

  return (
    <TableLayout
      dataSource={dataSource}
      columns={columns}
      buttons={
        <React.Fragment>
          <Button type="primary">Primary</Button>
          <Button type="default">Default</Button>
        </React.Fragment>
      }
      onChange={onChange}
      onShowSizeChange={onShowSizeChange}
    />
  )
}

export default Inventory