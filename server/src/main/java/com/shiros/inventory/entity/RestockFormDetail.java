package com.shiros.inventory.entity;

import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import javax.persistence.*;

@Entity
@Table(name="tb_restock_detail")
@EntityListeners(AuditingEntityListener.class)
public class RestockFormDetail {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;

    @Column(name="item_code")
    private String code;

    @Column(name="item_spec")
    private String specification;

    @Column(name="item_price")
    private float price;

    @Column(name="item_quantity")
    private int quantity;

    @Column(name="restock_form_id")
    private String restockFormID;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getCode() {
        return code;
    }

    public void setCode(String code) {
        this.code = code;
    }

    public String getSpecification() {
        return specification;
    }

    public void setSpecification(String specification) {
        this.specification = specification;
    }

    public float getPrice() {
        return price;
    }

    public void setPrice(float price) {
        this.price = price;
    }

    public int getQuantity() {
        return quantity;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }

    public String getRestockFormID() {
        return restockFormID;
    }

    public void setRestockFormID(String restockFormID) {
        this.restockFormID = restockFormID;
    }
}
