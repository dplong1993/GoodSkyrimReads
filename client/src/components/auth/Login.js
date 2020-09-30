import React, { useState } from 'react';
import {Redirect} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import { login } from '../../store/authentication';
// import '../css/login.css';

// DEMO BUTTON AND LOG IN BUTTON NOT WORKING CORRECTLY
// CLICKING SIGNIN BUTTON WITH NO INFORMATION IN THE INPUT
// FIELDS WILL LOG IN THE DEMO USER

const Login = () =>  {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const currentUserId = useSelector(state => state.authentication.id);

  const handleLogIn = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
  }

  const handleDemoLogIn = (e) => {
    e.preventDefault();
    const demoEmail = 'demo@example.com';
    const demoPassword = 'password';
    dispatch(login(demoEmail, demoPassword));
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
      default:
        return;
    }
  }

  if (currentUserId) {
    return <Redirect to="/" />;
  }

  // REFACTOR INTO A STYLED COMPONENT

  return (
    <div className="loginandsignup">
      <main className="loginandsignup-main">
        <h1>Sign in to GoodSkyrimReads</h1>
        <form onSubmit={handleLogIn}>
          <fieldset>
            <div className="input-fields">
              <label htmlFor="email">Email address</label>
              <input type="email"
                    id= "email"
                    placeholder="you@yours.com"
                    onChange={handleChange} />
            </div>
            <div className="input-fields">
              <label htmlFor="password">Password</label>
              <input type="password"
                    id="password"
                    onChange={handleChange} />
            </div>
            <div className="login-spacer"></div>
            <div className="login-submit">
              <div className="login-buttons">
                <button type="submit">Sign in</button>
                <button className="demouser" onClick={handleDemoLogIn}>Demo User</button>
              </div>
              <div className="login-signup">
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
