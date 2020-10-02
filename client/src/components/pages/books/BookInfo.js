import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadBook } from '../../../store/currentbook';
import styled from 'styled-components';

//Seems like navigating via the a link is causing a refresh
// which is causing state to reset. May not want that.

//Might need to refactor in case book has no series

const BookInfoWrapper = styled.div`
  margin: 0px auto;
  width: 970px;
  background: #FFFFFF;
  display: flex;
`;

const BookInfo = ({ match: { params: { id } } }) => {
  const dispatch = useDispatch();
  const book = useSelector(state => state.currentBook)

  useEffect(() => {
    dispatch(loadBook(id));
  }, [id, dispatch])

  if(book === []){
    return null;
  }

  return (
    <BookInfoWrapper>
      <div className="imagecol">
        <div className="image">
          <img src={book.coverPhotoUrl} alt="Cover"></img>
        </div>
        <div className="interact-buttons">Buttons to interact with book</div>
      </div>
      <div className="book-info">
        <div className="title">{book.title}</div>
        <div className="series">{book.bookSeries}</div>
        <div className="author">{book.author}</div>
        <div className="meta">Book meta (ratings, reviews, etc)</div>
        <div className="description">{book.description}</div>
      </div>
    </BookInfoWrapper>
  );
};

export default BookInfo;
