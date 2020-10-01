import React from 'react';
import styled from 'styled-components';
import { loadBooks } from '../../../store/books';
import { useDispatch } from 'react-redux';

const MainWrapper = styled.div`
  margin-left: 25px;
`;

const Main = () => {
  const dispatch = useDispatch();

  const handleClick = async () => {
    dispatch(loadBooks());
  }

  return (
    <MainWrapper>
      <h1>Main Component</h1>
      <button onClick={handleClick}>Get books</button>
    </MainWrapper>
  );
};

export default Main;
