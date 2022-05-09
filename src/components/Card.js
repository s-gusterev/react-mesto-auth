import React from "react";
import CurrentUserContext from "../contexts/CurrentUserContext";
function Card(props) {

  const currentUser = React.useContext(CurrentUserContext);

  const isOwn = props.ownerId === currentUser._id;

  const cardDeleteButtonClassName = (
    `card__del ${isOwn ? 'card__del_visible' : 'card__del_hidden'}`
  );

  const isLiked = props.likes.some(i => i._id === currentUser._id);

  const cardLikeButtonClassName = (`card__like ${isLiked ? 'card__like_active' : ''}`);

  function handleClick() {
    props.onCardClick(props.card);
  }

  return (
    <li className="card">
      <div className="card__text">
        <h2 className="card__title">{props.name}</h2>
        <div className="card__like-section">
          <button className={cardLikeButtonClassName} type="button"></button>
          <span className="card__like-info">{props.likesNumber}</span>
        </div>
      </div>
      <div className="card__img" style={{ backgroundImage: `url(${props.link})` }} onClick={handleClick} ></div>
      <button className={cardDeleteButtonClassName} type="button"></button>
    </li>
  )
}

export default Card;
