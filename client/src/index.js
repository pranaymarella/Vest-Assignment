import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './public/css/index.css';
import App from './components/App.js';

render((
  <BrowserRouter>
    <App />
  </BrowserRouter>
), document.getElementById('root'));
