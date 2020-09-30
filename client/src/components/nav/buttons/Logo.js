import React from 'react';
import { NavLink } from 'react-router-dom';

const Logo = () => {
  return (
    <NavLink
      to="/"
      style={{
        color: 'brown',
        textDecoration: 'none',
        fontSize: '20px',
      }}
    >
      GoodSkyrimReads
    </NavLink>
  );
};

export default Logo;
