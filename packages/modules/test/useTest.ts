import { useEffect, useState } from 'react';

const dbUrl = 'http://192.168.1.121:5984';
const authHeader = {
  Authorization: 'Basic ' + btoa('Admin:Admin123'),
  'Content-Type': 'application/json',
};

type InventoryItem = {
  _id: string;
  name: string;
  price: number;
  quantity: number;
};

export const useTest = () => {
  const [form, setForm] = useState({
    name: '',
    price: 0,
    quantity: 0,
  });
  const [items, setItems] = useState<InventoryItem[]>([]);
  const [editItemId, setEditItemId] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.name === 'name' ? e.target.value : Number(e.target.value),
    }));
  };

  const fetchData = async () => {
    try {
      const res = await fetch(`${dbUrl}/store1db/_all_docs?include_docs=true`, {
        headers: authHeader,
      });
      const data = await res.json();
      const fetchedItems = data.rows.map((row: any) => row.doc).filter((doc: any) => doc.name && doc.price && doc.quantity);
      setItems(fetchedItems);
    } catch (err) {
      console.error('Error fetching documents:', err);
    }
  };

  const handleSubmit = async () => {
    try {
      if (editItemId) {
        // Fetch the current document to get _rev
        const current = await fetch(`${dbUrl}/store1db/${editItemId}`, { headers: authHeader });
        const existingDoc = await current.json();

        const updatedDoc = {
          ...existingDoc,
          name: form.name,
          price: form.price,
          quantity: form.quantity,
        };

        const res = await fetch(`${dbUrl}/store1db/${editItemId}`, {
          method: 'PUT',
          headers: authHeader,
          body: JSON.stringify(updatedDoc),
        });

        await res.json();
        setEditItemId(null);
        setForm({ name: '', price: 0, quantity: 0 });
      } else {
        const newItem = {
          name: form.name,
          price: form.price,
          quantity: form.quantity,
        };

        const res = await fetch(`${dbUrl}/store1db`, {
          method: 'POST',
          headers: authHeader,
          body: JSON.stringify(newItem),
        });

        await res.json();
      }

      fetchData();
    } catch (err) {
      console.error('Submit failed:', err);
    }
  };

  const handleEdit = (item: InventoryItem) => {
    setForm({
      name: item.name,
      price: item.price,
      quantity: item.quantity,
    });
    setEditItemId(item._id);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return {
    form,
    items,
    handleChange,
    handleSubmit,
    handleEdit,
    isEditing: !!editItemId,
  };
};

