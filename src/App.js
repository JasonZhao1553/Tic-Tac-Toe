// Import necessary React modules
import React, { useState } from 'react';
import {BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import Play from './pages/Play'
import './index.css'

// Functional Component representing your Tic Tac Toe app
export default function App(){
  // Function to toggle the display of the modal container
  return (
  <div>
     <BrowserRouter>
        <Routes>
          <Route index element={<Home />} /> 
          <Route path = "/home" index element={<Home />} />
          <Route path = "/play" index element={<Play />} />
        </Routes>
     </BrowserRouter>
  </div>
  )
};

