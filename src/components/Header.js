import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/logo.svg';
import '../index.css';

function Header(props) {
  const { email } = props.userData || {};
  return (
    <header className='header root__header'>
      <Link to='/' className='logo header__logo'>
        <img src={logo} alt='Логотип' className='logo__img' />
      </Link>
      {props.loggedIn ? (
        <div className='header__login'>
          <p className='header__login-info'>{email}</p>
          <Link
            onClick={props.handleSignOut}
            className='header__login-link header__login-link_type_true'
            to='/'
          >
            Выйти
          </Link>
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
