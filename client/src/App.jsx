import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import MainPage from './components/pages/MainPage';
import RegisterPage from './components/pages/RegistrationForm';
import CourierPage from './components/pages/CourierPage';
import OrdersPage from './components/pages/OrdersPage';
import LoginPage from './components/pages/LoginPage';
import axiosInstance, { setAccessToken } from './api/axiosInstance';
import axios from 'axios';

function App() {
  const [user, setUser] = useState({ status: 'logging', data: null });
  const [order, setOrder] = useState([]);

  useEffect(() => {
    axios
      .get('api/order/info')
      .then((res) => setOrder(res.data))
      .catch(console.log);
  }, []);

  console.log(order);

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

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MainPage user={user} />} />
        <Route path="/reg" element={<RegisterPage setUser={setUser} />} />
        <Route path="/orders" element={<OrdersPage order={order} user={user} />} />
        <Route
          path="/courier"
          element={<CourierPage setOrder={setOrder} order={order} />}
        />
        <Route path="/login" element={<LoginPage setUser={setUser} />} />
      </Routes>
    </div>
  );
}

export default App;
