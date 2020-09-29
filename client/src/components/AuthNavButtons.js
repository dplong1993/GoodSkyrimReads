import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { logout } from '../store/authentication';

const AuthNavButtons = () => {
  const dispatch = useDispatch();
  const currentUserId = useSelector(state => state.authentication.id);

  const handleClick = () => {
    dispatch(logout());
  }

  return (
    <div className="auth-nav-buttons">
      {currentUserId ?
      <button onClick={handleClick}>Logout</button>:
      <>
        <button>
          <li><NavLink
            to="/login"
            style={{
              color: 'black',
              textDecoration: 'none'
            }}
            activeClass="active">Login</NavLink>
          </li>
        </button>
        <button>
          <li><NavLink
            to="/signup"
            style={{
              color: 'black',
              textDecoration: 'none'
            }}
            activeClass="active">Signup</NavLink>
          </li>
        </button>
      </>}
    </div>
  )
};

export default AuthNavButtons;
