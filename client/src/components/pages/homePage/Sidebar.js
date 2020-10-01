import React from 'react';
import Bookshelves from './Bookshelves';
import CurrentlyReading from './CurrentlyReading';
import WantToRead from './WantToRead';
import styled from 'styled-components';

const SideBarWrapper = styled.div`

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
