import React from 'react';
import { NavLink } from 'react-router-dom';

const Logo = () => {
  return (
    <li>
      <div className="logo">
        <NavLink
          to="/"
          style={{
            color: 'brown',
            textDecoration: 'none',
            fontSize: '20px',
          }}
          activeClass="active">
          GoodSkyrimReads
        </NavLink>
      </div>
    </li>
  );
};

export default Logo;
