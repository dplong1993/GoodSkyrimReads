import React from 'react';
import AuthNavButtons from './AuthNavButtons';
import Logo from './buttons/Logo';
import NavBarButtons from './NavBarButtons';
import styled from 'styled-components';

const NavBarWrapper = styled.div`
  margin: 0;
  list-style-type: none;
  background-color: #F4F1EA;
  padding: 0;

  .nav-bar-content {
    margin-left: 20px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
`;

const NavBar = () => {
  return (
  <nav>
    <NavBarWrapper>
      <div className="nav-bar-content">
        <Logo />
        <NavBarButtons />
        <AuthNavButtons />
      </div>
    </NavBarWrapper>
  </nav>
)};

export default NavBar;
