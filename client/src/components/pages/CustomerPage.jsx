import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function CustomerPage({ user, onLogout }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    onLogout(); 
    navigate('/'); 
  };

  return (
    <div className="customer-page">
      <p>Добро пожаловать, {user.data.name}!</p>
      <button className="btn-logout" onClick={handleLogout}>
        Выйти
      </button>
    </div>
  );
}