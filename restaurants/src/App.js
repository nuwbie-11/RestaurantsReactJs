import * as React from 'react';
import { Routes, Route } from 'react-router-dom';

import Main from './core/Main';
import About from './core/About';
import Loader from './Loader';

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Loader />} />
        <Route path="/About" element={<About />} />
      </Routes>
    </div>
  );
}