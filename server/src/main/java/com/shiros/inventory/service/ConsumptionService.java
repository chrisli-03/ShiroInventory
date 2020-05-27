package com.shiros.inventory.service;

import com.shiros.inventory.entity.ConsumptionForm;

import java.util.List;

public interface ConsumptionService {

    public ConsumptionForm createConsumptionForm(ConsumptionForm consumptionForm);
    public ConsumptionForm updateConsumptionForm(ConsumptionForm consumptionForm);
    public Long getConsumptionFormCount();
    public List<ConsumptionForm> getConsumptionForms(int page, int size);
    public ConsumptionForm getConsumptionFormById(long id);

}
