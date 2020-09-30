import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import NavBarLink from './buttons/NavBarLink';
import { logout } from '../../store/authentication';
import styled from 'styled-components';

const AuthNavButtonsWrapper = styled.div`
  margin: auto;
  display: flex;
`;

const AuthNavButtons = () => {
  const currentUserId = useSelector(state => state.authentication.id);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
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
