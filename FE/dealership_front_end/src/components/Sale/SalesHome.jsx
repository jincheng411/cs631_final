import React from 'react';
import { useNavigate } from 'react-router-dom';

const SalesHome = () => {
  const navigate = useNavigate();

  const handleNewCustomer = () => navigate('/sales/new-customer');
  const handleReturningCustomer = () => navigate('/sales/returning-customer');

  return (
    <div>
      <h1>Car Sales</h1>
      <button onClick={handleNewCustomer}>New Customer</button>
      <button onClick={handleReturningCustomer}>Returning Customer</button>
    </div>
  );
};

export default SalesHome;
