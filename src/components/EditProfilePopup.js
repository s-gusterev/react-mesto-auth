import React from "react";
import "../index.css";
import PopupWithForm from "./PopupWithForm";

function editProfilePopup(props) {
  return (
    <PopupWithForm
      title="Редактировать профиль"
      name="profile"
      btnText="Сохранить"
      isOpen={props.isOpen}
      onClose={props.onClose}

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
        />
        <span className="popup__input-error input-about-error"></span>
      </label>
    </PopupWithForm>
  )
}

export default editProfilePopup;