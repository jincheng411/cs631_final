import React from 'react';
import { useNavigate } from 'react-router-dom';

const SaleOptions = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div>
        <h2>Sell a Car</h2>
        <button onClick={() => navigate('/new-customer')}>New Customer</button>
        <button onClick={() => navigate('/returning-customer')}>
          Returning Customer
        </button>
      </div>
      <div>
        <h2>Service appointment</h2>
        <button onClick={() => navigate('/service-appointments/new')}>
          Schedule an appointment
        </button>
        <button onClick={() => navigate('/service-appointments')}>
          View all appointments
        </button>
      </div>
    </div>
  );
};

export default SaleOptions;
