import React from 'react';
import { useSelector } from 'react-redux';
import Logout from './buttons/Logout';
import NavBarLink from './buttons/NavBarLink';

const AuthNavButtons = () => {
  const currentUserId = useSelector(state => state.authentication.id);

  return (
    <div className="auth-nav-buttons">
      {currentUserId ?
      <>
        <NavBarLink
          path = {'/profile'}
          text = {'Profile'}
          class = {'nav-button'}
        />
        <Logout />
      </>
      :<>
        <NavBarLink
          path = {'/login'}
          text = {'Login'}
          class = {'nav-button'}
        />
        <NavBarLink
          path = {'/signup'}
          text = {'Signup'}
          class = {'nav-button'}
        />
      </>}
    </div>
  )
};

export default AuthNavButtons;
