package com.shiros.inventory.repository;

import com.shiros.inventory.entity.RestockFormDetail;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RestockFormDetailRepository extends CrudRepository<RestockFormDetail, Long> {
}
