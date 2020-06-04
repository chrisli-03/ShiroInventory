package com.shiros.inventory.entity;

import java.util.Date;

public interface InventoryItemConsumption {

    public String getItemCode();
    public int getConsumptionAmount();
    public Date getCreationDate();

}
