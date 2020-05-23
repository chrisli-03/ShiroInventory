import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Button } from 'antd'
import { getListSize, getList } from '~/store/list/actions'
import tableInfo from '~/data/table/tableInfo'
import './ConsumptionList.scss'

const TableLayout = React.lazy(() => import(/* webpackChunkName: "components/layouts/TableLayout" */ '~/components/layouts/TableLayout/TableLayout'))
const tableKey = tableInfo.consumption.key
const columns = tableInfo.consumption.columns

const ConsumptionList = ({ loading, size, dataSource, getConsumptionSize, getConsumption }) => {
  const onChange = (current, size) => {
    getConsumption(current, size)
  }

  useEffect(() => {
    getConsumptionSize()
  }, [getConsumptionSize])

  useEffect(() => {
    if (size > 1) getConsumption(1, 10)
  }, [size, getConsumption])

  return (
    <TableLayout
      loading={loading}
      size={size}
      dataSource={dataSource}
      columns={columns}
      buttons={
        <React.Fragment>
          <Link to='/consumption/new'><Button type="primary">New Consumption</Button></Link>
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
  getConsumptionSize: () => dispatch(getListSize(tableKey)),
  getConsumption: (page, size) => dispatch(getList(page, size, tableKey))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ConsumptionList)