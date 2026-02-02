import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Services from './components/Services';
import Network from './components/Network';
import MentorMatching from './components/MentorMatching';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/network" element={<Network />} />
          <Route path="/mentor-matching" element={<MentorMatching />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
