import React from "react";
import { useInventory } from "./useInventory";

export const Inventory = () => {
  const { form, items, handleChange, handleSubmit } = useInventory();

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-xl shadow-md space-y-6">
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

        <div className="text-right">
          <button
            type="submit"
            className="bg-primary text-white font-semibold px-6 py-2 rounded-md hover:bg-blue-700 transition"
          >
            ➕ Add Item
          </button>
        </div>
      </form>

      <div className="border-t pt-4 border-gray-200">
        <h2 className="text-lg font-semibold text-gray-800 mb-2">
          Inventory List
        </h2>
        {items.length === 0 ? (
          <p className="text-sm text-gray-500">No items added yet.</p>
        ) : (
          <ul className="space-y-1 list-disc list-inside text-gray-800">
            {items.map((item) => (
              <li key={item.id}>
                <span className="font-medium">{item.name}</span> — Qty:{" "}
                {item.quantity}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Inventory;
