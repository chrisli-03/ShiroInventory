import React from 'react'
import { Link } from 'react-router-dom'

export default [
  {
    title: 'Form ID',
    dataIndex: 'formID',
    key: 'formID',
    render: (formID, { id }) => { return <Link to={`/restock/${id}`}>{formID}</Link> }
  },
  {
    title: 'Supplier',
    dataIndex: 'supplier',
    key: 'supplier',
  },
  {
    title: 'Creation Date',
    dataIndex: 'creationDate',
    key: 'creationDate'
  }
]