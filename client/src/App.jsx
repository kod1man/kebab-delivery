import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MainPage from './components/pages/MainPage';
import RegisterPage from './components/pages/RegistrationForm';
import CourierPage from './components/pages/CourierPage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/reg" element={<RegisterPage />} />
        <Route path="/courier" element={<CourierPage />} />
      </Routes>
    </div>
  );
}

export default App;
