import React, { useEffect } from 'react';
import '../index.css';

function Login(props) {
  useEffect(() => {
    props.loginText();
    props.loginPath();
  }, []);
  return (
    <section className='auth root__auth'>
      <h1 className='auth__title'>Вход</h1>
      <form name='login' className='auth__form'>
        <input
          className='auth__input auth__input_type_email'
          type='email'
          name='email'
          placeholder='Email'
          required
        />
        <input
          className='auth__input auth__input_type_password'
          type='password'
          name='password'
          placeholder='Пароль'
          required
        />
        <button className='auth__button' type='submit'>
          Войти
        </button>
      </form>
    </section>
  );
}

export default Login;
