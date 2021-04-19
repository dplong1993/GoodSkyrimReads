import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addNewBook } from "../../store/shelves";

const BookTileWrapper = styled.div`
  .holder {
    display: flex;
    align-items: center;
    font-family: "Lato", "Helvetica Neue", Helvetica, Arial, sans-serif;
    margin-bottom: 15px;
    border-top: 1px solid #e8e8e8;
    justify-content: space-between;
  }

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
    margin-right: 200px;
    width: 300px;
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

  .dropdown-menu {
    display: flex;
    flex-direction: column;
    width: 125px;
  }

  .add-button {
    background-color: #409d69;
    border: none;
    text-align: center;
    margin-left: 20px;
    width: 100px;
    height: 50px;
    font-weight: bold;
    border: 1px solid #dddddd;
    cursor: pointer;
  }

  .add-button:hover {
    background-color: #f1f1f1;
  }

  .add-button:focus {
    outline: none;
  }

  .default {
    display: flex;
    flex-direction: column;
  }

  .all-books-read {
    text-align: center;
    padding-top: 20px;
    font-size: 20px;
    color: #382110;
  }

  .celebration {
    padding-top: 60px;
    margin: auto;
    width: 800px;
    height: 500px;
  }
`;

const BookTile = ({ book, profile }) => {
  const { user } = useSelector((state) => state.session);
  let { currRead, read, toRead } = useSelector((state) => state.shelves);
  const dispatch = useDispatch();
  const [shelfVerb, setShelfVerb] = useState("");
  const [shelfName, setShelfName] = useState("");

  const generateShelfInfo = () => {
    read = read.map((bookObj) => bookObj.title);
    currRead = currRead.map((bookObj) => bookObj.title);
    toRead = toRead.map((bookObj) => bookObj.title);
    if (read.includes(book.title)) {
      setShelfVerb("has read");
      setShelfName("Read");
    }
    if (toRead.includes(book.title)) {
      setShelfVerb("wants to read");
      setShelfName("To Read");
    }
    if (currRead.includes(book.title)) {
      setShelfVerb("is currently reading");
      setShelfName("Curr Read");
    }
    return;
  };

  useEffect(() => {
    generateShelfInfo();
    // eslint-disable-next-line
  }, []);

  const addBookToShelf = (e) => {
    e.preventDefault();
    if (e.target.id === "Read") {
      dispatch(addNewBook(book, user.id, e.target.id));
    }
    if (e.target.id === "ToRead") {
      dispatch(addNewBook(book, user.id, e.target.id));
    }
    if (e.target.id === "CurrRead") {
      dispatch(addNewBook(book, user.id, e.target.id));
    }
  };

  const generateBookCover = () => {
    return (
      <Link to={`/books/${book.id}`}>
        <img
          className="book-cover"
          alt="book-cover"
          src={book.coverPhotoUrl}
        ></img>
      </Link>
    );
  };

  const generateBookInfo = () => {
    return (
      <div className="book-info">
        {profile ? (
          <div className="user-shelf">
            <Link to="/profile">
              {user.firstName} {user.lastName}
            </Link>
            <div className="shelf-verb">{shelfVerb}</div>
          </div>
        ) : null}

        <div>
          <Link className="book-title" to={`/books/${book.id}`}>
            {book.title}
          </Link>
        </div>
        <div className="book-author">by {book.author}</div>
      </div>
    );
  };

  const generateBookActions = () => {
    return (
      <div className="book-actions">
        {profile || shelfName !== "" ? (
          generateAddedShelf()
        ) : (
          <>
            <div className="unadded-shelf-actions">
              <button id="Read" onClick={addBookToShelf} className="add-button">
                Add to Read Shelf
              </button>
              <button
                id="CurrRead"
                onClick={addBookToShelf}
                className="add-button"
              >
                Add to CurrRead Shelf
              </button>
              <button
                id="ToRead"
                onClick={addBookToShelf}
                className="add-button"
              >
                Add to ToRead Shelf
              </button>
            </div>
          </>
        )}
      </div>
    );
  };

  const generateAddedShelf = () => {
    return (
      <div className="added-shelf-actions">
        <div>
          <img
            className="check-mark"
            alt="check-mark"
            src="https://goodskyrimreads.s3.us-east-2.amazonaws.com/checkmark.jpg"
          />
        </div>
        <div className="shelf-name">{shelfName}</div>
      </div>
    );
  };

  return (
    <BookTileWrapper>
      {book === "none" ? (
        <div className="default">
          <div className="all-books-read">
            All the books in the library are in your shelves! Congrats you big
            reader.
          </div>
          <img
            className="celebration"
            alt="celebration"
            src="https://goodskyrimreads.s3.us-east-2.amazonaws.com/celebration-kiddush-220x220.jpg"
          />
        </div>
      ) : (
        <div className="holder">
          <>{generateBookCover()}</>
          <>{generateBookInfo()}</>
          <>{generateBookActions()}</>
        </div>
      )}
    </BookTileWrapper>
  );
};

export default BookTile;
