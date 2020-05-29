package com.shiros.inventory.repository;

import com.shiros.inventory.entity.InventoryItem;
import com.shiros.inventory.entity.RestockFormDetail;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface InventoryItemRepository extends CrudRepository<RestockFormDetail, Long> {

    @Query( value = "SELECT r.item_name AS itemName, r.item_code AS itemCode, r.item_spec AS itemSpec, (SUM(r.item_quantity) - COALESCE(c.consumption_amount, 0)) AS itemAvailable " +
            "FROM tb_restock_detail r " +
            "LEFT JOIN " +
                "(SELECT item_code, SUM(consumption_amount) AS consumption_amount FROM tb_consumption_detail) c " +
            "ON r.item_code = c.item_code " +
            "GROUP BY r.item_code",
            nativeQuery = true
    )
    List<InventoryItem> getInventoryItems();

}
