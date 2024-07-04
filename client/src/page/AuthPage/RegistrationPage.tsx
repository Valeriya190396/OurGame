import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAppDispatch } from '../../app/store/store';
import { registrationThunk } from '../../entities/users/usersSlice';


function RegistrationPage(): JSX.Element {
  const dispatch = useAppDispatch();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [checkPassword, setCheckPassword] = useState('');

  const onHadleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (password.trim() === checkPassword.trim()) {
      dispatch(registrationThunk({ name: username, email, password }));
      
    }
  };

  return (
    <form onSubmit={onHadleSubmit}>
      <label htmlFor="name">
        Name:
        <input
          type="text"
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
          name="password"
          required
          value={checkPassword}
          onChange={(e) => setCheckPassword(e.target.value)}
        />
      </label>
      <br />
      <div className="button-container">
        <button type="submit">
          Sign up
        </button>
        <Link to="/authorization" className="login-button">
          Sign in
        </Link>
      </div>
    </form>
  );
}

export default RegistrationPage;