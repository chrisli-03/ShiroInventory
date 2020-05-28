import { Link } from 'react-router-dom'
import React from 'react'

export default [
  {
    title: 'Form ID',
    dataIndex: 'formID',
    key: 'formID',
    render: (formID, { id }) => { return <Link to={`/consumption/${id}`}>{formID}</Link> }
  },
  {
    title: 'Creation Date',
    dataIndex: 'creationDate',
    key: 'creationDate'
  }
]