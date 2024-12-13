import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { findCustomerByName } from '../../api/customerService';

const ReturningCustomerForm = () => {
  const [name, setName] = useState({ firstName: '', lastName: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      const response = await findCustomerByName(name.firstName, name.lastName);
      if (response.data) {
        navigate(`/sale-details/${response.data.id}`); // Redirect to sale details with customer ID
      } else {
        setError('Customer not found');
      }
    } catch (error) {
      console.error('Error finding customer:', error);
      setError('Error searching customer');
    }
  };

  return (
    <form onSubmit={handleSearch}>
      <h2>Returning Customer</h2>
      <label>
        First Name:{' '}
        <input
          type="text"
          value={name.firstName}
          onChange={(e) => setName({ ...name, firstName: e.target.value })}
        />
      </label>
      <label>
        Last Name:{' '}
        <input
          type="text"
          value={name.lastName}
          onChange={(e) => setName({ ...name, lastName: e.target.value })}
        />
      </label>
      <button type="submit">Search</button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </form>
  );
};

export default ReturningCustomerForm;
