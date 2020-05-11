package com.shiros.inventory.service;

import com.shiros.inventory.entity.Supplier;
import com.shiros.inventory.exception.ResourceNotFoundException;
import com.shiros.inventory.repository.SupplierRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class SupplierServiceImpl implements SupplierService {

    SupplierRepository supplierRepository;
    @Autowired
    public void setInjectedBean(SupplierRepository supplierRepository) {
        this.supplierRepository = supplierRepository;
    }

    @Override
    public Supplier createSupplier(Supplier supplier) {
        return supplierRepository.save(supplier);
    }

    @Override
    public Supplier getSupplierById(Long id) {
        Optional<Supplier> supplier = supplierRepository.findById(id);
        if (!supplier.isPresent()) {
            throw new ResourceNotFoundException("supplier", "id", id);
        }
        return supplier.get();
    }

    @Override
    public List<Supplier> getAllSuppliers() {
        return (List<Supplier>) supplierRepository.findAll();
    }

    @Override
    public List<Supplier> getSuppliers(int page, int size) {
        return (List<Supplier>) supplierRepository.find(PageRequest.of(page-1, size));
    }

    @Override
    public Long getSupplierCount() {
        return supplierRepository.count();
    }

}
