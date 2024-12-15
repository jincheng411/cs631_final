import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { createSale } from '../../api/salesService';
import { getVehicleByVin } from '../../api/vehicleService';

const SaleDetailsForm = () => {
  const { customerId } = useParams(); // Get the customer ID from the route
  const [sale, setSale] = useState({
    customerId: customerId,
    vin: '',
    soldPrice: '',
    saleDate: '',
  });
  const [vehicle, setVehicle] = useState(null); // To store vehicle details after VIN lookup
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSale({ ...sale, [name]: value });
  };

  const handleVinLookup = async () => {
    try {
      setError(''); // Clear previous errors
      const response = await getVehicleByVin(sale.vin);
      console.log(response);
      if (response.status === 226) {
        setError('Vehicle is sold. Please check the VIN.');
        setVehicle(null);
      }
      setVehicle(response.data);
    } catch (err) {
      setError('Vehicle not found. Please check the VIN.');
      setVehicle(null);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const savedSale = await createSale(sale);
      navigate('/'); // Redirect to a sales summary or confirmation page
    } catch (err) {
      console.error('Error creating sale:', err);
    }
  };

  return (
    <div>
      <h2>Sale Details</h2>

      <form onSubmit={handleSubmit}>
        <label>
          VIN Number:
          <input
            type="text"
            name="vin"
            value={sale.vin}
            onChange={handleInputChange}
            required
          />
          <button type="button" onClick={handleVinLookup}>
            Look Up
          </button>
        </label>

        {error && <p style={{ color: 'red' }}>{error}</p>}

        {vehicle && (
          <div>
            <h3>Vehicle Details</h3>
            <p>Make: {vehicle.make}</p>
            <p>Model: {vehicle.model}</p>
            <p>Year: {vehicle.year}</p>
            <p>Cost Price: {vehicle.costPrice}</p>
          </div>
        )}

        <label>
          Sold Price:
          <input
            type="number"
            name="soldPrice"
            value={sale.soldPrice}
            onChange={handleInputChange}
            required
          />
        </label>

        <label>
          Sold Date:
          <input
            type="date"
            name="saleDate"
            value={sale.soldDate}
            onChange={handleInputChange}
            required
          />
        </label>

        <button type="submit">Complete Sale</button>
      </form>
    </div>
  );
};

export default SaleDetailsForm;
