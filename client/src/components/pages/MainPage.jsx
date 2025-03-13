import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './MainPage.css';
import Navbar from '../ui/NavBar';

export default function MainPage({ user, onLogout }) {
  const [text, setText] = useState('');
  const fullText = 'Добро пожаловать в Кебаб-Маркет';

  const navigate = useNavigate();

  const handleRegisterClick = () => {
    navigate('/reg');
  };

  const handleLoginClick = () => {
    navigate('/login');
  };

  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <div id="wrapper" className="parallax">
      <Navbar user={user} onLogout={onLogout} />
      <section id="content">
        <section className="title container flow--lg">
          <div className="logo-container fade-in">
            <img src="/keb.png" alt="Kebab" className="logo" />
          </div>
          <h1 className="fade-in delay-1">
            <span className="eyebrow" aria-hidden="true">
              <span className="typed-text">{text}</span>
            </span>
          </h1>
          <p className="fade-in delay-2">
            Мы предлагаем уникальное решение для тех, кто не хочет, чтобы еда пропадала
            зря!
          </p>
          {user && user.data && user.status === 'logged' ? (
            user.data.role === 'courier' ? (
              <div></div>
            ) : user.data.role === 'customer' ? (
              <div></div>
            ) : null
          ) : (
            <div className="buttons fade-in delay-3">
              <button className="btn-register" onClick={handleRegisterClick}>
                Регистрация
              </button>
              <button className="btn-login" onClick={handleLoginClick}>
                Вход
              </button>
            </div>
          )}
        </section>
        <section className="bars container">
          <div className="bars-text">
            <div className="flow-content">
              <p></p>
            </div>
          </div>
          <div className="bars-cont">
            <div className="kebab-stack">
              <img src="../../../public/pom.png" alt="Kebab 3" className="kebabp" />
              <img src="../../../public/luc.png" alt="Kebab 2" className="kebabl" />
              <img src="../../../public/sh.png" alt="Kebab 1" className="kebabs" />
            </div>
          </div>
        </section>
        <section className="spacer"></section>
      </section>
    </div>
  );
}
