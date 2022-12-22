import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import Cvku from './cv';
import './cvku.css';
import Foto from "./pict/Profil.jpg"



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Cvku />
  </React.StrictMode>
);

reportWebVitals();
