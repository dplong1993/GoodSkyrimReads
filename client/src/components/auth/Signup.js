import React, { useState } from 'react';
import {Redirect} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import { signup } from '../../store/authentication';
// import { signup } from '../store/users';

const Signup = () => {
  const [email, setEmail] = useState('demo@example.com');
  const [password, setPassword] = useState('password');
  const [name, setName] = useState('');
  const dispatch = useDispatch();
  const currentUserId = useSelector(state => state.authentication.id);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(signup(email, password, name));
  }

  const updateEmail = (e) => {
    setEmail(e.target.value);
  }

  const updatePassword = (e) => {
    setPassword(e.target.value);
  }

  const updateName = (e) => {
    setName(e.target.value);
  }

  if (currentUserId) {
    return <Redirect to="/" />;
  }

  return (
    <div className="loginandsignup">
      <main className="loginandsignup-main">
        <h1>Sign up for GSR</h1>
        <h2>Sign up to see what your friends are reading, get book recommendations,
and join the world’s largest community of readers.</h2>
        <h2 className="signupmessage">Sign Up with Email</h2>
        <form onSubmit={handleSubmit}>
          <fieldset>
            <div className="input-fields">
              <label>Name</label>
              <input type="text"
                    placeholder="Name"
                    onChange={updateName} />
            </div>
            <div className="input-fields">
              <label>Email address</label>
              <input type="email"
                    placeholder="you@yours.com"
                    onChange={updateEmail} />
            </div>
            <div className="input-fields">
              <label>Password</label>
              <input type="password"
                    onChange={updatePassword} />
            </div>
            <div className="spacer"></div>
            <div className="signup-submit">
              <button type="submit">Sign up</button>
              <div className="signup-login">
                <span>
                  <span>Already a member?</span>
                  <a href="/login">Sign in</a>
                </span>
              </div>
            </div>
          </fieldset>
        </form>
      </main>
    </div>
  )
}

export default Signup;
