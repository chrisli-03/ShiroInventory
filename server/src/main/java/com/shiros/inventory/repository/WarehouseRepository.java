package com.shiros.inventory.repository;

import com.shiros.inventory.entity.Warehouse;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface WarehouseRepository extends CrudRepository<Warehouse, Long> {

    @Query("select i from Warehouse i")
    List<Warehouse> find(PageRequest pageable);

}
