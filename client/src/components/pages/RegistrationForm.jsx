import React, { useState } from 'react';
import './RegistrationForm.css';

export default function RegistrationForm() {
  const [role, setRole] = useState('customer'); 
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [city, setCity] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = {
      role,
      name,
      email,
      password,
      ...(role === 'courier' && { city }), // Добавляем город, только если выбран курьер
    };
    console.log('Данные для регистрации:', userData);
    // Здесь будем отпрпавлять на сервер
  };

  return (
    <div className="registration-container">
      <form onSubmit={handleSubmit} className="registration-form">
        <h2>Регистрация</h2>
        <div className="role-selector">
          <label>
            <input
              type="radio"
              name="role"
              value="customer"
              checked={role === 'customer'}
              onChange={() => setRole('customer')}
            />
            Заказчик
          </label>
          <label>
            <input
              type="radio"
              name="role"
              value="courier"
              checked={role === 'courier'}
              onChange={() => setRole('courier')}
            />
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