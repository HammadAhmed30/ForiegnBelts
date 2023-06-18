import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Navbar from './components/components/Header Footer/Navbar';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div style={{width:"100%",overflowX:"hidden"}}>
      
    <Navbar/>
    <App />
    </div>
  </React.StrictMode>
);

reportWebVitals();
