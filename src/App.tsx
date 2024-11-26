import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import InsurancePlans from './pages/InsurancePlans';
import Claims from './pages/Claims';
import Support from './pages/Support';
import PlanDetails from './pages/PlanDetails';

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/plans" element={<InsurancePlans />} />
          <Route path="/plans/:id" element={<PlanDetails />} />
          <Route path="/claims" element={<Claims />} />
          <Route path="/support" element={<Support />} />
        </Routes>
        <Toaster position="top-right" />
      </div>
    </Router>
  );
};

export default App;