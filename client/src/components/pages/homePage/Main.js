import React, { useEffect } from 'react';
import styled from 'styled-components';
import { loadBooks } from '../../../store/books';
import { useDispatch, useSelector } from 'react-redux';
import Book from './Book';

const MainWrapper = styled.div`
  margin-left: 75px;
  margin-top: 50px;
`;

const Main = () => {
  const dispatch = useDispatch();
  const books = useSelector(state => state.books);

  useEffect(() => {
    dispatch(loadBooks());
  }, [dispatch])

  return (
    <MainWrapper>
      {books.map(book => {
        return (
        <Book key={book.id} book={book}/>
        )
      })}
    </MainWrapper>
  );
};

export default Main;
