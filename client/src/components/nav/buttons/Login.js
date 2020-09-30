import React from 'react';
import { NavLink } from 'react-router-dom';


const Login = () => {
  return (
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
  );
};

export default Login;
