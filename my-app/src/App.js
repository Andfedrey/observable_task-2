import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Main } from './components/Main/Main';
import { Service } from './components/Service/Service';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<Main />} path="/" />
        <Route element={<Service />} path="/:id" />
      </Routes>
    </div>
  );
}

export default App;
