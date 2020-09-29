import React from 'react';
import { NavLink } from 'react-router-dom';

const Browse = () => {
  return (
    <button className="browse-button">
      <NavLink
        to="/books"
        style={{
          color: 'black',
          textDecoration: 'none'
        }}
        activeClass="active">
        Browse
      </NavLink>
    </button>
  );
};

export default Browse;
