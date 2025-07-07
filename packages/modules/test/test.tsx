import React from 'react';
import { Button } from '@my-monorepo/ui';
import { Toast } from '@my-monorepo/ui';
import { Can } from '@casl/react';
import { useAbility } from '@my-monorepo/core';
import { useTest } from './useTest';

export const Test = () => {
  const { form, items, handleChange, handleSubmit } = useTest();
  const ability = useAbility();
  return (
    <div className='App' style={{ padding: 20 }}>
      <h1>Hello React</h1>

      <div className='space-y-4 max-w-sm'>
        <input
          type='text'
          name='name'
          placeholder='Name'
          value={form.name}
          onChange={handleChange}
          className='border p-2 rounded w-full'
        />
        <input
          type='number'
          name='price'
          placeholder='Price'
          value={form.price}
          onChange={handleChange}
          className='border p-2 rounded w-full'
        />
        <input
          type='number'
          name='quantity'
          placeholder='Quantity'
          value={form.quantity}
          onChange={handleChange}
          className='border p-2 rounded w-full'
        />
        <button
          onClick={handleSubmit}
          className='bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700'
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default Test;
