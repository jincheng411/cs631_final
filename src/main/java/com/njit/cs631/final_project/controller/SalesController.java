package com.njit.cs631.final_project.controller;

import com.njit.cs631.final_project.entity.Sales;
import com.njit.cs631.final_project.service.SalesService;
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

    @PostMapping
    public ResponseEntity<Sales> recordSale(@RequestBody Sales sale) {
        return ResponseEntity.ok(salesService.recordSale(sale));
    }

    @GetMapping
    public ResponseEntity<List<Sales>> getSalesByDateRange(@RequestParam LocalDate startDate, @RequestParam LocalDate endDate) {
        System.out.println("aaaaaa");
        System.out.println(startDate + " " + endDate);
        return ResponseEntity.ok(salesService.getSalesByDateRange(startDate, endDate));
    }
}

