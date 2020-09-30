import React from 'react';
import { NavLink } from 'react-router-dom'

const NavBarLink = (props) => {
  return (
    <NavLink
        className={props.class}
        to={props.path}
        style={{
          color: 'black',
          textDecoration: 'none'
        }}
    >
        {props.text}
    </NavLink>
  )
}

export default NavBarLink;
