import React from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginPage.css';
import Navbar from '../ui/NavBar'; 

export default function LoginPage({ setUser }) {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const formData = Object.fromEntries(new FormData(e.target));
    if (!formData.email || !formData.password) {
      return alert('Missing required fields');
    }
    axiosInstance.post('/auth/signin', formData).then(({ data }) => {
      setUser({ status: 'logged', data: data.user });
      setAccessToken(data.accessToken);
    });
  };

  return (
    <div className="login-container">
      <Navbar user={{ status: 'guest', data: null }} onLogout={() => {}} /> 
      <form onSubmit={handleLogin} className="login-form">
        <h2>Вход в аккаунт</h2>
        <div className="form-group">
          <label htmlFor="email">Почта:</label>
          <input type="email" id="email" name="email" required />
        </div>

        <div className="form-group">
          <label htmlFor="password">Пароль:</label>
          <input type="password" id="password" name="password" required />
        </div>

        <button type="submit" className="submit-button">
          Войти
        </button>
      </form>
    </div>
  );
}