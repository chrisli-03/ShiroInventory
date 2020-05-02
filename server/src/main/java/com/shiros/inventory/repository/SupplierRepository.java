package com.shiros.inventory.repository;

import com.shiros.inventory.entity.Supplier;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface SupplierRepository extends CrudRepository<Supplier, Long> {

    @Query("select i from Supplier i")
    List<Supplier> find(PageRequest pageable);

}
