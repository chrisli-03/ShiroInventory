package com.shiros.inventory.service;

import com.shiros.inventory.entity.RestockForm;
import com.shiros.inventory.repository.RestockFormDetailRepository;
import com.shiros.inventory.repository.RestockFormRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class RestockServiceImpl implements RestockService {

    private RestockFormRepository restockFormRepository;
    private RestockFormDetailRepository restockFormDetailRepository;

    @Autowired
    public void setInjectedBean(
            RestockFormRepository restockFormRepository,
            RestockFormDetailRepository restockFormDetailRepository) {
        this.restockFormRepository = restockFormRepository;
        this.restockFormDetailRepository = restockFormDetailRepository;
    }

    @Override
    public RestockForm createRestockForm(RestockForm restockForm) {
        return restockFormRepository.save(restockForm);
    }

}
