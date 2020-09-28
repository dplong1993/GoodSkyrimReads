import React, { useState } from 'react';
import {Redirect} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import { login } from '../store/authentication';

const Login = () =>  {
  const [email, setEmail] = useState('demo@example.com');
  const [password, setPassword] = useState('password');
  const dispatch = useDispatch();
  const currentUserId = useSelector(state => state.authentication.id);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
  }

  const updateEmail = (e) => {
    setEmail(e.target.value);
  }

  const updatePassword = (e) => {
    setEmail(e.target.value);
  }

  if (currentUserId) {
    return <Redirect to="/" />;
  }

  return (
    <main>
      <form onSubmit={handleSubmit}>
        <input type="text"
              placeholder="Email"
              value={email}
              onChange={updateEmail} />
        <input type="password"
              placeholder="Password"
              value={password}
              onChange={updatePassword} />
        <button type="submit">Login</button>
      </form>
    </main>
  );
}

export default Login;
