package com.shiros.inventory.service;

import com.shiros.inventory.entity.ConsumptionForm;
import com.shiros.inventory.exception.ResourceNotFoundException;
import com.shiros.inventory.repository.ConsumptionFormRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ConsumptionServiceImpl implements ConsumptionService {

    private ConsumptionFormRepository consumptionFormRepository;

    @Autowired
    public void setInjectedBean(ConsumptionFormRepository consumptionFormRepository) {
        this.consumptionFormRepository = consumptionFormRepository;
    }

    @Override
    public ConsumptionForm createConsumptionForm(ConsumptionForm consumptionForm) {
        return consumptionFormRepository.save(consumptionForm);
    }

    @Override
    public ConsumptionForm updateConsumptionForm(ConsumptionForm consumptionForm) {
        return consumptionFormRepository.save(consumptionForm);
    }

    @Override
    public Long getConsumptionFormCount() {
        return consumptionFormRepository.count();
    }

    @Override
    public List<ConsumptionForm> getConsumptionForms(int page, int size) {
        return consumptionFormRepository.find(PageRequest.of(page-1, size));
    }

    @Override
    public ConsumptionForm getConsumptionFormById(long id) {
        Optional<ConsumptionForm> consumptionForm = consumptionFormRepository.findById(id);
        if (!consumptionForm.isPresent()) {
            throw new ResourceNotFoundException("restock form", "id", id);
        }
        return consumptionForm.get();
    }
}
