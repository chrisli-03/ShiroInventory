package com.shiros.inventory.controller;

import com.shiros.inventory.entity.Warehouse;
import com.shiros.inventory.service.WarehouseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class WarehouseController {

    private WarehouseService warehouseService;

    @Autowired
    public void setInjectedBean(WarehouseService warehouseService) {
        this.warehouseService = warehouseService;
    }

    @RequestMapping(value = "/warehouse/{id}", method = RequestMethod.GET)
    public Warehouse getWarehouseById(@PathVariable("id") Long id) {
        return warehouseService.getWarehouseById(id);
    }

    @RequestMapping(value = "/warehouse", method = RequestMethod.GET)
    public List<Warehouse> getWarehouses(@RequestParam(required = false) Integer page, @RequestParam(required = false) Integer size) {
        if (page == null || size == null) {
            return warehouseService.getAllWarehouses();
        }
        return warehouseService.getWarehouses(page, size);
    }

    @RequestMapping(value = "/warehouse_count", method = RequestMethod.GET)
    public Long getWarehouseCount() {
        return warehouseService.getWarehouseCount();
    }

    @Transactional
    @RequestMapping(value = "/warehouse", method = RequestMethod.POST)
    public Warehouse createWarehouse(@RequestBody Warehouse warehouse) {
        return warehouseService.createWarehouse(warehouse);
    }

    @Transactional
    @RequestMapping(value = "/warehouse/{id}", method = RequestMethod.PUT)
    public Warehouse updateWarehouse(@PathVariable("id") Long id, @RequestBody Warehouse warehouse) {
        warehouse.setId(id);
        return warehouseService.updateWarehouse(warehouse);
    }

}
