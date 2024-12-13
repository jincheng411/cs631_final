package com.njit.cs631.final_project.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;
import java.time.LocalDate;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Data
public class Sales {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long saleId;

    @ManyToOne
    @JoinColumn(name = "customer_id", nullable = false)
    private Customer customer;

    @ManyToOne
    @JoinColumn(name = "vehicle_id", nullable = false)
    private Vehicle vehicle;

    public void setSoldPrice(BigDecimal soldPrice) {
        this.soldPrice = soldPrice;
    }

    private BigDecimal soldPrice;

    public void setSaleDate(LocalDate saleDate) {
        this.saleDate = saleDate;
    }

    private LocalDate saleDate;

    public void setCustomer(Customer customer) {
        this.customer = customer;
    }
    public void setVehicle(Vehicle vehicle) {
        this.vehicle = vehicle;
    }

}

