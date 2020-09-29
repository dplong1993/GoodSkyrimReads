import React from 'react';
import Browse from './buttons/Browse';
import Home from './buttons/Home';
import MyBooks from './buttons/MyBooks';
import Profile from './buttons/Profile';

const NavBarButtons = () => {
  return (
    <div className="nav-buttons">
      <li><Home /></li>
      <li><MyBooks /></li>
      <li><Browse /></li>
      <li><Profile /></li>
    </div>
  )
}

export default NavBarButtons;
