import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
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
  const books = useSelector(state => state.books);

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
