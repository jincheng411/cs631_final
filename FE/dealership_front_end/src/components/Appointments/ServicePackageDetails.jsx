import React, { useState } from 'react';

const ServicePackageDetails = ({ onSelectPackage }) => {
  // Hardcoded service package data
  const servicePackages = [
    {
      packageId: 1,
      packageName: '1-Year Service',
      carAge: 1,
      laborCost: 100,
      description: 'Includes oil change, tire rotation, and inspection.',
    },
    {
      packageId: 2,
      packageName: '2-Year Service',
      carAge: 2,
      laborCost: 200,
      description:
        'Includes 1-Year Service plus brake inspection and air filter replacement.',
    },
    {
      packageId: 3,
      packageName: '3-Year Service',
      carAge: 3,
      laborCost: 300,
      description:
        'Includes 2-Year Service plus battery check and coolant flush.',
    },
  ];

  const [selectedPackage, setSelectedPackage] = useState(null);

  const handleSelect = (pkg) => {
    setSelectedPackage(pkg.packageId);
    onSelectPackage(pkg.packageId); // Pass the selected package name to the parent
  };

  return (
    <div>
      <h3>Select a Service Package</h3>
      <ul>
        {servicePackages.map((pkg) => (
          <li key={pkg.packageId} style={{ marginBottom: '10px' }}>
            <div>
              <strong>{pkg.packageName}</strong> - ${pkg.laborCost}
            </div>
            <div>{pkg.description}</div>
            <button
              onClick={() => handleSelect(pkg)}
              style={{
                marginTop: '5px',
                padding: '5px 10px',
                backgroundColor:
                  selectedPackage === pkg.packageId ? 'green' : 'blue',
                color: 'white',
                border: 'none',
                cursor: 'pointer',
              }}
            >
              {selectedPackage === pkg.packageId ? 'Selected' : 'Select'}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ServicePackageDetails;
