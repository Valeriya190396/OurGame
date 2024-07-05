import React, { useState } from 'react';
import { useAppDispatch } from '../../app/store/store';
import { authorizationThunk } from '../../entities/users/usersSlice';
import './AuthorizationPage.css'



function AuthorizationPage(): JSX.Element {
  const dispatch = useAppDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onHadleSubmit = (e: React.FormEvent<HTMLFormElement>):void => {
    e.preventDefault();
    
        dispatch(authorizationThunk({ email, password }));
      
  };

  return (
    <form className='form' onSubmit={onHadleSubmit}>
        <h3 className='form__title'>Вход</h3>
      <input
        type="login"
        name="login"
        className='form__input'
        placeholder="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        name="password"
        className='form__input'
        placeholder="password"
        required
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit" className='form__btn'>login</button>
    </form>
  );
}

export default AuthorizationPage;