import React, { useState } from 'react';
import { createAppointment } from '../../services/appointmentService';
import ServicePackageDetails from './ServicePackageDetails';

const AppointmentForm = () => {
  const [customerName, setCustomerName] = useState('');
  const [vehicleVin, setVehicleVin] = useState('');
  const [date, setDate] = useState('');
  const [selectedPackage, setSelectedPackage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const appointment = {
      customerName,
      vehicleVin,
      date,
      servicePackage: selectedPackage,
    };
    await createAppointment(appointment);
    alert('Appointment Created');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Create New Appointment</h2>
      <label>
        Customer Name:
        <input
          type="text"
          value={customerName}
          onChange={(e) => setCustomerName(e.target.value)}
        />
      </label>
      <label>
        Vehicle VIN:
        <input
          type="text"
          value={vehicleVin}
          onChange={(e) => setVehicleVin(e.target.value)}
        />
      </label>
      <label>
        Date:
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </label>
      <ServicePackageDetails onSelectPackage={setSelectedPackage} />
      <button type="submit">Create Appointment</button>
    </form>
  );
};

export default AppointmentForm;
