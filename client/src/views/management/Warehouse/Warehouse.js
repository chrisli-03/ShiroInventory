import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { Button } from 'antd'
import { getListSize, getList } from '~/store/list/actions'
import tableInfo from '~/data/table/tableInfo'
import './Warehouse.scss'

const TableLayout = React.lazy(() => import(/* webpackChunkName: "components/layouts/TableLayout" */ '~/components/layouts/TableLayout/TableLayout'))
const tableKey = tableInfo.warehouse.key
const columns = tableInfo.warehouse.columns

const Warehouse = ({ loading, size, dataSource, getWarehouseSize, getWarehouse }) => {
  const onChange = (current, size) => {
    getWarehouse(current, size)
  }

  useEffect(() => {
    getWarehouseSize()
  }, [getWarehouseSize])

  useEffect(() => {
    if (size > 1) getWarehouse(1, 10)
  }, [size, getWarehouse])

  return (
    <TableLayout
      loading={loading}
      size={size}
      dataSource={dataSource}
      columns={columns}
      buttons={
        <React.Fragment>
          <Button type="primary">New Warehouse</Button>
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
  getWarehouseSize: () => dispatch(getListSize(tableKey)),
  getWarehouse: (page, size) => dispatch(getList(page, size, tableKey))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Warehouse)