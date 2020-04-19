package com.shiros.inventory.controller;

import com.shiros.inventory.entity.RestockForm;
import com.shiros.inventory.entity.RestockFormDetail;
import com.shiros.inventory.service.RestockService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

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

    @Autowired
    public void setInjectedBean(RestockService restockService) {
        this.restockService = restockService;
    }

    @RequestMapping(value = "/restock", method = RequestMethod.POST)
    public RestockForm createRestock(@RequestBody NewRestockEntity newRestockEntity) {
        return restockService.createRestockForm(newRestockEntity.getRestockForm());
    }

}
