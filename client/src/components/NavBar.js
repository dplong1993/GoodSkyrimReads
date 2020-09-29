import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  console.log("HEY")
return (
  <nav>
    <ul>
        <li><NavLink to="/" activeClass="active">Home</NavLink></li>
        <li><NavLink to="/users" activeClass="active">Users</NavLink></li>
        <li><NavLink to="/login" activeClass="active">Login</NavLink></li>
    </ul>
  </nav>
)};

export default NavBar;
