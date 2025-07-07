import { useState } from 'react';
import eventBus from '@my-monorepo/core/eventBus';
import { useAppStore } from '@my-monorepo/core';

// Define InventoryItem type if not imported from elsewhere
type InventoryItem = {
  id: number;
  name: string;
  price: number;
  quantity: number;
};

const platform = import.meta.env.VITE_PLATEFORM;

const adapterPromise = import('@my-monorepo/test/adapters/posHttpAdapter').then((m) => m.posHttpAdapter);

export const useTest = () => {
  const [form, setForm] = useState({
    name: '',
    price: 0,
    quantity: 0,
  });

  const { items, addItem } = useAppStore();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async () => {
    const adapter = await adapterPromise;
    console.log('adapter >>>', adapter);
    adapter.createInvoice({
      name: form.name,
      price: form.price,
      quantity: form.quantity,
    });
  };

  return {
    form,
    items,
    handleChange,
    handleSubmit,
  };
};
