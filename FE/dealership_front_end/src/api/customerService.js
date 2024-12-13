import axios from 'axios';

const API_BASE = 'http://localhost:8080/api/customers';

export const createCustomer = (customerData) =>
  axios.post(`${API_BASE}`, customerData);

export const findCustomerByName = (firstName, lastName) =>
  axios.get(`${API_BASE}/search`, { params: { firstName, lastName } });
