import React, { useState } from "react";
import Header from "./Header";
import "../index.css";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";

function App() {
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = useState(false);
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = useState(false);
  const[selectedCard, setSelectedCard] = useState({isOpen: false, 
    name: "", 
    link: "", })

  function handleCardClick(card){
    console.log('click')
    setSelectedCard({
      isOpen:true,
      name: card.name,
      link: card.link
    })
  }


  function closeAllPopups(feature) {
    feature(false)
  }

  return (
    <div className="root__container">
      <Header />
      <Main
        onEditProfile={setEditProfilePopupOpen}
        onAddPlace={setAddPlacePopupOpen}
        onEditAvatar={setEditAvatarPopupOpen}
        onCardClick={handleCardClick}
      />
      <Footer />
      <PopupWithForm
        title="Новое место"
        name="card-add"
        btnText="Создать"
        isOpen={isAddPlacePopupOpen}
        onClose={() => closeAllPopups(setAddPlacePopupOpen)}
      >
        <label className="popup__label" htmlFor="input-place">
          <input
            className="popup__input "
            type="text"
            name="place"
            id="input-place"
            required
            placeholder="Название"
            minLength="2"
            maxLength="30"
          />
          <span className="popup__input-error input-place-error"></span>
        </label>
        <label className="popup__label" htmlFor="input-image">
          <input
            className="popup__input"
            type="url"
            name="image"
            id="input-image"
            required
            placeholder="Ссылка на картинку"
          />
          <span className="popup__input-error input-image-error"></span>
        </label>
        "
      </PopupWithForm>

      <PopupWithForm
        title="Редактировать профиль"
        name="profile"
        btnText="Сохранить"
        isOpen={isEditProfilePopupOpen}
        onClose={() => closeAllPopups(setEditProfilePopupOpen)}
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

      <PopupWithForm title="Вы уверены?" name="confirm" btnText="Да" />

      <PopupWithForm
        title="Обновить аватар"
        name="edit-avatar"
        btnText="Обновить"
        isOpen={isEditAvatarPopupOpen}
        onClose={() => closeAllPopups(setEditAvatarPopupOpen)}
      >
        <label className="popup__label" htmlFor="input-avatar">
          <input
            className="popup__input"
            type="url"
            name="avatar"
            id="input-avatar"
            required
            placeholder="Ссылка на аватар"
          />
          <span className="popup__input-error input-avatar-error"></span>
        </label>
      </PopupWithForm>

      <ImagePopup onClose={() => closeAllPopups(setSelectedCard)} card={selectedCard}/>  

    </div>
  );
}

export default App;
