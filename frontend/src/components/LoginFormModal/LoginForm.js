import React, { useState } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import styled from "styled-components";

const LoginFormPageWrapper = styled.div`
  .errors {
    width: 300px;
    margin: auto;
    color: red;
    text-align: center;
    padding: 0px;
  }

  .form {
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    width: 600px;
    height: 100%;
    padding: 28px 10px 34px 10px;
    border: 1px solid #d0d0c8;
    border-radius: 4px;
    box-shadow: 0px 1px 1px #d0d0c8;
    margin: 0 auto;
    background-color: white;
    text-align: center;
  }

  h1 {
    display: block;
    width: 100%;
    text-align: center;
    color: #382110;
    background-color: transparent;
    font-size: 25px;
    font-family: "Merriweather", Georgia, "Times New Roman", serif;
    font-weight: bold;
    margin-bottom: 15px;
    margin-top: 0;
    line-height: 24px;
  }

  .input-fields {
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    margin-top: 8px;
    font-family: "Lato", "Helvetica Neue", Arial, Helvetica, sans-serif;
    color: #030303;
    align-items: center;
    font-weight: bold;
    font-size: 17px;
  }

  input {
    box-sizing: border-box;
    font-size: 15px;
    padding: 10px 4px;
    border: 1px solid #ccc;
    border-radius: 3px;
    font-weight: bold;
    width: 300px;
    background: #ffffff;
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

  .login-buttons {
    display: flex;
    justify-content: center;
    margin-top: 50px;
  }

  #form-submit {
    margin-right: 70px;
  }
`;

function LoginFormPage() {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const [credential, setCredential] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);

  if (sessionUser) return <Redirect to="/" />;

  const dispatchLogin = (body) => {
    return dispatch(sessionActions.login(body)).catch(async (res) => {
      const data = await res.json();
      if (data && data.errors) setErrors(data.errors);
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    if (e.target.id === "demo-login") {
      return dispatchLogin({ credential: "Demo-lition", password: "password" });
    }
    return dispatchLogin({ credential, password });
  };

  return (
    <LoginFormPageWrapper>
      <form className="form" onSubmit={handleSubmit}>
        <h1>Log In to GoodSkyrimReads</h1>
        <ul className={errors.length > 0 ? "errors" : ""}>
          {errors.map((error, idx) => (
            <span className="error" key={idx}>
              {error}
            </span>
          ))}
        </ul>
        <label className="input-fields">
          Username or Email
          <input
            type="text"
            value={credential}
            onChange={(e) => setCredential(e.target.value)}
            required
          />
        </label>
        <label className="input-fields">
          Password
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
        <div className="login-buttons">
          <button id="form-submit" type="submit">
            Log In
          </button>
          <button id="demo-login" onClick={handleSubmit}>
            Demo User
          </button>
        </div>
      </form>
    </LoginFormPageWrapper>
  );
}

export default LoginFormPage;
