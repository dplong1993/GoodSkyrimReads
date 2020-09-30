import React from 'react';
import Browse from './buttons/Browse';
import Home from './buttons/Home';
import MyBooks from './buttons/MyBooks';

const NavBarButtons = () => {
  return (
    <div className="nav-buttons">
      <li><Home /></li>
      <li><MyBooks /></li>
      <li><Browse /></li>
    </div>
  )
}

export default NavBarButtons;
