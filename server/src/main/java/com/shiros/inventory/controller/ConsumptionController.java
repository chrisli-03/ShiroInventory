package com.shiros.inventory.controller;

import com.shiros.inventory.entity.ConsumptionForm;
import com.shiros.inventory.service.ConsumptionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class ConsumptionController {

    private ConsumptionService consumptionService;

    @Autowired
    public void setInjectionBean(ConsumptionService consumptionService) {
        this.consumptionService = consumptionService;
    }

    @RequestMapping(value = "/consumption", method = RequestMethod.GET)
    public List<ConsumptionForm> getConsumptionForms(@RequestParam int page, @RequestParam int size) {
        return consumptionService.getConsumptionForms(page, size);
    }

    @RequestMapping(value = "/consumption_count", method = RequestMethod.GET)
    public Long getConsumptionFormCount() {
        return consumptionService.getConsumptionFormCount();
    }

    @RequestMapping(value = "/consumption/{id}", method = RequestMethod.GET)
    public ConsumptionForm getConsumptionFormById(@PathVariable("id") long id) {
        return consumptionService.getConsumptionFormById(id);
    }

    @Transactional
    @RequestMapping(value = "/consumption", method = RequestMethod.POST)
    public ConsumptionForm createConsumptionForm(@RequestBody ConsumptionForm consumptionForm) {
        return consumptionService.createConsumptionForm(consumptionForm);
    }

    @Transactional
    @RequestMapping(value = "/consumption/{id}", method = RequestMethod.PUT)
    public ConsumptionForm updateRestock(@PathVariable("id") long id, @RequestBody ConsumptionForm consumptionForm) {
        consumptionForm.setId(id);
        return consumptionService.updateConsumptionForm(consumptionForm);
    }

}
