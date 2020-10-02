import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadBook } from '../../../store/currentbook';

//Seems like navigating via the a link is causing a refresh
// which is causing state to reset. May not want that.

const BookInfo = ({ match: { params: { id } } }) => {
  const dispatch = useDispatch();
  const book = useSelector(state => state.books)

  useEffect(() => {
    dispatch(loadBook(id));
  }, [id, dispatch])

  if(book === []){
    return null;
  }

  return (
    <h1>Book {book.id} Page</h1>
  );
};

export default BookInfo;
