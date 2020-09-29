import React from 'react';
import { NavLink } from 'react-router-dom';
import AuthNavButtons from './AuthNavButtons';

const NavBar = () => {
  return (
  <nav>
    <ul className="nav-bar">
      <div className="nav-bar-content">
        <li>
          <div className="logo">
            GoodSkyrimReads
          </div>
        </li>
        <li>
          <button>
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
        </li>
        <li>
          <button>
            <NavLink
              to="/mybooks"
              style={{
                color: 'black',
                textDecoration: 'none'
              }}
              activeClass="active">
              My Books
            </NavLink>
          </button>
        </li>
        <li>
          <button>
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
        </li>
        <li>
          <button>
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
        </li>
        <AuthNavButtons />
      </div>
    </ul>
  </nav>
)};

export default NavBar;
