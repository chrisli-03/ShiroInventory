package com.shiros.inventory.service;

import com.shiros.inventory.entity.InventoryItem;

import java.util.List;

public interface InventoryItemService {

    public InventoryItem createInventoryItem(InventoryItem inventoryItem);
    public List<InventoryItem> findByItemCodes(List<String> itemCodes);

}
