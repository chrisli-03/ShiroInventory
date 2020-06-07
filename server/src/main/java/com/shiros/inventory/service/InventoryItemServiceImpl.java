package com.shiros.inventory.service;

import com.shiros.inventory.entity.InventoryItem;
import com.shiros.inventory.entity.InventoryItemConsumption;
import com.shiros.inventory.entity.InventoryItemImpl;
import com.shiros.inventory.entity.InventoryItemRestock;
import com.shiros.inventory.repository.InventoryItemRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class InventoryItemServiceImpl implements InventoryItemService {

    private InventoryItemRepository inventoryItemRepository;

    @Autowired
    public void setInjectedBean(InventoryItemRepository inventoryItemRepository) {
        this.inventoryItemRepository = inventoryItemRepository;
    }

    @Override
    public List<InventoryItemImpl> getInventoryItems() {
        List<InventoryItem> inventoryItems = inventoryItemRepository.getInventoryItems();
        List<InventoryItemRestock> inventoryItemRestocks = inventoryItemRepository.getInventoryItemRestocks();
        List<InventoryItemConsumption> inventoryItemConsumptions = inventoryItemRepository.getInventoryItemConsumptions();
        List<InventoryItemImpl> inventory = inventoryItems.stream()
                .map(inventoryItem -> new InventoryItemImpl(inventoryItem, inventoryItemRestocks, inventoryItemConsumptions))
                .collect(Collectors.toList());
        return inventory;
    }

    @Override
    public Long getInventoryItemCount() {
        return inventoryItemRepository.countInventoryItem();
    }

}
