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
    private String itemCode;

    @Column(name="consumption_amount")
    private Long consumptionAmount;

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

    public String getItemCode() {
        return itemCode;
    }

    public void setItemCode(String itemCode) {
        this.itemCode = itemCode;
    }

    public Long getConsumptionAmount() {
        return consumptionAmount;
    }

    public void setConsumptionAmount(Long consumptionAmount) {
        this.consumptionAmount = consumptionAmount;
    }

    public ConsumptionForm getConsumptionForm() {
        return consumptionForm;
    }

    public void setConsumptionForm(ConsumptionForm consumptionForm) {
        this.consumptionForm = consumptionForm;
    }
}
