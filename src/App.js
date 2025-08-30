// App.js
import 'boxicons/css/boxicons.min.css';
import Contact from "./components/Contact";
import Footer from './components/Footer';
import Courses from './components/Courses';
import About from './components/About';
import Home from './components/Home';
import Navbar from './components/Navbar';
import React from "react";
import ScrollToTop from './components/ScrollToTop'
import EnvatorMarket from './components/EnvatoMarket'


import { BrowserRouter as Rouer, Routes, Route } from "react-router-dom";
import './App.css';

function App() {
  return (
    <>
      <EnvatorMarket />  
      <Navbar />         
      <div className="ContentAllPage">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      <ScrollToTop />
      <Footer />
  </>

  );
}

export default App;
