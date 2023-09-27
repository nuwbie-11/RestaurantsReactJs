import * as React from 'react';
import { StrictMode } from 'react';

import App from './App';

import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';



const root = ReactDOM.createRoot(document.getElementById('root'));
// const root = createRoot(rootElement);

root.render(
  <StrictMode>

      <App />

  </StrictMode>
);


reportWebVitals();