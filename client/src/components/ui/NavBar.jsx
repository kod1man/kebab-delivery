import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Navbar.css'; 

export default function Navbar({ user, onLogout }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    onLogout(); 
    navigate('/'); 
  };

  const handleNavigateToCabinet = () => {
    if (user.data.role === 'courier') {
      navigate('/courier');
    } else if (user.data.role === 'customer') {
      navigate('/customer'); 
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-content">
        {user && user.data && user.status === 'logged' ? (
          <>
            <button onClick={handleNavigateToCabinet} className="btn-cabinet">
              {user.data.role === 'courier' ? 'Личный кабинет курьера' : 'Личный кабинет заказчика'}
            </button>
            <button className="btn-logout" onClick={handleLogout}>
              Выйти
            </button>
          </>
        ) : null}
      </div>
    </nav>
  );
}