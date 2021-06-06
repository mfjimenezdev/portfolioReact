import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Navbar from './components/navbar/navbar';
import App from './App';
import Footer from './components/footer/footer';

ReactDOM.render(
  <React.StrictMode>
    <Navbar />
    <App />
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);
