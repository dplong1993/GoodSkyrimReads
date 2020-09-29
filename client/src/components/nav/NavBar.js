import React from 'react';
import { NavLink } from 'react-router-dom';
import AuthNavButtons from './AuthNavButtons';
import NavBarButtons from './NavBarButtons';

const NavBar = () => {
  return (
  <nav>
    <ul className="nav-bar">
      <div className="nav-bar-content">
        <li>
          <div className="logo">
            GoodSkyrimReads
          </div>
        </li>
        <NavBarButtons />
        <AuthNavButtons />
      </div>
    </ul>
  </nav>
)};

export default NavBar;
