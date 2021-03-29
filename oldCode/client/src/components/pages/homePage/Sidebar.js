import React from 'react';
import Bookshelves from './Bookshelves';
import CurrentlyReading from './CurrentlyReading';
import WantToRead from './WantToRead';
import styled from 'styled-components';

const SideBarWrapper = styled.div`
  margin: 30px 20px 0px 20px;
  h3 {
    margin: 0;
  }
`;

const Sidebar = () => {
  return (
    <SideBarWrapper>
      <CurrentlyReading />
      <WantToRead />
      <Bookshelves />
    </SideBarWrapper>
  );
};

export default Sidebar;
