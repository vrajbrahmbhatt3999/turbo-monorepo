// main.tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

import { BrowserRouter } from 'react-router-dom';
import { AbilityContext, defineAbilitiesFromPermissions } from '@my-monorepo/core';

async function init() {
  const roleDoc = {
    _id: 'role_cashier',
    type: 'role_permission',
    role: 'cashier',
    modules: [
      {
        name: 'sales_invoice',
        permissions: ['create', 'read', 'view']
      },
      {
        name: 'returns',
        permissions: ['read']
      }
    ]
  };
  
  const ability = defineAbilitiesFromPermissions(roleDoc);

  ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
      <BrowserRouter>
        <AbilityContext.Provider value={ability}>
          <App />
        </AbilityContext.Provider>
      </BrowserRouter>
    </React.StrictMode>
  );
}

init();
