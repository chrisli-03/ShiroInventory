package com.shiros.inventory.service;

import com.shiros.inventory.entity.Warehouse;

import java.util.List;
import java.util.Optional;

public interface WarehouseService {

    public Warehouse createWarehouse(Warehouse warehouse);
    public Optional<Warehouse> getWarehouse(String warehouseName);
    public List<Warehouse> getAllWarehouses();
    public Long getWarehouseCount();

}
