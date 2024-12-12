package com.njit.cs631.final_project.repository;

import com.njit.cs631.final_project.entity.Sales;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.time.LocalDate;
import java.util.List;

@Repository
public interface SalesRepository extends JpaRepository<Sales, Long> {
    @Query("SELECT s FROM Sales s WHERE s.saleDate BETWEEN :startDate AND :endDate")
    List<Sales> findSalesByDateRange(@Param("startDate") LocalDate startDate, @Param("endDate") LocalDate endDate);
}

