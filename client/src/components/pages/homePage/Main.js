import React from 'react';
import styled from 'styled-components';

const MainWrapper = styled.div`
  margin-left: 25px;
`;

const Main = () => {
  const handleClick = async () => {
    const res = await fetch(`/api/books`);
    const data = await res.json();
    console.log(data);
  }

  return (
    <MainWrapper>
      <h1>Main Component</h1>
      <button onClick={handleClick}>Get books</button>
    </MainWrapper>
  );
};

export default Main;
