import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { Button } from 'antd'
import { getInventorySize, getInventory } from '~/store/inventory/actions'
import './Inventory.scss'

const TableLayout = React.lazy(() => import(/* webpackChunkName: "components/layouts/TableLayout" */ '~/components/layouts/TableLayout/TableLayout'))

const Inventory = ({ loading, size, columns, dataSource, getInventorySize, getInventory }) => {
  const onChange = (current, size) => {
    getInventory(current, size)
  }

  useEffect(() => {
    getInventorySize()
  }, [getInventorySize])

  useEffect(() => {
    if (size > 1) getInventory(1, 10)
  }, [size, getInventory])

  return (
    <TableLayout
      loading={loading}
      size={size}
      dataSource={dataSource}
      columns={columns}
      buttons={
        <React.Fragment>
          <Button type="primary">Primary</Button>
          <Button type="default">Default</Button>
        </React.Fragment>
      }
      onChange={onChange}
      onShowSizeChange={onChange}
    />
  )
}

const mapStateToProps = state => ({
  loading: state.inventory.loading,
  columns: state.inventory.columns,
  dataSource: state.inventory.dataSource,
  size: state.inventory.size
})

const mapDispatchToProps = dispatch => ({
  getInventorySize: () => dispatch(getInventorySize()),
  getInventory: (page, size) => dispatch(getInventory(page, size))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Inventory)