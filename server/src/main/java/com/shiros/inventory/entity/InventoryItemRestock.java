package com.shiros.inventory.entity;

import java.util.Date;

public interface InventoryItemRestock {

    public String getItemCode();
    public float getItemPrice();
    public int getItemQuantity();
    public Date getCreationDate();

}
