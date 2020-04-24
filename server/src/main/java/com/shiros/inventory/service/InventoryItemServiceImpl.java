package com.shiros.inventory.service;

import com.shiros.inventory.entity.InventoryItem;
import com.shiros.inventory.exception.ResourceNotFoundException;
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
    public InventoryItem createInventoryItem(InventoryItem inventoryItem) {
        return inventoryItemRepository.save(inventoryItem);
    }

    @Override
    public List<InventoryItem> findByItemCodes(List<String> itemCodes) {
        return inventoryItemRepository.findByItemCodes(itemCodes);
    }

}
