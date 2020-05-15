package com.shiros.inventory.service;

import com.shiros.inventory.entity.Supplier;

import java.util.List;
import java.util.Optional;

public interface SupplierService {

    public Supplier createSupplier(Supplier supplier);
    public Supplier updateSupplier(Supplier supplier);
    public Supplier getSupplierById(Long id);
    public List<Supplier> getAllSuppliers();
    public List<Supplier> getSuppliers(int page, int size);
    public Long getSupplierCount();

}
