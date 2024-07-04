import React, { useState } from 'react';
import { useAppDispatch } from '../../app/store/store';
import { authorizationThink } from '../../entities/users/usersSlice';




function AuthorizationPage(): JSX.Element {
  const dispatch = useAppDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onHadleSubmit = (e: React.FormEvent<HTMLFormElement>):void => {
    e.preventDefault();
    
        dispatch(authorizationThink({ email, password }));
      
  };

  return (
    <form onSubmit={onHadleSubmit}>
      <input
        type="login"
        name="login"
        placeholder="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        name="password"
        placeholder="password"
        required
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">login</button>
    </form>
  );
}

export default AuthorizationPage;