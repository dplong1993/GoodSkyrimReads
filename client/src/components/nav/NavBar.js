import React from 'react';
import AuthNavButtons from './AuthNavButtons';
import Logo from './buttons/Logo';
import NavBarButtons from './NavBarButtons';

const NavBar = () => {
  return (
  <nav>
    <ul className="nav-bar">
      <div className="nav-bar-content">
        <Logo />
        <NavBarButtons />
        <AuthNavButtons />
      </div>
    </ul>
  </nav>
)};

export default NavBar;
