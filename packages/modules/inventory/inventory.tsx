import React from 'react';
import { useInventory } from './useInventory';
import { Button } from '@my-monorepo/ui';
import { Toast } from '@my-monorepo/ui';
import { Can } from '@casl/react';
import { useAbility } from '@my-monorepo/core';

export const Inventory = () => {
  const { form, items, handleChange, handleSubmit } = useInventory();
  const ability = useAbility();
  return (
    <div className="w-full max-w-2xl p-6 bg-white rounded-xl shadow-md space-y-6 animate-fade-in-up">
      <h1 className="text-2xl font-bold text-primary text-center">
        Inventory Module
      </h1>

      <form
        onSubmit={handleSubmit}
        className="space-y-4 border-t pt-4 border-gray-200"
      >
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Item Name
          </label>
          <input
            name="name"
            type="text"
            placeholder="Enter item name"
            value={form.name}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Quantity
          </label>
          <input
            name="quantity"
            type="number"
            placeholder="Enter quantity"
            value={form.quantity}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
            min={0}
            required
          />
        </div>

        <Can I="create" a="sales_invoice" ability={ability}>
          <div className="text-center">
            <Button title="Add Item" type="submit" />
          </div>
        </Can>
      </form>

      <div className="border-t pt-4 border-gray-200">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">
          Inventory List
        </h2>
        {items.length === 0 ? (
          <p className="text-sm text-gray-500">No items added yet.</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left border border-gray-300 rounded shadow-sm">
              <thead className="bg-gray-100 text-gray-700">
                <tr>
                  <th className="py-2 px-4 border-b">#</th>
                  <th className="py-2 px-4 border-b">Item Name</th>
                  <th className="py-2 px-4 border-b">Quantity</th>
                </tr>
              </thead>
              <tbody>
                {items.map((item: { id: string | number; name: string; quantity: number }, index: number) => (
                  <tr key={item.id} className="hover:bg-gray-50">
                    <td className="py-2 px-4 border-b">{index + 1}</td>
                    <td className="py-2 px-4 border-b">{item.name}</td>
                    <td className="py-2 px-4 border-b">{item.quantity}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
      <Toast />
    </div>
  );
};

export default Inventory;
