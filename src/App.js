import React, { Component } from 'react';
import logo from './images/logo.svg';
import './index.css';

class App extends Component {
  render() {
    return (
<div className="root">
  <div className="root__container">

    <header className="header root__header">
      <a href="./index.html" className="logo header__logo"><img src={logo} alt="Логотип"
          className="logo__img" /></a>
    </header>

    <main className="main">

      <section className="profile main__profile">
        <div className="profile__info">
          <div className="profile__avatar">
            <img src="#" alt="Аватар пользователя" className="profile__img" />
            <button className="profile__btn-edit-avatar" type="button" aria-label="Редактировать аватар"></button>
          </div>

          <div className="profile__name">
            <h1 className="profile__title"></h1>
            <p className="profile__subtitle"></p>
            <button className="profile__btn-edit-profile" type="button" aria-label="Редактировать данные профиля"></button>
          </div>
          <button className="profile__btn-add-place" type="button" aria-label="Добавить место"></button>
        </div>
        <ul className="cards">
        </ul>
      </section>

    </main>

    <footer className="footer">
      <p className="footer__copyright">&copy; 2022 Mesto Russia</p>
    </footer>

    <div className="popup popup_background_light popup_type_profile root__popup" id="test">
      <form className="popup__container popup__container_type_form" name="popup-edit-profile" id="form-edit-profile"
        novalidate>
        <h2 className="popup__title">Редактировать профиль</h2>
        <label className="popup__label" for="input-name">
          <input className="popup__input" type="text" name="name" id="input-name" required placeholder="Имя" minlength="2"
            maxlength="40"/>
          <span className="popup__input-error input-name-error"></span>
        </label>
        <label className="popup__label" for="input-about">
          <input className="popup__input" type="text" name="about" id="input-about" required placeholder="Род деятельности"
            minlength="2" maxlength="200"/>
          <span className="popup__input-error input-about-error"></span>
        </label>
        <button className="popup__btn popup__btn_type_profile root__btn" type="submit">Сохранить</button>
        <button className="popup__close" type="button" aria-label="Закрыть"></button>
      </form>
    </div>

    <div className="popup popup_background_light popup_type_card-add root__popup" id="popup-card">
      <form className="popup__container popup__container_type_form" name="popup-add-card" id="form-add-card" novalidate>
        <h2 className="popup__title">Новое место</h2>
        <label className="popup__label" for="input-place">
          <input className="popup__input " type="text" name="place" id="input-place" required placeholder="Название"
            minlength="2" maxlength="30"/>
          <span className="popup__input-error input-place-error"></span>
        </label>
        <label className="popup__label" for="input-image">
          <input className="popup__input" type="url" name="image" id="input-image" required
            placeholder="Ссылка на картинку"/>
          <span className="popup__input-error input-image-error"></span>
        </label>
        <button className="popup__btn popup__btn_type_add-card root__btn" type="submit">Создать</button>
        <button className="popup__close" type="button" aria-label="Закрыть"></button>
      </form>
    </div>

    <div className="popup popup_background_dark popup_type_picture root__popup" id="popup-img">
      <div className="popup__container">
        <img src="#" alt="#" className="popup__img"/>
        <p className="popup__img-description">#</p>
        <button className="popup__close" type="button" aria-label="Закрыть"></button>
      </div>
    </div>
  </div>

  <div className="popup popup_background_light popup_type_confirm root__popup" id="confirm">
    <form className="popup__container popup__container_type_form" name="popup-confirm" id="form-confirm" novalidate>
      <h2 className="popup__title popup__title_type_confirm">Вы уверены?</h2>
      <button className="popup__btn popup__btn_type_confirm" type="submit">Да</button>
      <button className="popup__close" type="button" aria-label="Закрыть"></button>
    </form>
  </div>

  <div className="popup popup_background_light popup_type_edit-avatar root__popup" id="popup-edit-avatar">
    <form className="popup__container popup__container_type_form" name="popup-edit-avatar" id="form-edit-avatar" novalidate>
      <h2 className="popup__title">Обновить аватар</h2>
      <label className="popup__label" for="input-avatar">
        <input className="popup__input" type="url" name="avatar" id="input-avatar" required placeholder="Ссылка на аватар"/>
        <span className="popup__input-error input-avatar-error"></span>
      </label>
      <button className="popup__btn popup__btn_type_edit-avatar root__btn" type="submit">Сохранить</button>
      <button className="popup__close" type="button" aria-label="Закрыть"></button>
    </form>
  </div>

  <template id="card">
    <li className="card">
      <div className="card__text">
        <h2 className="card__title"></h2>
        <div className="card__like-section">
          <button className="card__like" type="button"></button>
          <span className="card__like-info"></span>
        </div>
      </div>
      <img className="card__img" src="#" alt="изображение"/>
      <button className="card__del" type="button"></button>
    </li>
  </template>

</div>

    );
  }
}

export default App;
