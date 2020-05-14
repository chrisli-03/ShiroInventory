package com.shiros.inventory.entity;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import javax.persistence.*;
import java.util.Date;
import java.util.List;

@Entity
@Table(name="tb_restock")
@EntityListeners(AuditingEntityListener.class)
public class RestockForm {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name="form_id")
    private String formID;

    @Column(name="supplier")
    private String supplier;

    @Column(name="creation_date")
    private Date creationDate;

    @JsonManagedReference
    @OneToMany(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    @JoinColumn(name = "restock_form")
    private List<RestockFormDetail> restockFormDetails;

    public RestockForm() {
        this.creationDate = new Date();
    }

    public RestockForm(String formID, String supplier) {
        this.formID = formID;
        this.supplier = supplier;
        this.creationDate = new Date();
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public List<RestockFormDetail> getRestockFormDetails() {
        return restockFormDetails;
    }

    public void setRestockFormDetails(List<RestockFormDetail> restockFormDetails) {
        this.restockFormDetails = restockFormDetails;
    }

    public String getFormID() {
        return formID;
    }

    public void setFormID(String formID) {
        this.formID = formID;
    }

    public String getSupplier() {
        return supplier;
    }

    public void setSupplier(String supplier) {
        this.supplier = supplier;
    }

    public Long getCreationDate() {
        return creationDate.getTime() / 1000;
    }

    public void setCreationDate(Date creationDate) {
        this.creationDate = creationDate;
    }

}
