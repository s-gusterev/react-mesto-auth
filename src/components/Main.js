import React, { useState, useEffect } from "react";
import "../index.css";
import api from "../utils/api";
import Card from "./Card";

function Main({ onEditAvatar, onAddPlace, onEditProfile, onCardClick}) {
  // const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = useState(false);

  const [userName, setUsername] = useState("");
  const [userDescription, setUserDescription] = useState("");
  const [userAvatar, setUserAvatar] = useState("");
  const [cards, setCards] = useState([]);

  useEffect(() => {
    api.getProfile()
    .then((res) => {
      setUsername(res.name);
      setUserDescription(res.about);
      setUserAvatar(res.avatar);

      console.log(res);
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
  },[]);

  function handleEditAvatarClick() {
    onEditAvatar(true);
  }

  function handleEditProfileClick() {
    onEditProfile(true);
  }
  function handleAddPlaceClick() {
    onAddPlace(true);
  }

  return (
    <main className="main">
      <section className="profile main__profile">
        <div className="profile__info">
          <div
            className="profile__avatar"
            style={{ backgroundImage: `url(${userAvatar})` }}
          >
            <button
              className="profile__btn-edit-avatar"
              type="button"
              aria-label="Редактировать аватар"
              onClick={handleEditAvatarClick}
            ></button>
          </div>
          <div className="profile__name">
            <h1 className="profile__title">{userName}</h1>
            <p className="profile__subtitle">{userDescription}</p>
            <button
              className="profile__btn-edit-profile"
              type="button"
              aria-label="Редактировать данные профиля"
              onClick={handleEditProfileClick}
            ></button>
          </div>
          <button
            className="profile__btn-add-place"
            type="button"
            aria-label="Добавить место"
            onClick={handleAddPlaceClick}
          ></button>
        </div>
        <ul className="cards">
          {cards.map((card) => (
            <Card  name={card.name} likes={card.likes.length} link={card.link} key={card._id} onCardClick={onCardClick} card={card}/>
          ))}
        </ul>
      </section>
    </main>
  );
}

export default Main;
