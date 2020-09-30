import React from 'react';
import Main from './Main';
import Sidebar from './Sidebar';
import styled from 'styled-components';

const HomeWrapper = styled.div`
  display: flex;
`;

const Home = () => {
  return (
    <HomeWrapper>
      <Sidebar />
      <Main />
    </HomeWrapper>
  );
};

export default Home;
