package com.shiros.inventory.repository;

import com.shiros.inventory.entity.InventoryItem;
import com.shiros.inventory.entity.RestockFormDetail;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface InventoryItemRepository extends CrudRepository<RestockFormDetail, Long> {

    @Query(
            "SELECT d.itemName AS itemName, d.itemCode AS itemCode, d.itemSpec AS itemSpec, SUM(d.itemQuantity) AS itemQuantity " +
            "FROM RestockFormDetail d " +
            "GROUP BY d.itemCode, d.itemSpec"
    )
    List<InventoryItem> getInventoryItems();

}
