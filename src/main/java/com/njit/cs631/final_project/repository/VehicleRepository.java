package com.njit.cs631.final_project.repository;

import com.njit.cs631.final_project.entity.Vehicle;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface VehicleRepository extends JpaRepository<Vehicle, Long> {
    Vehicle findByVin(String vin);
}

