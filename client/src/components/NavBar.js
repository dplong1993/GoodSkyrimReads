import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { logout } from '../store/authentication';

const NavBar = () => {
  const dispatch = useDispatch();
  const currentUserId = useSelector(state => state.authentication.id);

  const handleClick = () => {
    dispatch(logout());
  }

  return (
  <nav>
    <ul>
        <li><NavLink to="/" activeClass="active">Home</NavLink></li>
        {currentUserId ?
        <button onClick={handleClick}>Logout</button>:
        <>
          <li><NavLink to="/login" activeClass="active">Login</NavLink></li>
          <li><NavLink to="/signup" activeClass="active">Signup</NavLink></li>
        </>
        }
    </ul>
  </nav>
)};

export default NavBar;
