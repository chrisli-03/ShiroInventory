import inventoryTableColumns from './tableColumns/inventory'
import restockTableColumns from './tableColumns/restock'
import consumptionTableColumns from './tableColumns/consumption'
import warehouseTableColumns from './tableColumns/warehouse'
import supplierTableColumns from './tableColumns/supplier'

export default {
  inventory: {
    key: 'inventory',
    columns: inventoryTableColumns
  },
  restock: {
    key: 'restock',
    columns: restockTableColumns
  },
  consumption: {
    key: 'consumption',
    columns: consumptionTableColumns
  },
  warehouse: {
    key: 'warehouse',
    columns: warehouseTableColumns
  },
  supplier: {
    key: 'supplier',
    columns: supplierTableColumns
  }
}