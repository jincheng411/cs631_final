import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SaleOptions from './components/Sale/SaleOptions';
import NewCustomerForm from './components/Sale/NewCustomerForm';
import ReturningCustomerForm from './components/Sale/ReturningCustomerForm';
import SaleDetailsForm from './components/Sale/SaleDetailsForm';
import AppointmentForm from './components/Appointments/AppointmentForm';
import AppointmentList from './components/Appointments/AppointmentList';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SaleOptions />} />
        <Route path="/new-customer" element={<NewCustomerForm />} />
        <Route path="/returning-customer" element={<ReturningCustomerForm />} />
        <Route path="/sale-details/:customerId" element={<SaleDetailsForm />} />
        <Route path="/service-appointments" element={<AppointmentList />} />
        <Route path="/service-appointments/new" element={<AppointmentForm />} />
      </Routes>
    </Router>
  );
};

export default App;
