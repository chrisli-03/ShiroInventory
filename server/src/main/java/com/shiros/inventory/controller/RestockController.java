package com.shiros.inventory.controller;

import com.shiros.inventory.entity.InventoryItem;
import com.shiros.inventory.entity.RestockForm;
import com.shiros.inventory.entity.RestockFormDetail;
import com.shiros.inventory.service.InventoryItemService;
import com.shiros.inventory.service.RestockService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;
import java.util.Set;
import java.util.stream.Collectors;

class NewRestockEntity {

    private String formID;
    private String supplier;
    private List<RestockFormDetail> detail;

    public void setFormID(String formID) {
        this.formID = formID;
    }

    public void setSupplier(String supplier) {
        this.supplier = supplier;
    }

    public RestockForm getRestockForm() {
        return new RestockForm(this.formID, this.supplier);
    }

    public List<RestockFormDetail> getDetail() {
        return detail;
    }

    public void setDetail(List<RestockFormDetail> detail) {
        this.detail = detail;
    }
}

@RestController
public class RestockController {

    private RestockService restockService;
    private InventoryItemService inventoryItemService;

    @Autowired
    public void setInjectedBean(RestockService restockService) {
        this.restockService = restockService;
    }

    @Autowired
    public void setInjectedBean(InventoryItemService inventoryItemService) {
        this.inventoryItemService = inventoryItemService;
    }

    @Transactional
    @RequestMapping(value = "/restock", method = RequestMethod.POST)
    public RestockForm createRestock(@RequestBody NewRestockEntity newRestockEntity) {
        // required variables
        RestockForm restockForm = restockService.createRestockForm(newRestockEntity.getRestockForm());
        List<RestockFormDetail> restockFormDetails = newRestockEntity.getDetail();
        List<String> itemCodes = restockFormDetails.stream().map(u -> u.getItemCode()).collect(Collectors.toList());
        List<InventoryItem> inventoryItems = inventoryItemService.findByItemCodes(itemCodes);
        Map<String, InventoryItem> inventoryItemMap = inventoryItems.stream().collect(Collectors.toMap(InventoryItem::getItemCode, inventoryItem -> inventoryItem));

        // loop restock detail rows
        for (RestockFormDetail restockFormDetail : restockFormDetails) {
            // if item is not an inventory item, add it to inventory item table
            if (!inventoryItemMap.containsKey(restockFormDetail.getItemCode())) {
                InventoryItem inventoryItem = new InventoryItem(restockFormDetail.getItemName(), restockFormDetail.getItemCode());
                inventoryItemService.createInventoryItem(inventoryItem);
                restockFormDetail.setItem(inventoryItem.getId());
            } else {
                restockFormDetail.setItem(inventoryItemMap.get(restockFormDetail.getItemCode()).getId());
            }
            // add row to restock form detail table
            restockFormDetail.setRestockForm(restockForm.getId());
            restockService.createRestockFormDetail(restockFormDetail);
        }

        // add restock form to restock form table
        return restockForm;
    }

    @Transactional
    @RequestMapping(value = "/restock", method = RequestMethod.GET)
    public List<RestockForm> getRestocks(@RequestParam int page, @RequestParam int size) {
        return restockService.getRestocks(page, size);
    }

    @Transactional
    @RequestMapping(value = "/restock_count", method = RequestMethod.GET)
    public Long getRestockCount() {
        return restockService.getRestockCount();
    }

}
