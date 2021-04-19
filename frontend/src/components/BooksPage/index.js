import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadBooks } from "../../store/books";
import BookTile from "../BookTile";
import styled from "styled-components";

const BooksPageWrapper = styled.div`
  background: #f9f7f4;
  height: 100vh;
  width: 100vw;
  h1 {
    margin: 0;
    padding: 20px;
    text-align: center;
    color: #382110;
  }
`;

const BooksPage = () => {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.books);
  const shelvesObject = useSelector((state) => state.shelves);
  const [booksToShow, setBooksToShow] = useState([]);

  useEffect(() => {
    dispatch(loadBooks());
  }, [dispatch, shelvesObject]);

  useEffect(() => {
    let values = Object.values(shelvesObject);
    values = [...values[0], ...values[1], ...values[2]];
    const titles = values.map((book) => book.title);
    setBooksToShow(books.filter((book) => !titles.includes(book.title)));
  }, [shelvesObject, books]);

  if (!books) {
    return null;
  }
  return (
    <BooksPageWrapper>
      <h1>GoodSkyrimReads Library</h1>
      {booksToShow.length > 0 ? (
        booksToShow.map((book) => (
          <BookTile book={book} profile={false}></BookTile>
        ))
      ) : (
        <BookTile book="none" profile={false}></BookTile>
      )}
      ;
    </BooksPageWrapper>
  );
};

export default BooksPage;
