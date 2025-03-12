import React from 'react';
import { useNavigate } from 'react-router-dom';
import './MainPage.css';

export default function MainPage({ user }) {
  const navigate = useNavigate();

  const handleRegisterClick = () => {
    navigate('/reg');
  };

  const handleLoginClick = () => {
    navigate('/login');
  };

  return (
    <div id="wrapper">
      <section id="content">
        <section className="title container flow--lg">
          <div className="logo-container">
            <img src="/keb.png" alt="Kebab" className="logo" />
          </div>

          <h1>
            <span className="eyebrow" aria-hidden="true">
              Добро пожаловать в{' '}
            </span>
            Кебаб-Маркет
          </h1>
          <p>
            Мы предлагаем уникальное решение для тех, кто не хочет, чтобы еда пропадала
            зря! Если заказчик не принял доставку, вы можете разместить непринятый заказ в
            нашем приложении, а люди рядом смогут его выкупить со скидкой.
          </p>
          {user && user.data && user.status === 'logged' ? (
            user.data.role === 'courier' ? (
              <div>личный кабинет курьера</div>
            ) : user.data.role === 'customer' ? (
              <div>личный кабинет заказчика</div>
            ) : null
          ) : (
            <div className="buttons">
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
            <div className="flow content">
              <h2>Почему мы?</h2>
              <p>
                Мы помогаем сократить количество пищевых отходов и даем возможность людям
                наслаждаться вкусной едой по доступной цене. Присоединяйтесь к нашему
                сообществу!
              </p>
            </div>
          </div>
        </section>

        <section className="spacer"></section>
      </section>
    </div>
  );
}
