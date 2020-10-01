import React from 'react';
import styled from 'styled-components';

const BookshelvesWrapper = styled.div`
  width: 300px;
  font-family: "Lato", "Helvetica Neue", "Helvetica", sans-serif;

  .title {
    margin: 12px 0px 12px 8px;
    font-size: 14px;
  }

  .content {
    display: flex;
    margin-left: 8px;
  }

  .shelf-count {
    display: flex;
    flex-direction: column;
    padding-right: 12px;
  }

  .shelf-name{
    display: flex;
    flex-direction: column;
  }

  a {
    color: #00635D;
    text-decoration: none;
    font-size: 14px;
  }
`;

const Bookshelves = () => {
  return (
    <BookshelvesWrapper>
      <h3 className="title">BOOKSHELVES</h3>
      <div className="content">
        <div className="shelf-count">
          <a href="my-books">0</a>
          <a href="my-books">0</a>
          <a href="my-books">0</a>
        </div>
        <div className="shelf-name">
          <a href="my-books">Want to Read</a>
          <a href="my-books">Currently Reading</a>
          <a href="my-books">Read</a>
        </div>
      </div>
    </BookshelvesWrapper>
  );
};

export default Bookshelves;
