import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createCustomer } from '../../api/customerService';

const NewCustomerForm = () => {
  const [customer, setCustomer] = useState({
    firstName: '',
    lastName: '',
    email: '',
    contactNumber: '',
    address: '',
  });

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log(customer);
      const response = await createCustomer(customer);
      console.log(response);
      navigate(`/sale-details/${response.data.customerId}`); // Redirect to sale details with customer ID
    } catch (error) {
      console.error('Error creating customer:', error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setCustomer({
      ...customer,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>New Customer</h2>

      <label>
        First Name:
        <input
          type="text"
          name="firstName"
          value={customer.firstName}
          onChange={handleInputChange}
          required
        />
      </label>

      <label>
        Last Name:
        <input
          type="text"
          name="lastName"
          value={customer.lastName}
          onChange={handleInputChange}
          required
        />
      </label>

      <label>
        Email:
        <input
          type="email"
          name="email"
          value={customer.email}
          onChange={handleInputChange}
          required
        />
      </label>

      <label>
        Contact Number:
        <input
          type="text"
          name="contactNumber"
          value={customer.contact_number}
          onChange={handleInputChange}
          required
        />
      </label>

      <label>
        Address:
        <input
          type="text"
          name="address"
          value={customer.address}
          onChange={handleInputChange}
          required
        />
      </label>

      <button type="submit">Next</button>
    </form>
  );
};

export default NewCustomerForm;
