import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/logo.svg';
import '../index.css';

function Header(props) {
  return (
    <header className='header root__header'>
      <a href='/' className='logo header__logo'>
        <img src={logo} alt='Логотип' className='logo__img' />
      </a>
      {props.loggedIn ? (
        <div className='header__login'>
          <p className='header__login-info'>email@emal.ru</p>
          <a
            className='header__login-link header__login-link_type_true'
            href='/'
          >
            Выйти
          </a>
        </div>
      ) : (
        <div className='header__login'>
          <Link
            className='header__login-link header__login-link_type_false'
            to={props.loginPatch}
          >
            {props.textLink}
          </Link>
        </div>
      )}
    </header>
  );
}

export default Header;
