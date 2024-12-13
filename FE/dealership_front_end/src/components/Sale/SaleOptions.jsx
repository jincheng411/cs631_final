import React from 'react';
import { useNavigate } from 'react-router-dom';

const SaleOptions = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h2>Sell a Car</h2>
      <button onClick={() => navigate('/new-customer')}>New Customer</button>
      <button onClick={() => navigate('/returning-customer')}>
        Returning Customer
      </button>
    </div>
  );
};

export default SaleOptions;
