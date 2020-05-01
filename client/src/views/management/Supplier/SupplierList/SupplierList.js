import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { Button } from 'antd'
import { getListSize, getList } from '~/store/list/actions'
import tableInfo from '~/data/table/tableInfo'
import './SupplierList.scss'

const TableLayout = React.lazy(() => import(/* webpackChunkName: "components/layouts/TableLayout" */ '~/components/layouts/TableLayout/TableLayout'))
const tableKey = tableInfo.supplier.key
const columns = tableInfo.supplier.columns

const SupplierList = ({ loading, size, dataSource, getSupplierSize, getSupplier }) => {
  const history = useHistory()

  const onChange = (current, size) => {
    getSupplier(current, size)
  }

  const redirectTo = path => {
    history.push(path)
  }

  useEffect(() => {
    getSupplierSize()
  }, [getSupplierSize])

  useEffect(() => {
    if (size > 0) getSupplier(1, 10)
  }, [size, getSupplier])

  return (
    <TableLayout
      loading={loading}
      size={size}
      dataSource={dataSource}
      columns={columns}
      buttons={
        <React.Fragment>
          <Button type="primary" onClick={() => redirectTo('/supplier/new')}>New Supplier</Button>
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
  getSupplierSize: () => dispatch(getListSize(tableKey)),
  getSupplier: (page, size) => dispatch(getList(page, size, tableKey))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SupplierList)