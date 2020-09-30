import React from 'react';
import { useSelector } from 'react-redux';
import Login from './buttons/Login';
import Logout from './buttons/Logout';
import Profile from './buttons/Profile';
import Signup from './buttons/Signup';

const AuthNavButtons = () => {
  const currentUserId = useSelector(state => state.authentication.id);

  return (
    <div className="auth-nav-buttons">
      {currentUserId ?
      <>
        <Profile />
        <Logout />
      </>
      :<>
        <Login />
        <Signup />
      </>}
    </div>
  )
};

export default AuthNavButtons;
