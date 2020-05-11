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
    @RequestMapping(value = "/warehouse", method = RequestMethod.POST)
    public Warehouse createWarehouse(@RequestBody Warehouse warehouse) {
        return warehouseService.createWarehouse(warehouse);
    }

    @Transactional
    @RequestMapping(value = "/warehouse/{id}", method = RequestMethod.GET)
    public Warehouse getWarehouseById(@PathVariable("id") Long id) {
        return warehouseService.getWarehouseById(id);
    }

    @Transactional
    @RequestMapping(value = "/warehouse", method = RequestMethod.GET)
    public List<Warehouse> getWarehouses(@RequestParam(required = false) Integer page, @RequestParam(required = false) Integer size) {
        if (page == null || size == null) {
            return warehouseService.getAllWarehouses();
        }
        return warehouseService.getWarehouses(page, size);
    }

    @Transactional
    @RequestMapping(value = "/warehouse_count", method = RequestMethod.GET)
    public Long getWarehouseCount() {
        return warehouseService.getWarehouseCount();
    }

}
