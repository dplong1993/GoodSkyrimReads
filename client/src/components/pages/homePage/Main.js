import React, { useEffect } from 'react';
import styled from 'styled-components';
import { loadBooks } from '../../../store/books';
import { useDispatch, useSelector } from 'react-redux';

const MainWrapper = styled.div`
  margin-left: 25px;
`;

const Main = () => {
  const dispatch = useDispatch();
  // const books = useSelector(state => state.books);

  useEffect(() => {
    dispatch(loadBooks());
  }, [dispatch])

  return (
    <MainWrapper>
      <h1>Main Component</h1>
    </MainWrapper>
  );
};

export default Main;
