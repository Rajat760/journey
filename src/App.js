import React from 'react';
import './App.css';

import Kerala from "./kerala.jsx"
import Home from "./Home.js"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Pondicherry from "./Pondicherry.jsx"
import Jaipur from "./Jaipur.jsx"
import Rishikesh from "./Rishikesh.jsx"
import Goa from "./Goa.jsx"
import Meghalaya from "./Meghalaya.jsx"



function App() {
  return (
    <div className="App">

      <Routes>

      <Route exact path="/" element={<Home/>} />
          <Route path="/kerala" element={<Kerala/>} />
          <Route path="/pondicherry" element={<Pondicherry/>} />
          <Route path="/jaipur" element={<Jaipur/>} />
          <Route path="/rishikesh" element={<Rishikesh/>} />
          <Route path="/goa" element={<Goa/>} />
          <Route path="/meghalaya" element={<Meghalaya/>} />
          
      </Routes>

     


    </div>
  );
}

export default App;
