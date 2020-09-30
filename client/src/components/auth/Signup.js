import React, { useState } from 'react';
import {Redirect} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import { signup } from '../../store/authentication';
import styled from 'styled-components';

const SignupFormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  width: 600px;
  padding: 28px 10px 34px 10px;
  border: 1px solid #d0d0c8;
  border-radius: 4px;
  box-shadow: 0px 1px 1px #d0d0c8;
  margin: 0 auto;
  background-color: white;
  text-align: center;

  h1 {
    display: block;
    width: 100%;
    text-align: center;
    color: #382110;
    background-color: transparent;
    font-size: 20px;
    font-family: "Merriweather", Georgia, 'Times New Roman', serif;
    font-weight: bold;
    margin-bottom: 15px;
    margin-top: 0;
    line-height: 24px;
  }

  h2{
    display: block;
    width: 100%;
    text-align: center;
    color: #333;
    background-color: transparent;
    font-size: 16px;
    font-family: "Lato", "Helvetica Neue", Arial, Helvetica, sans-serif;
    font-weight: bold;
    margin-top: 0;
    margin-bottom: 25px;
    line-height: 1.4;
    padding: 0;
  }

  form {
    display: flex;
    flex-direction: column;
    width: auto;
    color: #030303
  }

  fieldset {
    border: none;
    width: 300px;
    margin: 0 auto;
    padding: 0;
    text-align: left;
  }

  .input-fields {
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    margin-top: 8px;
    font-family: "Lato", "Helvetica Neue", Arial, Helvetica, sans-serif;
    color: #030303;
  }

  label {
    box-sizing: border-box;
    text-align: left;
    font-weight: bold;
    width: 100%;
    vertical-align: middle;
  }

  input {
    box-sizing: border-box;
    font-size: 15px;
    padding: 10px 4px;
    border: 1px solid #ccc;
    border-radius: 3px;
    font-weight: bold;
    width: 300px;
    background: #FFFFFF;
  }

  .spacer {
    height: 10px;
  }

  .signup-submit {
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }

  button {
    font-size: 16px;
    padding: 12px 24px;
    border-radius: 3px;
    border: 1px solid #d6d0c4;
    appearance: none;
    cursor: pointer;
    display: inline-block;
    text-decoration: none;
    color: #333333;
    background-color: #f4f1ea;
    line-height: 1;
    font-weight: bold;
  }

  .signup-login {
    font-family: "Lato", "Helvetica Neue", Arial, Helvetica, sans-serif;
    text-align: center;
    margin-left: 24px;
    display: block;
  }

  a {
    margin-left: 10px;
    font-weight: normal;
    color: #00635d;
    text-decoration: none;
    cursor: pointer;
  }
`;

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
      <SignupFormWrapper className="loginandsignup-main">
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
      </SignupFormWrapper>
    </div>
  )
}

export default Signup;
