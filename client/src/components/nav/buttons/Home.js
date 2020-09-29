import React from 'react';
import { NavLink } from 'react-router-dom';


const Home = () => {
  return (
    <button className="home-button">
      <NavLink
        to="/"
        style={{
          color: 'black',
          textDecoration: 'none'
        }}
        activeClass="active">
        Home
      </NavLink>
    </button>
  );
};

export default Home;
