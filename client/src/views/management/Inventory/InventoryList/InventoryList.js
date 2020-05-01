import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { getListSize, getList } from '~/store/list/actions'
import tableInfo from '~/data/table/tableInfo'
import './InventoryList.scss'

const TableLayout = React.lazy(() => import(/* webpackChunkName: "components/layouts/TableLayout" */ '~/components/layouts/TableLayout/TableLayout'))
const tableKey = tableInfo.inventory.key
const columns = tableInfo.inventory.columns

const InventoryList = ({ loading, size, dataSource, getInventorySize, getInventory }) => {
  const onChange = (current, size) => {
    getInventory(current, size)
  }

  useEffect(() => {
    getInventorySize()
  }, [getInventorySize])

  useEffect(() => {
    if (size > 0) getInventory(1, 10)
  }, [size, getInventory])

  return (
    <TableLayout
      loading={loading}
      size={size}
      dataSource={dataSource}
      columns={columns}
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
  getInventorySize: () => dispatch(getListSize(tableKey)),
  getInventory: (page, size) => dispatch(getList(page, size, tableKey))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(InventoryList)