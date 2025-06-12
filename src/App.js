import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import About from './pages/about';
import Services from './pages/services';
import Contact from './pages/Contact';
import Signup from './pages/Signup';
import Login from './pages/login';
import PrivacyPolicy from "./pages/PrivacyPolicy";
import 'bootstrap/dist/css/bootstrap.min.css';
import Conditions from './pages/conditions';
import Refund from './pages/refund';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-and-conditions" element={<Conditions />} />
        <Route path="/refund-policy" element={<Refund />} />

      </Routes>
    </Router>
  );
}

export default App;
