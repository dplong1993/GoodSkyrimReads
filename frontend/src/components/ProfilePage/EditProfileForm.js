import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as sessionActions from "../../store/session";

import styled from "styled-components";

const EditProfileFormPageWrapper = styled.div`
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
  .edit-button {
    display: flex;
    justify-content: center;
    width: 300px;
    margin: auto;
    margin-top: 15px;
  }
`;

function EditProfileFormPage({ setShowModal }) {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [errors, setErrors] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    return dispatch(
      sessionActions.editUserThunk(sessionUser, {
        email,
        username,
        firstName,
        lastName,
      })
    )
      .then(() => setShowModal(false))
      .catch(async (res) => {
        const data = await res.json();
        if (data && data.errors) setErrors(data.errors);
        console.log(errors);
      });
  };

  return (
    <EditProfileFormPageWrapper>
      <form className="form" onSubmit={handleSubmit}>
        <h1>Edit Profile Information for SkyrimGoodReads</h1>
        <ul className={errors.length > 0 ? "errors" : ""}>
          {errors.map((error, idx) => (
            <li key={idx}>{error}</li>
          ))}
        </ul>
        <label className="input-fields">
          Change Email
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label className="input-fields">
          Change Username
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <label className="input-fields">
          Change FirstName
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </label>
        <label className="input-fields">
          Change LastName
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </label>
        <button className="edit-button" type="submit">
          Change Info
        </button>
      </form>
    </EditProfileFormPageWrapper>
  );
}

export default EditProfileFormPage;
