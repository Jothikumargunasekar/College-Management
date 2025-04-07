import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import Careers from './components/Careers';
import FAQ from './components/FAQ';
import Portal from './components/Portal';
import Contact from './components/ContactUs';
import PrivacyPolicy from './components/PrivacyPolicy';
import Terms from './components/Terms';
import StudentLogin from './components/StudentLogin';
import StaffLogin from './components/StaffLogin'; // ✅ Import added

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutUs" element={<AboutUs />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/portal" element={<Portal />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/student" element={<StudentLogin />} />
        <Route path="/staff" element={<StaffLogin />} /> {/* ✅ Route added */}
      </Routes>
      <Footer />
    </>
  );
}

export default App;
