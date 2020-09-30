import React from 'react';
import NavBarLink from './buttons/NavBarLink';

const NavBarButtons = () => {
  return (
    <div className="nav-buttons">
      <li><NavBarLink
        path={'/'}
        text={"Home"}
        class={"nav-button"}/>
      </li>
      <li><NavBarLink
        path={'/my-books'}
        text={"My Books"}
        class={"nav-button"}/>
      </li>
      <li><NavBarLink
        path={'/books'}
        text={"Browse"}
        class={"nav-button"}/>
      </li>
    </div>
  )
}

export default NavBarButtons;
