import React from 'react';
import {Button} from '@my-monorepo/ui';
import Inventory from '@my-monorepo/inventory/inventory';

function App() {
  return (
    <> 
    <div className="text-center text-secondary bg-gray-100 p-4 rounded font-serif">
      Tailwind is working in Monorepo 🚀
    </div>
      <Button/>
    <Inventory />
    </>
  );
}

export default App;
