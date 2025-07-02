// packages/modules/inventory/useInventory.ts
import eventBus from '@my-monorepo/core/eventBus';
import { useState } from 'react';

export type InventoryItem = {
  id: number;
  name: string;
  quantity: number;
};


const platform = import.meta.env.VITE_PLATEFORM;


const adapter = platform === 'pos' ? import('./adapters/posAdapter').then(m => m.SalesPOSAdapter) :
  import('./adapters/cposAdapter').then(m => m.SalesCPOSAdapter) ||
  Promise.reject(new Error('Unsupported platform'));



export const useInventory = () => {
  const [items, setItems] = useState<InventoryItem[]>([]);
  const [form, setForm] = useState({ name: '', quantity: 0 });
//   const platform = import.meta.env.VITE_PLATFORM;
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: name === 'quantity' ? Number(value) : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newItem: InventoryItem = {
      id: Date.now(),
      name: form.name,
      quantity: form.quantity,
    };
    adapter.then((adapter) => {
      return adapter.createInvoice([newItem]);
    }).catch((error) => {
      console.error('Error creating invoice:', error);
    });
    setItems((prev) => [...prev, newItem]);
    setForm({ name: '', quantity: 0 });
    eventBus.emit('toast', 'item Added successfully!');
  };

  return {
    form,
    items,
    handleChange,
    handleSubmit,
  };
};
