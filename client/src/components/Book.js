import React from 'react';
import styled from 'styled-components';

const BookWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid grey;
  background-color: orange;
`;

const Book = ({ book }) => {
  return (
    <BookWrapper>
      <h1>{book.id}</h1>
      <h1>{book.title}</h1>
      <h1>{book.description}</h1>
      <h1>{book.author}</h1>
      <img src={book.coverPhotoUrl} alt="Cover"/>
    </BookWrapper>
  );
};

export default Book;
