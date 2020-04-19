package com.shiros.inventory.repository;

import com.shiros.inventory.entity.InventoryItem;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface InventoryItemRepository extends CrudRepository<InventoryItem, Long> {

    @Query("select i from InventoryItem i where i.code in :itemCodes")
    List<InventoryItem> findByItemCodes(List<String> itemCodes);

}
