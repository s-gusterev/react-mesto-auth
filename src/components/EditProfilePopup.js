import React, { useState, useEffect } from "react";
import "../index.css";
import PopupWithForm from "./PopupWithForm";
import CurrentUserContext from "../contexts/CurrentUserContext"

function editProfilePopup(props) {

  const [name, setName] = useState('123');
  const [description, setDescription] = useState('123')

  // Подписка на контекст
  const currentUser = React.useContext(CurrentUserContext);

  // После загрузки текущего пользователя из API
  // его данные будут использованы в управляемых компонентах.
  useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser]);


  function handleSubmit(e) {
    // Запрещаем браузеру переходить по адресу формы
    e.preventDefault();

    // Передаём значения управляемых компонентов во внешний обработчик
    props.onUpdateUser({
      name,
      about: description,
    });
  }


  function handleChangeName(e) {
    setName(e.target.value);
  }

  function handleChangeNDescription(e) {
    setDescription(e.target.value);
  }


  return (
    <PopupWithForm
      title="Редактировать профиль"
      name="profile"
      btnText="Сохранить"
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSubmit={handleSubmit}

    // onClose={() => closeAllPopups(setEditProfilePopupOpen)}
    >
      <label className="popup__label" htmlFor="input-name">
        <input
          className="popup__input"
          type="text"
          name="name"
          id="input-name"
          required
          placeholder="Имя"
          minLength="2"
          maxLength="40"
          value={name}
          onChange={handleChangeName}
        />
        <span className="popup__input-error input-name-error"></span>
      </label>
      <label className="popup__label" htmlFor="input-about">
        <input
          className="popup__input"
          type="text"
          name="about"
          id="input-about"
          required
          placeholder="Род деятельности"
          minLength="2"
          maxLength="200"
          value={description}
          onChange={handleChangeNDescription}
        />
        <span className="popup__input-error input-about-error"></span>
      </label>
    </PopupWithForm>
  )
}

export default editProfilePopup;