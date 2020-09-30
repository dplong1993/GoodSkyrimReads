import React from 'react';
import { NavLink } from 'react-router-dom';


const Signup = () => {
  return (
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
  );
};

export default Signup;
