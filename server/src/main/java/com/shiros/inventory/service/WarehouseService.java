package com.shiros.inventory.service;

import com.shiros.inventory.entity.Warehouse;

import java.util.List;
import java.util.Optional;

public interface WarehouseService {

    public Warehouse createWarehouse(Warehouse warehouse);
    public Warehouse getWarehouseById(Long id);
    public List<Warehouse> getAllWarehouses();
    public List<Warehouse> getWarehouses(int page, int size);
    public Long getWarehouseCount();

}
