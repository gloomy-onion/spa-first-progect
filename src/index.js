import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import state from './components/redux/state';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App
    state = {state}
  />
);

reportWebVitals();
