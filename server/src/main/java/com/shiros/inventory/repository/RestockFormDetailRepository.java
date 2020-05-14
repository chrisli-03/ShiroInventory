package com.shiros.inventory.repository;

import com.shiros.inventory.entity.RestockFormDetail;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface RestockFormDetailRepository extends CrudRepository<RestockFormDetail, Long> {

    @Query("select i from RestockFormDetail i where i.restockForm = :id")
    List<RestockFormDetail> getRestockFormsByFormId(long id);

}
