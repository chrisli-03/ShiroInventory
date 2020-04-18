package com.shiros.inventory.repository;

import com.shiros.inventory.entity.InventoryItem;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface InventoryItemRepository extends CrudRepository<InventoryItem, Long> {
}
