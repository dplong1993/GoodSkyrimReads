import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { loadBook } from "../../store/currentBook";
import { addNewBook, deleteBookFromShelf } from "../../store/shelves";

const BookInfoPageWrapper = styled.div`
  margin: 0px auto;
  background: #f9f7f4;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  padding: 8px 10px;

  .book-info-holder {
    display: flex;
    width: 970px;
    margin: auto;
    margin-top: 100px;
    margin-bottom: 0px;
  }

  .imagecol {
    margin-right: 20px;
    margin-bottom: 10px;
  }

  .image {
    max-width: 150px;
    margin-bottom: 10px;
  }

  .book-info {
    width: 455px;
  }

  .title {
    width: 100%;
    font-weight: bold;
    font-family: "Merriweather", "Georgia", serif;
    color: #333333;
    font-size: 24px;
    line-height: 1.25;
    padding-bottom: 2px;
    margin: 4px 0px;
  }

  .series {
    color: #999999;
    font-family: "Merriweather", "Georgia", serif;
    font-size: 16px;
    margin: 4px 0px;
  }

  .author {
    display: flex;
    font-family: "Merriweather", "Georgia", serif;
    color: #333333;
    font-size: 16px;
  }

  .by {
    margin-right: 5px;
  }

  .meta {
    height: 20px;
    margin-bottom: 10px;
  }

  .description {
    line-height: 21px;
    font-family: "Merriweather", "Georgia", serif;
    font-size: 14px;
    overlap: break-word;
    color: rgb(51, 51, 51);
    padding-bottom: 10px;
    border-bottom: 1px solid rgb(221, 221, 221);
  }

  .button-holder {
    display: flex;
    justify-content: space-between;
    margin: auto;
    margin-top: 100px;
    width: 970px;
  }

  .delete-button {
    margin-left: auto;
    margin-right: auto;
  }

  .add-button,
  .delete-button {
    width: 200px;
    height: 75px;
    background-color: #dad3c8;
    font-size: 15px;
    font-weight: bold;
    color: #382110;
    border-color: #382110;
  }

  .add-button:hover,
  .delete-button:hover {
    background-color: #e8ddcb;
  }
`;

const BookInfoPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.session);
  const book = useSelector((state) => state.currentBook);
  const shelves = useSelector((state) => state.shelves);
  const [showAddButton, setShowAddButton] = useState(true);
  const [shelfName, setShelfName] = useState("");

  useEffect(() => {
    dispatch(loadBook(id));
  }, [id, dispatch]);

  useEffect(() => {
    setShowAddButton(true);
    setShelfName("");
    for (let key in shelves) {
      for (let i = 0; i < shelves[key].length; i++) {
        if (book.title === shelves[key][i].title) {
          const newShelfName = key[0].toUpperCase() + key.slice(1);
          setShowAddButton(false);
          setShelfName(newShelfName);
        }
      }
    }
  }, [shelves, book]);

  if (book === []) {
    return null;
  }

  const addBookToShelf = (e) => {
    dispatch(addNewBook(book, user.id, e.target.id));
  };

  const deleteBook = () => {
    dispatch(deleteBookFromShelf(book, user.id, shelfName));
  };

  const generateAddButtons = () => {
    return (
      <>
        <button id="Read" onClick={addBookToShelf} className="add-button">
          Add to Read Shelf
        </button>
        <button id="ToRead" onClick={addBookToShelf} className="add-button">
          Add to ToRead Shelf
        </button>
        <button id="CurrRead" onClick={addBookToShelf} className="add-button">
          Add to CurrRead Shelf
        </button>
      </>
    );
  };

  return (
    <BookInfoPageWrapper>
      <div className="book-info-holder">
        <div className="imagecol">
          <div>
            <img className="image" src={book.coverPhotoUrl} alt="Cover"></img>
          </div>
          <div className="interact-buttons"></div>
        </div>
        <div className="book-info">
          <h1 className="title">{book.title}</h1>
          <h2 className="series">({book.bookSeries})</h2>
          <div className="author">
            <div className="by">by</div>
            <div className="author-name">{book.author}</div>
          </div>
          <div className="meta"></div>
          <div className="description">{book.description}</div>
        </div>
      </div>
      <div className="button-holder">
        {showAddButton ? (
          generateAddButtons()
        ) : (
          <button onClick={deleteBook} className="delete-button">
            Delete from {shelfName} Shelf
          </button>
        )}
      </div>
    </BookInfoPageWrapper>
  );
};

export default BookInfoPage;
