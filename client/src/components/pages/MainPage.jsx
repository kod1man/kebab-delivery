import React from 'react';
import './MainPage.css';


export default function MainPage() {
  return (
    <div id="wrapper">
      <section id="content">
        <section className="title container flow--lg">
          <h1>
            <span className="eyebrow" aria-hidden="true">Добро пожаловать в </span>
            Кебаб-Маркет
          </h1>
          <p>
            Мы предлагаем уникальное решение для тех, кто не хочет, чтобы еда пропадала зря! Если заказчик не принял доставку, вы можете разместить непринятый заказ в нашем приложении, а люди рядом смогут его выкупить со скидкой.
          </p>
          <div className="buttons">
          </div>
        </section>

        <section className="bars container">
          <div className="bars-text">
            <div className="flow content">
              <h2>Почему мы?</h2>
              <p>
                Мы помогаем сократить количество пищевых отходов и даем возможность людям наслаждаться вкусной едой по доступной цене. Присоединяйтесь к нашему сообществу!
              </p>
            </div>
          </div>
        </section>

        <section className="spacer"></section>
      </section>
    </div>
  );
}