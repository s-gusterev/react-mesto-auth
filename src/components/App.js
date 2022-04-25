import React from 'react';
import Header from './Header';
import '../index.css';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';

function App () {
    return (
  <div className="root__container">
    <Header />
    <Main/>
    <Footer/>
    <PopupWithForm title="Новое место" name="card-add" btnText="Создать">
    <label className="popup__label" htmlFor="input-place">
    <input className="popup__input " type="text" name="place" id="input-place" required placeholder="Название"
      minLength="2" maxLength="30"/>
    <span className="popup__input-error input-place-error"></span>
  </label>
  <label className="popup__label" htmlFor="input-image">
    <input className="popup__input" type="url" name="image" id="input-image" required
      placeholder="Ссылка на картинку"/>
    <span className="popup__input-error input-image-error"></span>
  </label>"
    </PopupWithForm> 

    <PopupWithForm title="Редактировать профиль" name="profile" btnText="Сохранить">
    <label className="popup__label" htmlFor="input-name">
          <input className="popup__input" type="text" name="name" id="input-name" required placeholder="Имя" minLength="2"
            maxLength="40"/>
          <span className="popup__input-error input-name-error"></span>
        </label>
        <label className="popup__label" htmlFor="input-about">
          <input className="popup__input" type="text" name="about" id="input-about" required placeholder="Род деятельности"
            minLength="2" maxLength="200"/>
          <span className="popup__input-error input-about-error"></span>
        </label>
    </PopupWithForm> 

    <PopupWithForm title="Вы уверены?" name="confirm" btnText="Да" />
   
    <PopupWithForm title="Обновить аватар" name="edit-avatar" btnText="Обновить">
   <label className="popup__label" htmlFor="input-avatar">
        <input className="popup__input" type="url" name="avatar" id="input-avatar" required placeholder="Ссылка на аватар"/>
        <span className="popup__input-error input-avatar-error"></span>
      </label>
    </PopupWithForm> 

    

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

export default App;
