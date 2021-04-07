import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

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
  .shelf-name {
    display: flex;
    flex-direction: column;
  }
  a {
    color: #00635d;
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
          <Link to="my-books">0</Link>
          <Link to="my-books">0</Link>
          <Link to="my-books">0</Link>
        </div>
        <div className="shelf-name">
          <Link to="my-books">Want to Read</Link>
          <Link to="my-books">Currently Reading</Link>
          <Link to="my-books">Read</Link>
        </div>
      </div>
    </BookshelvesWrapper>
  );
};

export default Bookshelves;
