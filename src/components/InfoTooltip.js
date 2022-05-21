import React from 'react';
import iconOk from '../images/icon-ok.svg';

function InfoTooltip(props) {
  return (
    <div
      className={`${
        props.isOpen ? 'popup_opened' : ''
      } popup popup_background_light root__popup`}
    >
      <div className='popup__container popup__container_type_auth'>
        <img className='popup__img-auth' src={iconOk} alt='Ok' />
        <p className='popup__text'>Вы успешно зарегистрировались!</p>
        <button
          className='popup__close'
          type='button'
          aria-label='Закрыть'
          onClick={props.onClose}
        ></button>
      </div>
    </div>
  );
}

export default InfoTooltip;
