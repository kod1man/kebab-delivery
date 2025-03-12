import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './RegistrationForm.css';

export default function RegistrationForm() {
  const [role, setRole] = useState('customer');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [city, setCity] = useState('');
  const [phone, setPhone] = useState('');
  const navigate = useNavigate(); 

  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = {
      role,
      name,
      email,
      password,
      phone,
      ...(role === 'courier' && { city }),
    };
    console.log('Registration Data:', userData);
    navigate('/login');
  };

  return (
    <div className="registration-container">
      <form onSubmit={handleSubmit} className="registration-form">
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
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Почта:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Пароль:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="phone">Номер телефона:</label>
          <input
            type="tel"
            id="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
            placeholder="+7 (XXX) XXX-XX-XX"
          />
        </div>

        {role === 'courier' && (
          <div className="form-group">
            <label htmlFor="city">Город:</label>
            <input
              type="text"
              id="city"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              required
            />
          </div>
        )}

        <button type="submit" className="submit-button">
          Зарегистрироваться
        </button>
      </form>
    </div>
  );
}
