import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Navbar from './components/components/Header Footer/Navbar';
import { BrowserRouter } from "react-router-dom";
import Footer from './components/components/Header Footer/Footer';
import LikedItemsProvider from './components/context/LinkedProvider';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <BrowserRouter>
    <React.StrictMode>
      <LikedItemsProvider>
        <div style={{ width: "100%", overflowX: "hidden" }}>
          <Navbar />
          <App />
          <Footer />
        </div>
      </LikedItemsProvider>
    </React.StrictMode>
  </BrowserRouter>
);

reportWebVitals();
