package com.shiros.inventory.entity;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import javax.persistence.*;
import java.util.Date;
import java.util.List;

@Entity
@Table(name="tb_consumption")
@EntityListeners(AuditingEntityListener.class)
public class ConsumptionForm {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name="form_id")
    private String formID;

    @Column(name="creation_date")
    private Date creationDate;

    @JsonManagedReference
    @OneToMany(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    @JoinColumn(name = "consumption_form")
    private List<ConsumptionFormDetail> consumptionFormDetails;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getFormID() {
        return formID;
    }

    public void setFormID(String formID) {
        this.formID = formID;
    }

    public Date getCreationDate() {
        return creationDate;
    }

    public void setCreationDate(Date creationDate) {
        this.creationDate = creationDate;
    }

    public List<ConsumptionFormDetail> getConsumptionFormDetails() {
        return consumptionFormDetails;
    }

    public void setConsumptionFormDetails(List<ConsumptionFormDetail> consumptionFormDetails) {
        this.consumptionFormDetails = consumptionFormDetails;
    }
}
