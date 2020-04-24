package com.shiros.inventory.entity;

import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import javax.persistence.*;

@Entity
@Table(name="tb_warehouse")
@EntityListeners(AuditingEntityListener.class)
public class Warehouse {

    private static final long serialVersionUID = 1L;

    @Id
    @Column(name="warehouse_name")
    private String warehouseName;

    @Column(name="warehouse_address")
    private String warehouseAddress;

    public String getWarehouseName() {
        return warehouseName;
    }

    public void setWarehouseName(String warehouseName) {
        this.warehouseName = warehouseName;
    }

    public String getWarehouseAddress() {
        return warehouseAddress;
    }

    public void setWarehouseAddress(String warehouseAddress) {
        this.warehouseAddress = warehouseAddress;
    }

}
