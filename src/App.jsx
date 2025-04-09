import React from 'react';
import { useState } from 'react'
import './App.css'
import Navbar from './assets/components/Navbar';
import Shop from './assets/components/shop/Shop';


function App() {

  return (
    <div className='bg-gray-50 min-h-screen'>
      <Navbar />
      <Shop />
 
    </div>
  );
};

export default App;
