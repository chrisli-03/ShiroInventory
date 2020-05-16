package com.shiros.inventory.service;

import com.shiros.inventory.entity.RestockForm;
import com.shiros.inventory.exception.ResourceNotFoundException;
import com.shiros.inventory.repository.RestockFormRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class RestockServiceImpl implements RestockService {

    private RestockFormRepository restockFormRepository;

    @Autowired
    public void setInjectedBean(
            RestockFormRepository restockFormRepository) {
        this.restockFormRepository = restockFormRepository;
    }

    @Override
    public RestockForm createRestockForm(RestockForm restockForm) {
        return restockFormRepository.save(restockForm);
    }

    @Override
    public RestockForm updateRestockForm(RestockForm restockForm) {
        return restockFormRepository.save(restockForm);
    }

    @Override
    public Long getRestockCount() {
        return restockFormRepository.count();
    }

    @Override
    public List<RestockForm> getRestocks(int page, int size) {
        return restockFormRepository.find(PageRequest.of(page-1, size));
    }

    @Override
    public RestockForm getRestockFormById(long id) {
        Optional<RestockForm> restockForm = restockFormRepository.findById(id);
        if (!restockForm.isPresent()) {
            throw new ResourceNotFoundException("restock form", "id", id);
        }
        return restockForm.get();
    }

}
