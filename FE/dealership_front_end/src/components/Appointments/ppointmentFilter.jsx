import React, { useState } from 'react';

const AppointmentFilter = ({ onFilter }) => {
  const [date, setDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onFilter({ date });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Filter by Date:
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </label>
      <button type="submit">Filter</button>
    </form>
  );
};

export default AppointmentFilter;
