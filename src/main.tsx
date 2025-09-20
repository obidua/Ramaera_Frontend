// index.tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ScrollToTop from './hooks/ScrollToTop';

const RootLayout = () => {
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith('/admin');

  return (
    <>
      {!isAdminRoute && <Navbar />}
      <App />
      {!isAdminRoute && <Footer />}
    </>
  );
};

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      {/* ✅ ScrollToTop handles scroll reset on route changes */}
      <ScrollToTop />
      
      {/* ✅ ToastContainer globally available with high z-index and smooth theme */}
      <ToastContainer
        position="top-right"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        style={{
          zIndex: 999999,
          top: '10px',
          right: '16px',
        }}
      />

      {/* ✅ Main Layout Logic */}
      <RootLayout />
    </BrowserRouter>
  </React.StrictMode>
);
