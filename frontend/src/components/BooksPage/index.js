import React, { useEffect } from "react";
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
  }
`;

const BooksPage = () => {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.books);

  useEffect(() => {
    dispatch(loadBooks());
  }, [dispatch]);

  if (!books) {
    return null;
  }
  return (
    <BooksPageWrapper>
      <h1>GoodSkyrimReads Library</h1>
      {books.map((book) => (
        <BookTile book={book} profile={false}></BookTile>
      ))}
      ;
    </BooksPageWrapper>
  );
};

export default BooksPage;
