package com.shiros.inventory.service;

import com.shiros.inventory.entity.RestockForm;
import com.shiros.inventory.entity.RestockFormDetail;

import java.util.List;

public interface RestockService {

    public RestockForm createRestockForm(RestockForm restockForm);
    public RestockFormDetail createRestockFormDetail(RestockFormDetail restockFormDetail);
    public Long getRestockCount();
    public List<RestockForm> getRestocks(int page, int size);
    public RestockForm getRestockFormById(long id);

}
