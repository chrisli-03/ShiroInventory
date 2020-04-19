package com.shiros.inventory.controller;

import com.shiros.inventory.entity.InventoryItem;
import com.shiros.inventory.entity.RestockForm;
import com.shiros.inventory.entity.RestockFormDetail;
import com.shiros.inventory.service.InventoryItemService;
import com.shiros.inventory.service.RestockService;
import org.springframework.beans.factory.annotation.Autowired;
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

    @RequestMapping(value = "/restock", method = RequestMethod.POST)
    public RestockForm createRestock(@RequestBody NewRestockEntity newRestockEntity) {
        RestockForm restockForm = newRestockEntity.getRestockForm();
        List<RestockFormDetail> restockFormDetails = newRestockEntity.getDetail();
        List<String> itemCodes = restockFormDetails.stream().map(u -> u.getCode()).collect(Collectors.toList());
        List<InventoryItem> inventoryItems = inventoryItemService.findByItemCodes(itemCodes);
        Set<String> inventoryItemsSet = inventoryItems.stream().map(n -> n.getCode()).collect(Collectors.toSet());
        for (RestockFormDetail restockFormDetail : restockFormDetails) {
            if (!inventoryItemsSet.contains(restockFormDetail.getCode())) {
                InventoryItem inventoryItem = new InventoryItem();
                inventoryItem.setName(restockFormDetail.getName());
                inventoryItem.setCode(restockFormDetail.getCode());
                inventoryItemService.createInventoryItem(inventoryItem);
            }
            restockFormDetail.setRestockFormID(restockForm.getFormID());
            restockService.createRestockFormDetail(restockFormDetail);
        }
        return restockService.createRestockForm(restockForm);
    }

}
