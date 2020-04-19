package com.shiros.inventory.controller;

import com.shiros.inventory.entity.InventoryItem;
import com.shiros.inventory.service.InventoryItemService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class InventoryItemController {

    private InventoryItemService inventoryItemService;

    @Autowired
    public void setInjectedBean(InventoryItemService inventoryItemService) {
        this.inventoryItemService = inventoryItemService;
    }

}
