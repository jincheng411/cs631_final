package com.njit.cs631.final_project.controller;

import com.njit.cs631.final_project.validation.DataValidator;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/validate")
public class ValidationController {

    @Autowired
    private DataValidator dataValidator;

    @GetMapping
    public String triggerValidation() {
        dataValidator.validateData();
        return "Data validation triggered. Check logs for details.";
    }
}
