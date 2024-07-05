import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../app/store/store';
import { refreshTokens, registrationThunk } from '../../entities/users/usersSlice';


function RegistrationPage(): JSX.Element {
  const navigation = useNavigate()
  const dispatch = useAppDispatch();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [checkPassword, setCheckPassword] = useState('');

  const onHadleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (password.trim() === checkPassword.trim()) {
      dispatch(registrationThunk({ name: username, email, password }));
      dispatch(refreshTokens())
      navigation('/categories')
    }
  };

  return (
    <form className='form' onSubmit={onHadleSubmit}>
      <h3 className='form__title'>Регистрация</h3>
      <label htmlFor="name">
        Name:
        <input
          type="text"
          className='form__input'
          name="name"
          required
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </label>
      <br />
      <label htmlFor="email">
        Email:
        <input
          type="email"
          name="email"
          className='form__input'
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <br />
      <label htmlFor="password">
        Password:
        <input
          type="password"
          name="password"
          className='form__input'
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      <br />
      <label htmlFor="password">
        Check password:
        <input
          type="password"
          className='form__input'
          name="password"
          required
          value={checkPassword}
          onChange={(e) => setCheckPassword(e.target.value)}
        />
      </label>
      <br />
      <div className="button-container">
        <button type="submit" className='form__btn'>
          Sign up
        </button>
      </div>
    </form>
  );
}

export default RegistrationPage;