package com.njit.cs631.final_project.controller;

import com.njit.cs631.final_project.dto.SalesDTO;
import com.njit.cs631.final_project.entity.Customer;
import com.njit.cs631.final_project.entity.Sales;
import com.njit.cs631.final_project.entity.Vehicle;
import com.njit.cs631.final_project.service.CustomerService;
import com.njit.cs631.final_project.service.SalesService;
import com.njit.cs631.final_project.service.VehicleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.List;

@RestController
@RequestMapping("/api/sales")
public class SalesController {
    @Autowired
    private SalesService salesService;

    @Autowired
    private CustomerService customerService;

    @Autowired
    private VehicleService vehicleService;

    @PostMapping
    public ResponseEntity<Sales> recordSale(@RequestBody SalesDTO salesDTO) {
        // Retrieve the customer and vehicle based on IDs
        Customer customer = customerService.getCustomerById(salesDTO.getCustomerId());
        Vehicle vehicle = vehicleService.findByVin(salesDTO.getVin());

        // Convert DTO to Entity
        Sales sale = new Sales();
        sale.setCustomer(customer);
        sale.setVehicle(vehicle);
        sale.setSoldPrice(salesDTO.getSoldPrice());
        sale.setSaleDate(salesDTO.getSaleDate());

        //set vehicle as sold
        vehicle.setSoldStatus(true);
        vehicleService.saveVehicle(vehicle);
        return ResponseEntity.ok(salesService.recordSale(sale));
    }

    @GetMapping
    public ResponseEntity<List<Sales>> getSalesByDateRange(@RequestParam LocalDate startDate, @RequestParam LocalDate endDate) {
        return ResponseEntity.ok(salesService.getSalesByDateRange(startDate, endDate));
    }
}

