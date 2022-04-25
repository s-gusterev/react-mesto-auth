import React from 'react';
import '../index.css';

function Main() {

 function handleEditAvatarClick(){
    document.querySelector('.popup_type_edit-avatar').classList.add('popup_opened');
  }

  function handleEditProfileClick(){
    document.querySelector('.popup_type_profile').classList.add('popup_opened');
  }
  function handleAddPlaceClick(){
  document.querySelector('.popup_type_card-add').classList.add('popup_opened');
  }

  
    return (
      <main className="main">
      <section className="profile main__profile">
        <div className="profile__info">
          <div className="profile__avatar">
            <img src="#" alt="Аватар пользователя" className="profile__img" />
            <button className="profile__btn-edit-avatar" type="button" aria-label="Редактировать аватар" onClick={handleEditAvatarClick}></button>
          </div>
          <div className="profile__name">
            <h1 className="profile__title"></h1>
            <p className="profile__subtitle"></p>
            <button className="profile__btn-edit-profile" type="button" aria-label="Редактировать данные профиля" onClick={handleEditProfileClick}></button>
          </div>
          <button className="profile__btn-add-place" type="button" aria-label="Добавить место" onClick={handleAddPlaceClick}></button>
        </div>
        <ul className="cards">
        </ul>
      </section>
    </main>
    );
}

export default Main;
