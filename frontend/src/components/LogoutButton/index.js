import React from "react";
import { useDispatch } from "react-redux";
import * as sessionActions from "../../store/session";
import styled from "styled-components";

const LogoutButtonWrapper = styled.div`
  .button {
    font-size: 16px;
    padding: 12px 24px;
    appearance: none;
    cursor: pointer;
    display: inline-block;
    text-decoration: none;
    color: #382110;
    background-color: #f4f1ea;
    line-height: 50px;
    font-weight: bold;
    font-family: "Lato", "Helvetica Neue", "Helvetica", sans-serif;
    padding: 0 15px;
    border: none;
  }
  .button:hover {
    color: #ffffff;
    background-color: #382110;
    outline: 0;
  }
`;

function LogoutButton() {
  const dispatch = useDispatch();

  const logout = (e) => {
    e.preventDefault();
    dispatch(sessionActions.logout());
  };

  return (
    <LogoutButtonWrapper>
      <button className="button" onClick={logout}>
        Log Out
      </button>
    </LogoutButtonWrapper>
  );
}

export default LogoutButton;
