package com.shiros.inventory.controller;

import com.shiros.inventory.entity.Warehouse;
import com.shiros.inventory.exception.ResourceNotFoundException;
import com.shiros.inventory.service.WarehouseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
public class WarehouseController {

    private WarehouseService warehouseService;

    @Autowired
    public void setInjectedBean(WarehouseService warehouseService) {
        this.warehouseService = warehouseService;
    }

    @Transactional
    @RequestMapping(value = "/warehouse/{warehouse_name}", method = RequestMethod.POST)
    public Warehouse createWarehouse(@PathVariable("warehouse_name") String warehouseName, @RequestBody Warehouse warehouse) {
        warehouse.setWarehouseName(warehouseName);
        return warehouseService.createWarehouse(warehouse);
    }

    @Transactional
    @RequestMapping(value = "/warehouse/{warehouse_name}", method = RequestMethod.GET)
    public Optional<Warehouse> getWarehouse(@PathVariable("warehouse_name") String warehouseName) {
        Optional<Warehouse> warehouse = warehouseService.getWarehouse(warehouseName);
        if (!warehouse.isPresent()) {
            throw new ResourceNotFoundException("warehouse", "warehouse name", warehouseName);
        }
        return warehouseService.getWarehouse(warehouseName);
    }

    @Transactional
    @RequestMapping(value = "/warehouse", method = RequestMethod.GET)
    public List<Warehouse> getAllWarehouses() {
        return warehouseService.getAllWarehouses();
    }

    @Transactional
    @RequestMapping(value = "/warehouse_count", method = RequestMethod.GET)
    public Long getWarehouseCount() {
        return warehouseService.getWarehouseCount();
    }

}
