import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import ScrollToTop from '@Utils/ScrollToTop';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { ApiProvider } from '@reduxjs/toolkit/dist/query/react';
import { sshApi } from '@App/store/api';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ScrollToTop />
      <ApiProvider api={sshApi}>
        <App />
      </ApiProvider>
    </BrowserRouter>
  </React.StrictMode>
);
