package com.shiros.inventory.repository;

import com.shiros.inventory.entity.InventoryItem;
import com.shiros.inventory.entity.InventoryItemConsumption;
import com.shiros.inventory.entity.InventoryItemRestock;
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

    @Query( value = "SELECT d.item_code AS itemCode, d.item_price AS itemPrice, d.item_quantity AS itemQuantity, f.creation_date AS creationDate " +
                    "FROM tb_restock_detail d " +
                    "LEFT JOIN tb_restock f " +
                    "ON d.restock_form = f.id",
            nativeQuery = true
    )
    List<InventoryItemRestock> getInventoryItemRestocks();

    @Query( value = "SELECT d.item_code AS itemCode, d.consumption_amount AS consumptionAmount, f.creation_date AS creationDate " +
            "FROM tb_consumption_detail d " +
            "LEFT JOIN tb_consumption f " +
            "ON d.consumption_form = f.id",
            nativeQuery = true
    )
    List<InventoryItemConsumption> getInventoryItemConsumptions();

}
