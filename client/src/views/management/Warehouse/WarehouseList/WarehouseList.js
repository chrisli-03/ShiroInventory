import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { Button } from 'antd'
import { getListSize, getList } from '~/store/list/actions'
import tableInfo from '~/data/table/tableInfo'
import './WarehouseList.scss'

const TableLayout = React.lazy(() => import(/* webpackChunkName: "components/layouts/TableLayout" */ '~/components/layouts/TableLayout/TableLayout'))
const tableKey = tableInfo.warehouse.key
const columns = tableInfo.warehouse.columns

const WarehouseList = ({ loading, size, dataSource, getWarehouseSize, getWarehouse }) => {
  const history = useHistory()

  const onChange = (current, size) => {
    getWarehouse(current, size)
  }

  const redirectTo = path => {
    history.push(path)
  }

  useEffect(() => {
    getWarehouseSize()
  }, [getWarehouseSize])

  useEffect(() => {
    if (size > 0) getWarehouse(1, 10)
  }, [size, getWarehouse])

  return (
    <TableLayout
      loading={loading}
      size={size}
      dataSource={dataSource}
      columns={columns}
      buttons={
        <React.Fragment>
          <Button type="primary" onClick={() => redirectTo('/warehouse/new')}>New Warehouse</Button>
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
)(WarehouseList)