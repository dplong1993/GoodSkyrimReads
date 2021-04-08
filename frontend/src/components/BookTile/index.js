import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

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
    width: 200px;
  }

  .added-shelf-actions {
    display: flex;
    background-color: #f2f2f2;
    border: 1px solid #dddddd;
    width: 125px;
  }

  .unadded-shelf-actions {
    display: flex;
    justify-content: space-between;
    background-color: #409d69;
    border: 1px solid #dddddd;
    width: 125px;
  }

  .check-mark {
    width: 35px;
    background-color: #f2f2f2;
    height: 100%;
    margin-right: 5px;
  }

  .shelf-name {
    width: 100%;
  }

  .rate-text {
    color: #999999;
    font-size: 11px;
  }

  .stars {
    color: #999999;
    font-size: 11px;
  }

  .carat-button {
    background-color: #409d69;
    border: none;
    border-left: 1px solid grey;
  }

  .down-carat {
    width: 15px;
    height: 15px;
    background-color: #409d69;
  }
`;

const BookTile = ({ book, profile }) => {
  const { user } = useSelector((state) => state.session);

  console.log("book", book);

  const generateShelfVerb = () => {
    if (book.Read) return <div className="shelf-verb">has read</div>;
    if (book.ToRead) return <div className="shelf-verb">wants to read</div>;
    if (book.CurrRead)
      return <div className="shelf-verb">is currently reading</div>;
  };

  const generateShelfName = () => {
    if (book.Read) return <div className="shelf-name">Read</div>;
    if (book.ToRead) return <div className="shelf-name">To Read</div>;
    if (book.CurrRead) return <div className="shelf-name">Curr Read</div>;
  };

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
        {profile ? (
          <div className="user-shelf">
            <Link to="/profile">
              {user.firstName} {user.lastName}
            </Link>
            {generateShelfVerb()}
          </div>
        ) : null}

        <div>
          <Link className="book-title" to={`/books/${book.id}`}>
            {book.title}
          </Link>
        </div>
        <div className="book-author">by {book.author}</div>
      </div>
      <div className="book-actions">
        {profile ? (
          <div className="added-shelf-actions">
            <div>
              <img
                className="check-mark"
                alt="check-mark"
                src="https://goodskyrimreads.s3.us-east-2.amazonaws.com/checkmark.jpg"
              />
            </div>
            {generateShelfName()}
          </div>
        ) : (
          <div className="unadded-shelf-actions">
            <div className="unadded-shelf-name">To Read</div>
            <button className="carat-button">
              <img
                className="down-carat"
                alt="down-arrow"
                src="https://goodskyrimreads.s3.us-east-2.amazonaws.com/down-carat.png"
              />
            </button>
          </div>
        )}
        <div className="rate-text">Rate this book</div>
        <div className="stars">Rating stars</div>
      </div>
    </BookTileWrapper>
  );
};

export default BookTile;
