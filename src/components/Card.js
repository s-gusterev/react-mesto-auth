import React from "react";

function Card(props){

  function handleClick() {
    props.onCardClick(props.card);
  }  

  return(
    <li className="card">
    <div className="card__text">
      <h2 className="card__title">{props.name}</h2>
      <div className="card__like-section">
        <button className="card__like" type="button"></button>
        <span className="card__like-info">{props.likes}</span>
      </div>
    </div>
    <div className="card__img" style={{ backgroundImage: `url(${props.link})` }} onClick={handleClick} ></div>
    <button className="card__del" type="button"></button>
  </li>
  )
}

export default Card;