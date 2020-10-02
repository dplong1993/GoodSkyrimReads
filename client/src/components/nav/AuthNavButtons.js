import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import NavBarLink from './buttons/NavBarLink';
import { logout } from '../../store/authentication';
import styled from 'styled-components';
import { Redirect } from 'react-router-dom';

const AuthNavButtonsWrapper = styled.div`
  display: flex;
  vertical-align: top;
  margin: 0 15px;
  font-family: "Lato", "Helvetica Neue", "Helvetica", sans-serif;
`;

const AuthNavButtons = () => {
  const currentUserId = useSelector(state => state.authentication.id);
  const loggedOut = useSelector(state => !state.authentication.id);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  }

  if (loggedOut) {
    return <Redirect to="/login" />;
  }

  return (
    <AuthNavButtonsWrapper>
      {currentUserId ?
      <>
        <NavBarLink
          path = {'/profile'}
          text = {'Profile'}
        />
        <NavBarLink
          path = {'/'}
          text = {'Logout'}
          handle = {handleLogout}
        />
      </>
      :<>
        <NavBarLink
          path = {'/login'}
          text = {'Login'}
        />
        <NavBarLink
          path = {'/signup'}
          text = {'Signup'}
        />
      </>}
    </AuthNavButtonsWrapper>
  )
};

export default AuthNavButtons;
