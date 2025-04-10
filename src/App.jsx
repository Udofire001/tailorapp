import React from 'react';
import { Routes, Route } from "react-router-dom"
import { useState } from 'react'
import './App.css'
import Dashboard from './assets/components/Dashboard';
import Navbar from './assets/components/Navbar';
import Shop from './assets/components/shop/Shop';
import Measurements from './assets/components/Dashboard';


function App() {

  return (
    <div className='bg-gray-50 min-h-screen'>
      <Navbar />

      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="measurements" element={<Measurements />} />
        <Route path='shop' element={<Shop /> } />
      </Routes>

    </div>
  );
};

export default App;
