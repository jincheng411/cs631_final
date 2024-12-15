package com.njit.cs631.final_project.dto;
import lombok.Data;

import java.time.LocalDateTime;

@Data
public class AppointmentDTO {
    private Integer appointmentId;
    private LocalDateTime scheduledTime;
    private Integer estimatedTime;
    private String appointmentStatus;
    private String vin;
    private String firstName;
    private String lastName;
    private String packageName;

    public AppointmentDTO(Integer appointmentId, LocalDateTime scheduledTime, Integer estimatedTime,
                          String appointmentStatus, String vin,
                          String firstName, String lastName,
                          String packageName) {
        this.appointmentId = appointmentId;
        this.scheduledTime = scheduledTime;
        this.estimatedTime = estimatedTime;
        this.appointmentStatus = appointmentStatus;
        this.vin = vin;
        this.firstName = firstName;
        this.lastName = lastName;
        this.packageName = packageName;
    }
}
