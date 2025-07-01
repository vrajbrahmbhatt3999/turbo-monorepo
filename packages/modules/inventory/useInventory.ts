// packages/modules/inventory/useInventory.ts
import { useState } from "react";

export type InventoryItem = {
  id: number;
  name: string;
  quantity: number;
};
// const platform = import.meta.env.VITE_PLATEFORM;
export const useInventory = () => {
  const [items, setItems] = useState<InventoryItem[]>([]);
  const [form, setForm] = useState({ name: "", quantity: 0 });
//   const platform = import.meta.env.VITE_PLATFORM;
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: name === "quantity" ? Number(value) : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newItem: InventoryItem = {
      id: Date.now(),
      name: form.name,
      quantity: form.quantity,
    };
    setItems((prev) => [...prev, newItem]);
    setForm({ name: "", quantity: 0 });
  };

  return {
    form,
    items,
    handleChange,
    handleSubmit,
  };
};
