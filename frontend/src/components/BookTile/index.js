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
    cursor: pointer;
  }

  .carat-button: focus {
    outline: none;
  }

  .down-carat {
    width: 15px;
    height: 15px;
    background-color: #409d69;
  }

  .dropdown-menu {
    display: flex;
    flex-direction: column;
    width: 125px;
  }

  .dropdown-button {
    background-color: white;
    border: none;
    text-align: left;
    padding-left: 10px;
    padding-bottom: 3px;
  }

  .dropdown-button:hover {
    background-color: #f1f1f1;
  }

  .dropdown-button:focus {
    outline: none;
  }
`;

const BookTile = ({ book, profile }) => {
  const { user } = useSelector((state) => state.session);
  const dispatch = useDispatch();
  const [showDropDown, setShowDropDown] = useState(false);
  const [shelfVerb, setShelfVerb] = useState("");
  const [shelfName, setShelfName] = useState("");

  const generateShelfInfo = () => {
    if (book.Read) {
      setShelfVerb("has read");
      setShelfName("Read");
    }
    if (book.ToRead) {
      setShelfVerb("wants to read");
      setShelfName("To Read");
    }
    if (book.CurrRead) {
      setShelfVerb("is currently reading");
      setShelfName("Curr Read");
    }
    return;
  };

  useEffect(() => {
    generateShelfInfo();
  }, []);

  const addBookToShelf = (e) => {
    e.preventDefault();
    if (e.target.innerText === "Read") {
      dispatch(addNewBook(book, user.id, e.target.innerText));
    }
    if (e.target.innerText === "ToRead") {
      console.log("IN TOREAD");
    }
    if (e.target.innerText === "CurrRead") {
      console.log("IN CURRREAD");
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
        {profile || shelfName != "" ? (
          generateAddedShelf()
        ) : (
          <>
            <div className="unadded-shelf-actions">
              <div className="unadded-shelf-name">To Read</div>
              <button
                onMouseEnter={() => {
                  setShowDropDown(true);
                  //May cause problems if I don't clear
                  setTimeout(() => setShowDropDown(false), 3000);
                }}
                onClick={() => setShowDropDown(false)}
                className="carat-button"
              >
                <img
                  className="down-carat"
                  alt="down-arrow"
                  src="https://goodskyrimreads.s3.us-east-2.amazonaws.com/down-carat.png"
                />
              </button>
            </div>
            {showDropDown ? (
              <div className="dropdown-menu hide">
                <button onClick={addBookToShelf} className="dropdown-button">
                  Read
                </button>
                <button onClick={addBookToShelf} className="dropdown-button">
                  CurrRead
                </button>
                <button onClick={addBookToShelf} className="dropdown-button">
                  ToRead
                </button>
              </div>
            ) : null}
          </>
        )}
        <div className="rate-text">Rate this book</div>
        <div className="stars">Rating stars</div>
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
        <div>
          All the books in the library are in your shelves! Congrats you big
          reader.
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
