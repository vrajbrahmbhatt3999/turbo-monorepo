import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { AbilityContext, defineAbilitiesFromPermissions } from '@my-monorepo/core';
// ReactDOM.createRoot(document.getElementById('root')!).render(
  
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );
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
      <AbilityContext.Provider value={ability}>
        <App />
      </AbilityContext.Provider>
    </React.StrictMode>
  );
}
 
init();