import React, { useEffect } from 'react';
import Main from './Main';
import Sidebar from './Sidebar';
import styled from 'styled-components';
import { loadBooks } from '../../../store/books';
import { useDispatch, useSelector } from 'react-redux';

const HomeWrapper = styled.div`
  display: flex;
  background-color: #f9f7f4;
  height: 100%;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
`;

const Home = () => {
  const dispatch = useDispatch();
  const books = useSelector(state => state.books);

  useEffect(() => {
    dispatch(loadBooks());
  }, [dispatch])

  if(!books){
    return null;
  }

  return (
    <HomeWrapper>
      <Sidebar />
      <Main />
    </HomeWrapper>
  );
};

export default Home;
