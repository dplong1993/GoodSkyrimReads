import React, { useState } from 'react';
import {Redirect} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import { signup } from '../../store/authentication';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const dispatch = useDispatch();
  const currentUserId = useSelector(state => state.authentication.id);

  const handleSignUp = (e) => {
    e.preventDefault();
    dispatch(signup(email, password, name));
  }

  const handleChange = (e) => {
    const {id, value} = e.target;
    switch(id){
      case "email":
        setEmail(value);
        return;
      case "password":
        setPassword(value);
        return;
      case "name":
        setName(value);
        return;
      default:
        return;
    }
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
        <form onSubmit={handleSignUp}>
          <fieldset>
            <div className="input-fields">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                placeholder="Name"
                onChange={handleChange} />
            </div>
            <div className="input-fields">
              <label htmlFor="email">Email address</label>
              <input
                type="email"
                id="email"
                placeholder="you@yours.com"
                onChange={handleChange} />
            </div>
            <div className="input-fields">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                onChange={handleChange} />
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
