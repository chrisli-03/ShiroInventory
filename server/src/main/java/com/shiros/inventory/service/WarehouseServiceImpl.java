package com.shiros.inventory.service;

import com.shiros.inventory.entity.Warehouse;
import com.shiros.inventory.exception.ResourceNotFoundException;
import com.shiros.inventory.repository.WarehouseRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
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
    public Warehouse getWarehouseById(Long id) {
        Optional<Warehouse> warehouse = warehouseRepository.findById(id);
        if (!warehouse.isPresent()) {
            throw new ResourceNotFoundException("warehouse", "id", id);
        }
        return warehouse.get();
    }

    @Override
    public List<Warehouse> getAllWarehouses() {
        return (List<Warehouse>) warehouseRepository.findAll();
    }

    @Override
    public List<Warehouse> getWarehouses(int page, int size) {
        return (List<Warehouse>) warehouseRepository.find(PageRequest.of(page-1, size));
    }

    @Override
    public Long getWarehouseCount() {
        return warehouseRepository.count();
    }

}
