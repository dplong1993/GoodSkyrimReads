import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { loadBook } from "../../store/currentBook";
import styled from "styled-components";

//Seems like navigating via the a link is causing a refresh
// which is causing state to reset. May not want that.

//Might need to refactor in case book has no series

const BookInfoPageWrapper = styled.div`
  margin: 0px auto;
  margin-top: 90px;
  width: 970px;
  background: #ffffff;
  display: flex;
  padding: 8px 10px;
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
`;

const BookInfoPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const book = useSelector((state) => state.currentBook);

  useEffect(() => {
    dispatch(loadBook(id));
  }, [id, dispatch]);

  if (book === []) {
    return null;
  }

  return (
    <BookInfoPageWrapper>
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
    </BookInfoPageWrapper>
  );
};

export default BookInfoPage;
