drop database if exists dealership;
create database dealership;
drop table if exists Customer;
drop table if exists Vehicle;
drop table if exists Sales;
drop table if exists ServiceAppointment;
drop table if exists ServicePackage;
drop table if exists ServiceDetail;
drop table if exists Parts;
USE dealership;
CREATE TABLE Customer (
                          CustomerID INT PRIMARY KEY AUTO_INCREMENT,
                          FirstName VARCHAR(50) NOT NULL,
                          LastName VARCHAR(50) NOT NULL,
                          Address VARCHAR(100),
                          ContactNumber VARCHAR(15),
                          Email VARCHAR(50),
                          IsReturningCustomer BOOLEAN DEFAULT FALSE
);

CREATE TABLE Vehicle (
                         VehicleID INT PRIMARY KEY AUTO_INCREMENT,
                         Make VARCHAR(30) NOT NULL,
                         Model VARCHAR(30) NOT NULL,
                         Year INT NOT NULL,
                         VIN VARCHAR(17) UNIQUE NOT NULL,
                         Price DECIMAL(10, 2) NOT NULL,
                         CostPrice DECIMAL(10, 2),  -- New field to track cost price for profit calculations
                         SoldStatus BOOLEAN DEFAULT FALSE
);

CREATE TABLE Sales (
                       SaleID INT PRIMARY KEY AUTO_INCREMENT,
                       CustomerID INT,
                       VehicleID INT,  -- Updated foreign key
                       SoldPrice DECIMAL(10, 2) NOT NULL,
                       SaleDate DATE NOT NULL,
                       SalespersonID INT,
                       FOREIGN KEY (CustomerID) REFERENCES Customer(CustomerID),
                       FOREIGN KEY (VehicleID) REFERENCES Vehicle(VehicleID),  -- Updated reference
                       FOREIGN KEY (SalespersonID) REFERENCES Salesperson(SalespersonID)
);

CREATE TABLE Salesperson (
                             SalespersonID INT PRIMARY KEY AUTO_INCREMENT,
                             FirstName VARCHAR(50) NOT NULL,
                             LastName VARCHAR(50) NOT NULL,
                             ContactNumber VARCHAR(15)
);
CREATE TABLE ServiceAppointment (
                                    AppointmentID INT PRIMARY KEY AUTO_INCREMENT,
                                    CustomerID INT,
                                    VehicleID INT,  -- Updated foreign key
                                    ScheduledTime DATETIME NOT NULL,
                                    PackageID INT,
                                    EstimatedTime INT,  -- Estimated service time in minutes
                                    AppointmentStatus VARCHAR(20) DEFAULT 'scheduled',
                                    FOREIGN KEY (CustomerID) REFERENCES Customer(CustomerID),
                                    FOREIGN KEY (VehicleID) REFERENCES Vehicle(VehicleID),  -- Updated reference
                                    FOREIGN KEY (PackageID) REFERENCES ServicePackage(PackageID)
);

CREATE TABLE ServiceDetail (
                               ServiceID INT PRIMARY KEY AUTO_INCREMENT,
                               AppointmentID INT,
                               ArrivalTime DATETIME NOT NULL,
                               PickUpTime DATETIME,
                               ServicePerformed TEXT,
                               PartsUsed TEXT,
                               LaborHours DECIMAL(4, 2),
                               TotalCost DECIMAL(10, 2),
                               FOREIGN KEY (AppointmentID) REFERENCES ServiceAppointment(AppointmentID)
);
CREATE TABLE Parts (
                       PartID INT PRIMARY KEY AUTO_INCREMENT,
                       PartName VARCHAR(50) NOT NULL,
                       Price DECIMAL(10, 2) NOT NULL,
                       StockQuantity INT NOT NULL
);

