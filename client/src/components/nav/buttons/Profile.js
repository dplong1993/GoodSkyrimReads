import React from 'react';
import { NavLink } from 'react-router-dom';

const Profile = () => {
  return (
    <button className="profile">
      <NavLink
        to="/profile"
        style={{
          color: 'black',
          textDecoration: 'none'
        }}
        activeClass="active">
        Profile
      </NavLink>
    </button>
  );
};

export default Profile;
