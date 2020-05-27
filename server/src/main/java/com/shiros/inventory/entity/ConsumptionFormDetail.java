package com.shiros.inventory.entity;

import com.fasterxml.jackson.annotation.JsonBackReference;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import javax.persistence.*;

@Entity
@Table(name="tb_consumption_detail")
@EntityListeners(AuditingEntityListener.class)
public class ConsumptionFormDetail {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name="item_code")
    private String itemName;

    @Column(name="consumption_amount")
    private Long warehouse;

    @JsonBackReference
    @ManyToOne
    @JoinColumn(name="consumption_form")
    private ConsumptionForm consumptionForm;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getItemName() {
        return itemName;
    }

    public void setItemName(String itemName) {
        this.itemName = itemName;
    }

    public Long getWarehouse() {
        return warehouse;
    }

    public void setWarehouse(Long warehouse) {
        this.warehouse = warehouse;
    }

    public ConsumptionForm getConsumptionForm() {
        return consumptionForm;
    }

    public void setConsumptionForm(ConsumptionForm consumptionForm) {
        this.consumptionForm = consumptionForm;
    }
}
