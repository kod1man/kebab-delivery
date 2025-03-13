import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import MainPage from './components/pages/MainPage';
import RegisterPage from './components/pages/RegistrationForm';
import CourierPage from './components/pages/CourierPage';
import LoginPage from './components/pages/LoginPage';
import axiosInstance, { setAccessToken } from './api/axiosInstance';
import Loader from './components/shared/Loader';

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
  console.log(user);

  return (
    <Loader isLoading={user.status === 'logging'}>
      <div className="App">
        <Routes>
          <Route path="/" element={<MainPage user={user} />} />
          <Route path="/reg" element={<RegisterPage setUser={setUser} />} />
          <Route path="/courier" element={<CourierPage />} />
          <Route path="/login" element={<LoginPage setUser={setUser} />} />
        </Routes>
      </div>
    </Loader>
  );
}

export default App;
