import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import MainPage from './components/pages/MainPage';
import RegisterPage from './components/pages/RegistrationForm';
import CourierPage from './components/pages/CourierPage';
import OrdersPage from './components/pages/OrdersPage';
import LoginPage from './components/pages/LoginPage';
import CustomerPage from './components/pages/CustomerPage';
import axiosInstance, { setAccessToken } from './api/axiosInstance';
import Loader from './components/shared/Loader';
import ProtecteRouter from './components/shared/hocs/ProtecteRouter';

function App() {
  const [user, setUser] = useState({ status: 'logging', data: null });
  const [orders, setOrder] = useState([]);

  useEffect(() => {
    const data = async () => {
      try {
        const response = await fetch('/api/orders/info');
        const responseData = await response.json();
        setOrder(responseData);
      } catch (error) {
        console.log('Ошибка при загрузке данных', error);
      }
    };
    data();
  }, []);

  console.log(user);

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
    axiosInstance
      .get('/auth/logout')
      .then(() => setUser({ status: 'guest', data: null }));
    setAccessToken('');
  };

  return (
    <Loader isLoading={user.status === 'logging'}>
      <div className="App">
        <Routes>
          <Route path="/" element={<MainPage user={user} onLogout={handleLogout} />} />
          <Route
            path="/reg"
            element={
              <ProtecteRouter isAllowed={user.status !== 'logged'} redirectTo={'/'}>
                <RegisterPage setUser={setUser} />
              </ProtecteRouter>
            }
          />
          <Route
            path="/orders"
            element={<OrdersPage order={orders} user={user} setOrder={setOrder} />}
          />
          <Route
            path="/courier"
            element={
              <ProtecteRouter
                isAllowed={user.status === 'logged' && user.data.role === 'courier'}
                redirectTo={'/'}
              >
                <CourierPage
                  orders={orders}
                  courierId={user.data?.id}
                  user={user}
                  onLogout={handleLogout}
                />
              </ProtecteRouter>
            }
          />
          <Route
            path="/customer"
            element={
              <ProtecteRouter
                isAllowed={user.status === 'logged' && user.data.role === 'customer'}
                redirectTo={'/'}
              >
                <CustomerPage user={user} onLogout={handleLogout} orders={orders} />
              </ProtecteRouter>
            }
          />
          <Route
            path="/login"
            element={
              <ProtecteRouter isAllowed={user.status !== 'logged'} redirectTo={'/'}>
                <LoginPage setUser={setUser} />
              </ProtecteRouter>
            }
          />
        </Routes>
      </div>
    </Loader>
  );
}

export default App;
