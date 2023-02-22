import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//styling files
import './styles/App.scss'

//components
import CustomNavigator from './components/Header';
import HomePage from './components/Home';
import CustomFooter from './components/Footer';
import ContactPage from './components/Contact';
import ServicePage from './components/Services';

//media queries must be imported at last.
import './styles/mediaquery.scss'

function App() {
  return (
    <Router>
      <CustomNavigator />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/service" element={<ServicePage />} />
      </Routes>
      <CustomFooter />
    </Router>
  );
}
export default App;
