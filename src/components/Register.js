import React from 'react';

function Register() {
  return (
    <section className='auth root__auth'>
      <h1 className='auth__title'>Регистрация</h1>
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
          Зарегистрироваться
        </button>
        <p className='auth__text'>
          Уже зарегистрированы?{' '}
          <a className='auth__link' href='/sign-in'>
            Войти
          </a>
        </p>
      </form>
    </section>
  );
}

export default Register;
