import axios from 'axios';

const API_BASE_URL = 'http://localhost:8080/api';

export const getVehicleByVin = async (vin) => {
  return await axios.get(`${API_BASE_URL}/vehicles/vin/${vin}`);
};
