import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.css';
import App from './App';

const app = (
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(app);
