import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const BookTileWrapper = styled.div`
  display: flex;
  align-items: center;
  font-family: "Lato", "Helvetica Neue", Helvetica, Arial, sans-serif;
  margin-bottom: 15px;
  border-top: 1px solid #e8e8e8;
  justify-content: space-between;

  .book-cover {
    width: 65px;
    align-self: center;
  }

  .user-shelf {
    display: flex;
    margin-bottom: 5px;
    font-size: 13px;
    color: #382110;
    width: 300px;
  }

  .shelf-verb {
    padding-left: 5px;
  }

  .book-title {
    color: #333333;
    font-family: "Merriweather", "Georgia", serif;
    font-size: 120%;
    font-weight: bold;
    line-height: 1.3;
  }

  .book-author {
    color: #181818;
    font-size: 13px;
  }

  .book-actions {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .shelf-actions {
    display: flex;
    background-color: #f2f2f2;
    border: 1px solid #dddddd;
  }

  .check-mark {
    width: 35px;
    background-color: #f2f2f2;
    height: 100%;
    margin-right: 5px;
  }

  .rate-text {
    color: #999999;
    font-size: 11px;
  }

  .stars {
    color: #999999;
    font-size: 11px;
  }
`;

const BookTile = ({ book }) => {
  return (
    <BookTileWrapper>
      <Link to={`/books/${book.id}`}>
        <img
          className="book-cover"
          alt="book-cover"
          src={book.coverPhotoUrl}
        ></img>
      </Link>
      <div className="book-info">
        <div className="user-shelf">
          <Link to="/profile">Dillon Long</Link>
          <div className="shelf-verb">is currently reading</div>
        </div>
        <div>
          <Link className="book-title" to={`/books/${book.id}`}>
            {book.title}
          </Link>
        </div>
        <div className="book-author">by {book.author}</div>
      </div>
      <div className="book-actions">
        <div className="shelf-actions">
          <div>
            <img
              className="check-mark"
              alt="check-mark"
              src="https://goodskyrimreads.s3.us-east-2.amazonaws.com/checkmark.jpg"
            />
          </div>
          <div className="shelf-name">Currently Reading</div>
        </div>
        <div className="rate-text">Rate this book</div>
        <div className="stars">Rating stars</div>
      </div>
    </BookTileWrapper>
  );
};

export default BookTile;
