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

    private String itemName;

    @Column(name="item_code")
    private String itemCode;

    @Column(name="item_spec")
    private String itemSpec;

    @Column(name="item_price")
    private float itemPrice;

    @Column(name="item_quantity")
    private int itemQuantity;

    @Column(name="restock_form_id")
    private String restockFormID;

    public String getItemName() {
        return itemName;
    }

    public void setItemName(String itemName) {
        this.itemName = itemName;
    }

    public String getItemCode() {
        return itemCode;
    }

    public void setItemCode(String itemCode) {
        this.itemCode = itemCode;
    }

    public String getItemSpec() {
        return itemSpec;
    }

    public void setItemSpec(String itemSpec) {
        this.itemSpec = itemSpec;
    }

    public float getItemPrice() {
        return itemPrice;
    }

    public void setItemPrice(float itemPrice) {
        this.itemPrice = itemPrice;
    }

    public int getItemQuantity() {
        return itemQuantity;
    }

    public void setItemQuantity(int itemQuantity) {
        this.itemQuantity = itemQuantity;
    }

    public String getRestockFormID() {
        return restockFormID;
    }

    public void setRestockFormID(String restockFormID) {
        this.restockFormID = restockFormID;
    }
}
