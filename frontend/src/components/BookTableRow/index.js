import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const BookTableRowWrapper = styled.div`
  border: 1px solid #d8d8d8;
  border-radius: 2px;
  background-color: #ffffff;
  margin-bottom: 16px;
  padding-top: 8px;
  line-height: 1.5;
  color: #333333;
  font-family: "Lato", "Helvetica Neue", "Helvetica", sans-serif;
  font-size: 14px;
  width: 450px;
  .book {
    display: flex;
    padding-right: 16px;
  }
  .cover {
    max-width: 120px;
    max-height: 170px;
    margin-right: 8px;
  }
  .info {
    font-size: 14px;
    font-family: "Lato", "Helvetica Neue", "Helvetica", sans-serif;
  }
  .title {
    font-weight: bold;
  }
  .author {
    display: flex;
    font-family: "Merriweather", "Georgia", serif;
  }
  .by {
    margin-right: 5px;
  }
  .interact {
    height: 30px;
  }
`;

const BookTableRow = ({ book }) => {
  return (
    <BookTableRowWrapper>
      <div className="book">
        <Link to={`/books/${book.id}`}>
          <img className="cover" src={book.coverPhotoUrl} alt="Cover" />
        </Link>
        <div className="info">
          <div className="title">{book.title}</div>
          <div className="author">
            <div className="by">by</div>
            <div className="author-name">{book.author}</div>
          </div>
          <div className="interact"></div>
          <div>{book.description}</div>
        </div>
      </div>
    </BookTableRowWrapper>
  );
};

export default BookTableRow;
