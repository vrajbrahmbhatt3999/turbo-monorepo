import { useState } from 'react';
import eventBus from '@my-monorepo/core/eventBus';
import { useAppStore } from '@my-monorepo/core';

// Define InventoryItem type if not imported from elsewhere
type InventoryItem = {
  id: number;
  name: string;
  quantity: number;
};

const platform = import.meta.env.VITE_PLATEFORM;

const adapter = platform === 'pos'
  ? import('./adapters/posAdapter').then((m) => m.SalesPOSAdapter)
  : import('./adapters/cposAdapter').then((m) => m.SalesCPOSAdapter);

export const useInventory = () => {
  const [form, setForm] = useState({ name: '', quantity: 0 });

  const { items, addItem } = useAppStore();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: name === 'quantity' ? Number(value) : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newItem: InventoryItem = {
      id: Date.now(),
      name: form.name,
      quantity: form.quantity,
    };

    // Provide a price value for the invoice (set to 0 or get from form if available)
    const invoice = {
      name: form.name,
      price: 0, // Replace 0 with actual price if available in your form/state
      quantity: form.quantity,
    };

    try {
      const resolvedAdapter = await adapter;
      await resolvedAdapter.createInvoice(invoice);
    } catch (error) {
      console.error('Error creating invoice:', error);
    }

    addItem(newItem);
    setForm({ name: '', quantity: 0 });
    eventBus.emit('toast', 'Item added successfully!');
  };

  return {
    form,
    items,
    handleChange,
    handleSubmit,
  };
};
