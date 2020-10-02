import React, { useEffect } from 'react';
import styled from 'styled-components';
import { loadBooks } from '../../../store/books';
import { useDispatch, useSelector } from 'react-redux';
import Book from './Book';

const MainWrapper = styled.div`
  margin-left: 75px;
  margin-top: 30px;

  .title {
    margin: 0;
    margin-bottom: 12px;
    font-size: 14px;
  }
`;

const Main = () => {
  const dispatch = useDispatch();
  const books = useSelector(state => state.books);
  // const currentUserId = useSelector(state => state.authentication.id);

  useEffect(() => {
    dispatch(loadBooks());
  }, [dispatch])

  return (
    <MainWrapper>
      <h3 className="title">LIBRARY</h3>
      {books.map(book => {
        return (
        <Book key={book.id} book={book}/>
        )
      })}
    </MainWrapper>
  );
};

export default Main;
