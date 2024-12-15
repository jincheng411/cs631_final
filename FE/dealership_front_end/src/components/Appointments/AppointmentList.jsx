import React, { useState, useEffect } from 'react';
import { getAppointments } from '../../services/appointmentService';
import AppointmentFilter from './AppointmentFilter';

const AppointmentList = () => {
  const [appointments, setAppointments] = useState([]);
  const [filteredAppointments, setFilteredAppointments] = useState([]);

  useEffect(() => {
    async function fetchAppointments() {
      const data = await getAppointments();
      setAppointments(data);
      setFilteredAppointments(data);
    }
    fetchAppointments();
  }, []);

  const handleFilter = (criteria) => {
    const filtered = appointments.filter((appointment) =>
      appointment.date.includes(criteria.date)
    );
    setFilteredAppointments(filtered);
  };

  return (
    <div>
      <h2>Upcoming Car Service Appointments</h2>
      <AppointmentFilter onFilter={handleFilter} />
      <ul>
        {filteredAppointments.map((appointment) => (
          <li key={appointment.id}>
            <strong>{appointment.customerName}</strong> - {appointment.date} -{' '}
            {appointment.vehicleVin}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AppointmentList;
