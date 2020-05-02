package com.shiros.inventory.repository;

import com.shiros.inventory.entity.RestockForm;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface RestockFormRepository extends CrudRepository<RestockForm, Long> {

    @Query("select i from RestockForm i")
    List<RestockForm> find(PageRequest pageable);

}
