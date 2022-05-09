import React, { useState, useEffect } from "react";
import Header from "./Header";
import "../index.css";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";
import api from "../utils/api";
import CurrentUserContext from "../contexts/CurrentUserContext"

function App() {
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = useState(false);
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = useState(false);
  const [cards, setCards] = useState([]);
  const [selectedCard, setSelectedCard] = useState({
    isOpen: false,
    name: "",
    link: "",
  });

  const [currentUser, setCurrentUser] = useState({
    name: "",
    about: "",
    avatar: "",
    _id: ""
  });


  useEffect(() => {
    api.getProfile()
      .then((res) => {
        setCurrentUser({
          name: res.name,
          about: res.about,
          avatar: res.avatar,
          _id: res._id
        })

      })
      .catch((err) => {
        console.log(err)
      });

    api.getInitialCards()
      .then((res) => {
        setCards(res);
        console.log(res);
      })

      .catch((err) => {
        console.log(err)
      });
  }, []);


  console.log(currentUser)


  function handleCardClick(card) {
    console.log('click')
    setSelectedCard({
      isOpen: true,
      name: card.name,
      link: card.link
    })
  }


  function closeAllPopups(feature) {
    feature(false)
  }


  function handleCardLike(card) {
    // Снова проверяем, есть ли уже лайк на этой карточке
    const isLiked = card.likes.some(i => i._id === currentUser._id);

    // Отправляем запрос в API и получаем обновлённые данные карточки
    api.changeLikeCardStatus(card._id, !isLiked)
      .then((newCard) => {
        setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
      });
  }

  function handleCardDelete(card) {
    api.delCard(card._id)
      .then(() => {
        setCards((state) => state.filter(c => c._id !== card._id))
      })
  }

  return (

    <CurrentUserContext.Provider value={currentUser}>
      <div className="root__container">
        <Header />
        <Main
          onEditProfile={setEditProfilePopupOpen}
          onAddPlace={setAddPlacePopupOpen}
          onEditAvatar={setEditAvatarPopupOpen}
          onCardClick={handleCardClick}
          cards={cards}
          onCardLike={handleCardLike}
          onCardDelete={handleCardDelete}
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

        <ImagePopup onClose={() => closeAllPopups(setSelectedCard)} card={selectedCard} />

      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
