import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import MainPage from './components/pages/MainPage';
import RegisterPage from './components/pages/RegistrationForm';
import CourierPage from './components/pages/CourierPage';
import LoginPage from './components/pages/LoginPage';
import CustomerPage from './components/pages/CustomerPage'; 
import axiosInstance, { setAccessToken } from './api/axiosInstance';

function App() {
  const [user, setUser] = useState({ status: 'logging', data: null });

  useEffect(() => {
    axiosInstance('/tokens/refresh')
      .then(({ data }) => {
        setTimeout(() => {
          setUser({ status: 'logged', data: data.user });
        }, 1000);
        setAccessToken(data.accessToken);
      })
      .catch(() => {
        setUser({ status: 'guest', data: null });
        setAccessToken('');
      });
  }, []);

  const handleLogout = () => {
    setUser({ status: 'guest', data: null }); 
    setAccessToken(''); 
  };

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MainPage user={user} onLogout={handleLogout} />} />
        <Route path="/reg" element={<RegisterPage setUser={setUser} />} />
        <Route path="/courier" element={<CourierPage user={user} onLogout={handleLogout} />} />
        <Route path="/customer" element={<CustomerPage user={user} onLogout={handleLogout} />} />
        <Route path="/login" element={<LoginPage setUser={setUser} />} />
      </Routes>
    </div>
  );
}

export default App;