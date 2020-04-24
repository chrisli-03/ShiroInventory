package com.shiros.inventory.controller;

import com.shiros.inventory.entity.InventoryItem;
import com.shiros.inventory.entity.RestockForm;
import com.shiros.inventory.entity.RestockFormDetail;
import com.shiros.inventory.service.InventoryItemService;
import com.shiros.inventory.service.RestockService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
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
        RestockForm restockForm = newRestockEntity.getRestockForm();
        List<RestockFormDetail> restockFormDetails = newRestockEntity.getDetail();
        List<String> itemCodes = restockFormDetails.stream().map(u -> u.getItemCode()).collect(Collectors.toList());
        List<InventoryItem> inventoryItems = inventoryItemService.findByItemCodes(itemCodes);
        Set<String> inventoryItemsSet = inventoryItems.stream().map(n -> n.getItemCode()).collect(Collectors.toSet());

        // loop restock detail rows
        for (RestockFormDetail restockFormDetail : restockFormDetails) {
            // if item is not an inventory item, add it to inventory item table
            if (!inventoryItemsSet.contains(restockFormDetail.getItemCode())) {
                InventoryItem inventoryItem = new InventoryItem(restockFormDetail.getItemName(), restockFormDetail.getItemCode());
                inventoryItemService.createInventoryItem(inventoryItem);
            }
            // add row to restock form detail table
            restockFormDetail.setRestockFormID(restockForm.getFormID());
            restockService.createRestockFormDetail(restockFormDetail);
        }

        // add restock form to restock form table
        return restockService.createRestockForm(restockForm);
    }

}
