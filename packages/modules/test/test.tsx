import React from 'react';
import { Button } from '@my-monorepo/ui';
import { useTest } from './useTest';

export const Test = () => {
  const { form, items, handleChange, handleSubmit, handleEdit, isEditing } =
    useTest();

  return (
    <div className="App px-6 py-8 max-w-4xl mx-auto font-sans">
      <h1 className="text-4xl font-bold text-blue-800 mb-8">Inventory Entry</h1>

      {/* Form Section */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10 bg-white p-6 rounded-lg shadow border">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Name
          </label>
          <input
            type="text"
            name="name"
            placeholder="Enter item name"
            value={form.name}
            onChange={handleChange}
            className="border border-gray-300 px-3 py-2 rounded w-full"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Price
          </label>
          <input
            type="number"
            name="price"
            placeholder="Enter price"
            value={form.price}
            onChange={handleChange}
            className="border border-gray-300 px-3 py-2 rounded w-full"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Quantity
          </label>
          <input
            type="number"
            name="quantity"
            placeholder="Enter quantity"
            value={form.quantity}
            onChange={handleChange}
            className="border border-gray-300 px-3 py-2 rounded w-full"
          />
        </div>

        <div className="sm:col-span-3 text-right mt-2">
          <Button
            onClick={handleSubmit}
            title={isEditing ? 'Update' : 'Submit'}
          />
        </div>
      </div>

      {/* Table Section */}
      <div>
        <h2 className="text-2xl font-semibold text-blue-800 mb-4">
          Inventory List
        </h2>
        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-300 text-sm text-left bg-white shadow rounded">
            <thead className="bg-blue-600 text-white">
              <tr>
                <th className="px-4 py-2 border">ID</th>
                <th className="px-4 py-2 border">Name</th>
                <th className="px-4 py-2 border">Price</th>
                <th className="px-4 py-2 border">Quantity</th>
                <th className="px-4 py-2 border">Actions</th>
              </tr>
            </thead>
            <tbody>
              {items.map((item) => (
                <tr key={item._id} className="even:bg-blue-50">
                  <td className="px-4 py-2 border text-gray-700">{item._id}</td>
                  <td className="px-4 py-2 border text-gray-700">
                    {item.name}
                  </td>
                  <td className="px-4 py-2 border text-gray-700">
                    {item.price}
                  </td>
                  <td className="px-4 py-2 border text-gray-700">
                    {item.quantity}
                  </td>
                  <td className="px-4 py-2 border text-blue-600">
                    <button
                      onClick={() => handleEdit(item)}
                      className="flex items-center gap-1 text-blue-600 hover:underline"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-4 h-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5M18.5 2.5a2.121 2.121 0 113 3L12 15l-4 1 1-4 9.5-9.5z"
                        />
                      </svg>
                      Edit
                    </button>
                  </td>
                </tr>
              ))}
              {items.length === 0 && (
                <tr>
                  <td
                    colSpan={5}
                    className="px-4 py-4 text-center text-gray-400 border"
                  >
                    No items available.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Test;
