package com.shiros.inventory.service;

import com.shiros.inventory.entity.InventoryItem;
import com.shiros.inventory.repository.InventoryItemRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class InventoryItemServiceImpl implements InventoryItemService {

    private InventoryItemRepository inventoryItemRepository;

    @Autowired
    public void setInjectedBean(InventoryItemRepository inventoryItemRepository) {
        this.inventoryItemRepository = inventoryItemRepository;
    }

    @Override
    public List<InventoryItem> getInventoryItems() {
        return inventoryItemRepository.getInventoryItems();
    }

}
