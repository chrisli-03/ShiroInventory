package com.shiros.inventory.controller;

import com.shiros.inventory.entity.Supplier;
import com.shiros.inventory.exception.ResourceNotFoundException;
import com.shiros.inventory.service.SupplierService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
public class SupplierController {

    SupplierService supplierService;
    @Autowired
    public void setInjectionBean(SupplierService supplierService) {
        this.supplierService = supplierService;
    }

    @Transactional
    @RequestMapping(value = "/supplier", method = RequestMethod.POST)
    public Supplier createSupplier(@RequestBody Supplier supplier) {
        return supplierService.createSupplier(supplier);
    }

    @Transactional
    @RequestMapping(value = "/supplier/{id}", method = RequestMethod.GET)
    public Optional<Supplier> getSupplier(@PathVariable("id") Long id) {
        Optional<Supplier> supplier = supplierService.getSupplier(id);
        if (!supplier.isPresent()) {
            throw new ResourceNotFoundException("supplier", "id", id);
        }
        return supplier;
    }

    @Transactional
    @RequestMapping(value = "/supplier", method = RequestMethod.GET)
    public List<Supplier> getSupplier(@RequestParam int page, @RequestParam int size) {
        return supplierService.getSuppliers(page, size);
    }

    @Transactional
    @RequestMapping(value = "/supplier_count", method = RequestMethod.GET)
    public Long getSupplierCount() {
        return supplierService.getSupplierCount();
    }

}
