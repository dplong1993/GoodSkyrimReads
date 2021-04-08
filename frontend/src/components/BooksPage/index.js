import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadBooks } from "../../store/books";
import BookTile from "../BookTile";
import styled from "styled-components";

const BooksPageWrapper = styled.div`
  h1 {
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
