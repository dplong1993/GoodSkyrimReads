import React from 'react';
import Main from './Main';
import Sidebar from './Sidebar';
import styled from 'styled-components';

const HomeWrapper = styled.div`
  display: flex;
  background-color: #f9f7f4;
  height: 100%;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
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
