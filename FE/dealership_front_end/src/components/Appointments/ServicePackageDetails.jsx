import React, { useState, useEffect } from 'react';
import { getServicePackages } from '../../services/appointmentService';

const ServicePackageDetails = ({ onSelectPackage }) => {
  const [packages, setPackages] = useState([]);

  useEffect(() => {
    async function fetchPackages() {
      const data = await getServicePackages();
      setPackages(data);
    }
    fetchPackages();
  }, []);

  return (
    <div>
      <h3>Service Packages</h3>
      <ul>
        {packages.map((pkg) => (
          <li key={pkg.id}>
            <input
              type="radio"
              name="servicePackage"
              value={pkg.name}
              onChange={() => onSelectPackage(pkg.name)}
            />
            <strong>{pkg.name}</strong> - {pkg.description} - {pkg.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ServicePackageDetails;
