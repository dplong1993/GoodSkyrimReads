import React, { useState } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import "./LoginForm.css";
import SignupFormModal from "../SignupFormModal";

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
    <form className="form" onSubmit={handleSubmit}>
      <h1>Log In to GoodSkyrimReads</h1>
      <ul className="errors">
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
  );
}

export default LoginFormPage;
