import React, { useState, useEffect } from "react";
import "../index.css";
import api from "../utils/api";

function Main({ onEditAvatar, onAddPlace, onEditProfile }) {
  // const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = useState(false);

  const [userName, setUsername] = useState("Имя Фамилия");
  const [userDescription, setUserDescription] = useState("Обо мне");
  const [userAvatar, setUserAvatar] = useState("Изображение");
  const [cards, setCards] = useState([]);

  useEffect(() => {
    api.getProfile().then((res) => {
      setUsername(res.name);
      setUserDescription(res.about);
      setUserAvatar(res.avatar);

      console.log(res);
    });

    api.getInitialCards().then((res) => {
      setCards(res);
      console.log(res);
    });
  }, []);

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
            {/* <img
              src={`{userAvatar}`}
              alt="Аватар пользователя"
              className="profile__img"
            /> */}
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
            <li className="card" key={card._id}>
              <div className="card__text">
                <h2 className="card__title">{card.name}</h2>
                <div className="card__like-section">
                  <button className="card__like" type="button"></button>
                  <span className="card__like-info"></span>
                </div>
              </div>
              <img className="card__img" src="#" alt="изображение" />
              <button className="card__del" type="button"></button>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}

export default Main;
