drop database if exists dealership;
create database dealership;
USE dealership;
drop table if exists customer;
drop table if exists vehicle;
drop table if exists sales;
drop table if exists service_appointment;
drop table if exists service_package;
drop table if exists service_detail;
drop table if exists parts;


CREATE TABLE customer (
    customer_id BIGINT PRIMARY KEY AUTO_INCREMENT,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    address VARCHAR(100),
    contact_number VARCHAR(15),
    email VARCHAR(50),
    is_returning_customer BOOLEAN DEFAULT FALSE
);

CREATE TABLE vehicle (
    vehicle_id BIGINT PRIMARY KEY AUTO_INCREMENT,
    make VARCHAR(30) NOT NULL,
    model VARCHAR(30) NOT NULL,
    year INT NOT NULL,
    vin VARCHAR(17) UNIQUE NOT NULL,
    price DECIMAL(10, 2) NOT NULL,
    cost_price DECIMAL(10, 2), 
    sold_status BOOLEAN DEFAULT FALSE
);

CREATE TABLE salesperson (
    salesperson_id BIGINT PRIMARY KEY AUTO_INCREMENT,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    contact_number VARCHAR(15)
);

CREATE TABLE sales (
    sale_id BIGINT PRIMARY KEY AUTO_INCREMENT,
    customer_id BIGINT,
    vehicle_id BIGINT,
    sold_price DECIMAL(10, 2) NOT NULL,
    sale_date DATE NOT NULL,
    salesperson_id BIGINT,
    FOREIGN KEY (customer_id) REFERENCES customer(customer_id),
    FOREIGN KEY (vehicle_id) REFERENCES vehicle(vehicle_id),
    FOREIGN KEY (salesperson_id) REFERENCES salesperson(salesperson_id)
);

CREATE TABLE servicePackage (
    PackageID INT PRIMARY KEY AUTO_INCREMENT,
    PackageName VARCHAR(50) NOT NULL,
    CarAge INT NOT NULL,
    LaborCost DECIMAL(10, 2),
    Description TEXT
);

CREATE TABLE serviceAppointment (
    AppointmentID INT PRIMARY KEY AUTO_INCREMENT,
    CustomerID BIGINT,
    VehicleID BIGINT,
    ScheduledTime DATETIME NOT NULL,
    PackageID INT,
    EstimatedTime INT,
    AppointmentStatus VARCHAR(20) DEFAULT 'scheduled',
    FOREIGN KEY (CustomerID) REFERENCES customer(customer_id),
    FOREIGN KEY (VehicleID) REFERENCES vehicle(vehicle_id),
    FOREIGN KEY (PackageID) REFERENCES servicePackage(PackageID)
);

CREATE TABLE service_detail (
    service_id INT PRIMARY KEY AUTO_INCREMENT,
    appointment_id INT,
    arrival_time DATETIME NOT NULL,
    pick_up_time DATETIME,  
    service_performed TEXT,
    parts_used TEXT,
    labor_hours DECIMAL(4, 2),  
    total_cost DECIMAL(10, 2),
    FOREIGN KEY (appointment_id) REFERENCES service_appointment(appointment_id)
);

CREATE TABLE parts (
    PartID INT PRIMARY KEY AUTO_INCREMENT,
    PartName VARCHAR(50) NOT NULL,
    Price DECIMAL(10, 2) NOT NULL,
    StockQuantity INT NOT NULL
);
