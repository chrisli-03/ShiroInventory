package com.shiros.inventory.repository;

import com.shiros.inventory.entity.RestockForm;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RestockFormRepository extends CrudRepository<RestockForm, Long> {
}
