import * as React from 'react';
import { StrictMode } from 'react';
import { BrowserRouter } from 'react-router-dom';

import App from './App';

import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
// const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);


reportWebVitals();