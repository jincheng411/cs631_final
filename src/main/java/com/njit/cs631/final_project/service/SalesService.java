package com.njit.cs631.final_project.service;

import com.njit.cs631.final_project.entity.Sales;
import com.njit.cs631.final_project.repository.SalesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;

@Service
public class SalesService {
    @Autowired
    private SalesRepository salesRepository;

    public Sales recordSale(Sales sale) {
        return salesRepository.save(sale);
    }

    public List<Sales> getSalesByDateRange(LocalDate startDate, LocalDate endDate) {
        return salesRepository.findSalesByDateRange(startDate, endDate);
    }
}

