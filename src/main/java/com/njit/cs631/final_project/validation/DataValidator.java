package com.njit.cs631.final_project.validation;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DataValidator {

    @Autowired
    private JdbcTemplate jdbcTemplate;

    /**
     * Validates the data in the database.
     */
    public void validateData() {
        System.out.println("Starting data validation...");

        // Example validation: Check for customers with missing vehicles
        List<String> invalidCustomers = jdbcTemplate.queryForList(
                "SELECT customer_id FROM Customer c WHERE NOT EXISTS (SELECT 1 FROM Vehicle v WHERE v.customer_id = c.customer_id)",
                String.class);

        if (invalidCustomers.isEmpty()) {
            System.out.println("Validation Passed: All customers have associated vehicles.");
        } else {
            System.out.println("Validation Failed: Customers without vehicles -> " + invalidCustomers);
        }

        // Example validation: Check for vehicles with invalid sold prices
        List<String> invalidSales = jdbcTemplate.queryForList(
                "SELECT sale_id FROM Sales WHERE sold_price IS NULL OR sold_price <= 0",
                String.class);

        if (invalidSales.isEmpty()) {
            System.out.println("Validation Passed: All sales have valid prices.");
        } else {
            System.out.println("Validation Failed: Invalid sales -> " + invalidSales);
        }

        System.out.println("Data validation complete.");
    }
}
