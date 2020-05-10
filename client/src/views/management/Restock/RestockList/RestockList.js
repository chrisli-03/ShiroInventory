import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Button } from 'antd'
import { getListSize, getList } from '~/store/list/actions'
import tableInfo from '~/data/table/tableInfo'
import './RestockList.scss'

const TableLayout = React.lazy(() => import(/* webpackChunkName: "components/layouts/TableLayout" */ '~/components/layouts/TableLayout/TableLayout'))
const tableKey = tableInfo.restock.key
const columns = tableInfo.restock.columns

const RestockList = ({ loading, size, dataSource, getRestockSize, getRestock }) => {
  const onChange = (current, size) => {
    getRestock(current, size)
  }

  useEffect(() => {
    getRestockSize()
  }, [getRestockSize])

  useEffect(() => {
    if (size > 0) getRestock(1, 10)
  }, [size, getRestock])

  return (
    <TableLayout
      loading={loading}
      size={size}
      dataSource={dataSource}
      columns={columns}
      buttons={
        <React.Fragment>
          <Link to='/restock/new'><Button type="primary">New Restock</Button></Link>
        </React.Fragment>
      }
      onChange={onChange}
      onShowSizeChange={onChange}
    />
  )
}

const mapStateToProps = state => ({
  loading: state.list[tableKey].loading,
  dataSource: state.list[tableKey].dataSource,
  size: state.list[tableKey].size
})

const mapDispatchToProps = dispatch => ({
  getRestockSize: () => dispatch(getListSize(tableKey)),
  getRestock: (page, size) => dispatch(getList(page, size, tableKey))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RestockList)