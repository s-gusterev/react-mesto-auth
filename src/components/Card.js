import React from "react";
import CurrentUserContext from "../contexts/CurrentUserContext";
function Card(props) {

  const currentUser = React.useContext(CurrentUserContext);

  const isOwn = props.ownerId === currentUser._id;

  console.log(currentUser._id)
  console.log(props.ownerId)

  // Создаём переменную, которую после зададим в `className` для кнопки удаления
  const cardDeleteButtonClassName = (
    `card__del ${isOwn ? 'card__del_visible' : 'card__del_hidden'}`
  );

  function handleClick() {
    props.onCardClick(props.card);
  }

  return (
    <li className="card">
      <div className="card__text">
        <h2 className="card__title">{props.name}</h2>
        <div className="card__like-section">
          <button className="card__like" type="button"></button>
          <span className="card__like-info">{props.likes}</span>
        </div>
      </div>
      <div className="card__img" style={{ backgroundImage: `url(${props.link})` }} onClick={handleClick} ></div>
      <button className={cardDeleteButtonClassName} type="button"></button>
    </li>
  )
}

export default Card;
