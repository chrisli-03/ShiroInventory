package com.shiros.inventory.repository;

import com.shiros.inventory.entity.ConsumptionForm;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ConsumptionFormRepository extends CrudRepository<ConsumptionForm, Long> {

    @Query("select i from ConsumptionForm i")
    List<ConsumptionForm> find(PageRequest pageable);

}
