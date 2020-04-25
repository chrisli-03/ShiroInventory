package com.shiros.inventory.service;

import com.shiros.inventory.entity.Warehouse;
import com.shiros.inventory.repository.WarehouseRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class WarehouseServiceImpl implements WarehouseService {

    private WarehouseRepository warehouseRepository;

    @Autowired
    public void setInjectedBean(WarehouseRepository warehouseRepository) {
        this.warehouseRepository = warehouseRepository;
    }

    @Override
    public Warehouse createWarehouse(Warehouse warehouse) {
        return warehouseRepository.save(warehouse);
    }

    @Override
    public Optional<Warehouse> getWarehouse(Long id) {
        return warehouseRepository.findById(id);
    }

    @Override
    public List<Warehouse> getAllWarehouses() {
        return (List<Warehouse>) warehouseRepository.findAll();
    }

    @Override
    public Long getWarehouseCount() {
        return warehouseRepository.count();
    }

}
