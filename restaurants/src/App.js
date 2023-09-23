import * as React from 'react';
import { Routes, Route } from 'react-router-dom';

import {routes} from './utils/data'

export default function App() {
  return (
    <div className="App">
      <Routes>
        {
          routes.map((route)=>(
            <Route path={route.path} element={route.loader} />
          ))
        }
      </Routes>
    </div>
  );
}