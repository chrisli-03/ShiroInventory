import React, { createRef, forwardRef, useState, useEffect } from 'react'
import { Button, Pagination, Table } from 'antd'
import './TableLayout.scss'

const tableWrapper = createRef()

const TableWrapper = forwardRef((props, ref) => (
  <div className="table-layout-table" ref={ref}>
    { props.children }
  </div>
))

const TableLayout = ({ buttons, dataSource, columns, onChange, onShowSizeChange }) => {
  const [tableHeight, setTableHeight] = useState(0)

  useEffect(() => {
    setTableHeight(tableWrapper.current.clientHeight - 39)
    const resizeListener = () => {
      setTableHeight(tableWrapper.current.clientHeight - 39)
    };
    window.addEventListener('resize', resizeListener);

    return () => {
      window.removeEventListener('resize', resizeListener);
    }
  })

  return (
    <div className="table-layout">
      <div className="table-layout-buttons">
        {buttons}
      </div>
      <TableWrapper ref={tableWrapper}>
        <Table
          dataSource={dataSource}
          columns={columns}
          size="small"
          scroll={{ y: tableHeight }}
          pagination={false}
        />
      </TableWrapper>
      <Pagination
        className="table-layout-pagination"
        defaultCurrent={1}
        total={dataSource.length}
        onChange={onChange}
        onShowSizeChange={onShowSizeChange}
      />
    </div>
  )
}

export default TableLayout