import React, { useState } from 'react';
import {Redirect} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import { login } from '../store/authentication';
import '../css/login.css';

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
    setPassword(e.target.value);
  }

  if (currentUserId) {
    return <Redirect to="/" />;
  }

  return (
    <div className="container">
      <main className="main-container">
        <h1>Sign in to GoodSkyrimReads</h1>
        <form onSubmit={handleSubmit}>
          <fieldset>
            <div class="input-fields">
              <label>Email address</label>
              <input type="email"
                    placeholder="you@yours.com"
                    onChange={updateEmail} />
            </div>
            <div class="input-fields">
              <label>Password</label>
              <input type="password"
                    onChange={updatePassword} />
            </div>
            <div className="spacer"></div>
            <div className="submit">
              <button type="submit">Sign in</button>
              <div className="signup">
                <span>
                  <span>Not a member?</span>
                  <a href="/signup">Sign up</a>
                </span>
              </div>
            </div>
          </fieldset>
        </form>
      </main>
    </div>
  );
}

export default Login;
