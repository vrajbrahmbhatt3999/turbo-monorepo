import { useState } from 'react';
import { Toast } from '@my-monorepo/ui';

export const useLogin = () => {
  const [form, setForm] = useState({ username: '', password: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Simulate login logic or call real API
    console.log('Auth API call with:', form.username, form.password);

    // Example: store session/token logic here
    // localStorage.setItem("token", "abc123");

    // Toast.success('Logged in successfully!');
  };

  return {
    form,
    handleChange,
    handleSubmit,
  };
};
