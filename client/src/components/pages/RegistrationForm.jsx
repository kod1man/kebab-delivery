import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './RegistrationForm.css';
import axiosInstance from '../../api/axiosInstance';

export default function RegistrationForm({ setUser }) {
  const [role, setRole] = useState('customer');
  const navigate = useNavigate();
  const signupHandle = (e) => {
    e.preventDefault();
    const formData = Object.fromEntries(new FormData(e.target));
    formData.role = role;
    if (
      !formData.email ||
      !formData.password ||
      !formData.name ||
      !formData.phone ||
      !formData.city ||
      !formData.role
    ) {
      return alert('Missing required fields');
    }
    axiosInstance
      .post('auth/signup', formData)
      .then((res) => {
        setUser({ status: 'logged', data: res.data.user });
      })
      .catch((error) => {
        error.status === 400 ? alert('Такой пользователь уже существует') : true;
        error.status === 500 ? alert('Ошибка сервера') : true;
      });
  };

  console.log(role);

  return (
    <div className="registration-container">
      <form onSubmit={signupHandle} className="registration-form">
        <h2>Регистрация</h2>
        <div className="role-selector">
          <label
            className={`role-option ${role === 'customer' ? 'selected' : ''}`}
            onClick={() => setRole('customer')}
          >
            Заказчик
          </label>
          <label
            className={`role-option ${role === 'courier' ? 'selected' : ''}`}
            onClick={() => setRole('courier')}
          >
            Курьер
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="name">Имя:</label>
          <input type="text" id="name" name="name" required />
        </div>

        <div className="form-group">
          <label htmlFor="email">Почта:</label>
          <input type="email" id="email" name="email" required />
        </div>

        <div className="form-group">
          <label htmlFor="password">Пароль:</label>
          <input type="password" id="password" name="password" required />
        </div>

        <div className="form-group">
          <label htmlFor="phone">Номер телефона:</label>
          <input
            type="text"
            id="phone"
            name="phone"
            required
            placeholder="+7 (XXX) XXX-XX-XX"
          />
        </div>

        <div className="form-group">
          <label htmlFor="city">Город:</label>
          <input type="text" id="city" name="city" required />
        </div>

        <button type="submit" className="submit-button" onClick={() => navigate('/')}>
          Зарегистрироваться
        </button>
      </form>
    </div>
  );
}
