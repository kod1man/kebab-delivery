import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './RegistrationForm.css';
import axiosInstance from '../../api/axiosInstance';
import validPassword from '../utils/validPassword';
import validEmail from '../utils/validEmail';
import validPhone from '../utils/validPhone';

export default function RegistrationForm({ setUser }) {
  const [role, setRole] = useState('customer');
  const [input, setInput] = useState({ password: '', email: '', phone: '' });

  const changePass = (event) => {
    setInput((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  };

  const changeEmail = (event) => {
    setInput((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  };

  const changePhone = (event) => {
    setInput((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  };

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
          <label
            style={{ color: validEmail(input.email) ? 'green' : 'red' }}
            htmlFor="email"
          >
            Почта:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={input.email}
            onChange={changeEmail}
          />
        </div>

        <div className="form-group">
          <label
            style={{ color: validPassword(input.password) ? 'green' : 'red' }}
            htmlFor="password"
          >
            Пароль:
          </label>
          <input
            type="password"
            id="password"
            name="password"
            required
            value={input.password}
            onChange={changePass}
          />
        </div>

        <div className="form-group">
          <label
            style={{ color: validPhone(input.phone) ? 'green' : 'red' }}
            htmlFor="phone"
          >
            Номер телефона:
          </label>
          <input
            type="text"
            id="phone"
            name="phone"
            required
            placeholder="+7 (XXX) XXX-XX-XX"
            value={input.phone}
            onChange={changePhone}
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
