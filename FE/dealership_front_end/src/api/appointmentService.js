import axios from 'axios';

const API_BASE = 'http://localhost:8080/api';

export const getAppointments = async () => {
  const response = await axios.get(`${API_BASE}/appointments`);
  return response.data;
};

export const createAppointment = async (appointment) => {
  const response = await axios.post(`${API_BASE}/appointments`, appointment);
  return response.data;
};

export const getServicePackages = async () => {
  const response = await axios.get(`${API_BASE}/service-packages`);
  return response.data;
};
