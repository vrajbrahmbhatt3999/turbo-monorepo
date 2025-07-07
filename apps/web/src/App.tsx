import { Routes, Route } from 'react-router-dom';
import { Inventory } from '@my-monorepo/inventory';
import { Test } from '@my-monorepo/test';
import { Login } from '@my-monorepo/core';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/inventory" element={<Inventory />} />
      <Route path="/test" element={<Test />} />
    </Routes>
  );
}

export default App;
