import React from 'react';
import { NavLink } from 'react-router-dom'
import styled from 'styled-components';

const NavBarLinkWrapper = styled.div`
  .link {
    font-size: 16px;
    padding: 12px 24px;
    border-radius: 3px;
    border: 1px solid #d6d0c4;
    appearance: none;
    cursor: pointer;
    display: inline-block;
    text-decoration: none;
    color: #333333;
    background-color: #f4f1ea;
    line-height: 1;
    font-weight: bold;
  }
`;

// Question about how I am passing in the handle
// prop. Is this the best way to do it. Is it ok
// to have it evaluate to undefined for all but
// the logout link?

const NavBarLink = (props) => {
  return (
    <NavBarLinkWrapper>
      <NavLink
          className='link'
          onClick={props.handle}
          to={props.path}
          style={{
            color: 'black',
            textDecoration: 'none'
          }}
      >
          {props.text}
      </NavLink>
    </NavBarLinkWrapper>
  )
}

export default NavBarLink;
