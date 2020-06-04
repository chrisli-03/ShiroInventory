package com.shiros.inventory.entity;

import java.util.List;
import java.util.stream.Collectors;

public class InventoryItemImpl implements InventoryItem {

    private static final long serialVersionUID = 1L;

    private String itemName;
    private String itemCode;
    private String itemSpec;
    private Integer itemAvailable;
    List<InventoryItemRestock> inventoryItemRestocks;
    List<InventoryItemConsumption> inventoryItemConsumptions;

    public InventoryItemImpl(InventoryItem inventoryItem, List<InventoryItemRestock> inventoryItemRestocks, List<InventoryItemConsumption> inventoryItemConsumptions) {
        this.itemName = inventoryItem.getItemName();
        this.itemCode = inventoryItem.getItemCode();
        this.itemSpec = inventoryItem.getItemSpec();
        this.itemAvailable = inventoryItem.getItemAvailable();
        this.inventoryItemRestocks = inventoryItemRestocks.stream()
                .filter(restock -> restock.getItemCode().equals(inventoryItem.getItemCode()))
                .collect(Collectors.toList());
        this.inventoryItemConsumptions = inventoryItemConsumptions.stream()
                .filter(consumption -> consumption.getItemCode().equals(inventoryItem.getItemCode()))
                .collect(Collectors.toList());
    }

    @Override
    public String getItemName() {
        return itemName;
    }

    public void setItemName(String itemName) {
        this.itemName = itemName;
    }

    @Override
    public String getItemCode() {
        return itemCode;
    }

    public void setItemCode(String itemCode) {
        this.itemCode = itemCode;
    }

    @Override
    public String getItemSpec() {
        return itemSpec;
    }

    public void setItemSpec(String itemSpec) {
        this.itemSpec = itemSpec;
    }

    @Override
    public Integer getItemAvailable() {
        return itemAvailable;
    }

    public void setItemAvailable(Integer itemAvailable) {
        this.itemAvailable = itemAvailable;
    }

    public List<InventoryItemRestock> getInventoryItemRestocks() {
        return inventoryItemRestocks;
    }

    public void setInventoryItemRestocks(List<InventoryItemRestock> inventoryItemRestocks) {
        this.inventoryItemRestocks = inventoryItemRestocks;
    }

    public List<InventoryItemConsumption> getInventoryItemConsumptions() {
        return inventoryItemConsumptions;
    }

    public void setInventoryItemConsumptions(List<InventoryItemConsumption> inventoryItemConsumptions) {
        this.inventoryItemConsumptions = inventoryItemConsumptions;
    }
}
