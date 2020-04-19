package com.shiros.inventory.service;

import com.shiros.inventory.entity.RestockForm;
import com.shiros.inventory.entity.RestockFormDetail;

public interface RestockService {

    public RestockForm createRestockForm(RestockForm restockForm);
    public RestockFormDetail createRestockFormDetail(RestockFormDetail restockFormDetail);

}
