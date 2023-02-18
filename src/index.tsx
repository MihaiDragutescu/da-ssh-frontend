import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import ScrollToTop from '@Utils/ScrollToTop';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { ApiProvider } from '@reduxjs/toolkit/dist/query/react';
import { productsApi } from '@Store/apis/productsApi';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ScrollToTop />
      <ApiProvider api={productsApi}>
        <App />
      </ApiProvider>
    </BrowserRouter>
  </React.StrictMode>
);
