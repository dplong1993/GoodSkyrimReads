import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import TableRow from "../TableRow";

//Bottom border of header of table not working atm.

const CurrReadShelfWrapper = styled.div`
  margin: 0px auto;
  width: 100vw;
  height: 100vh;
  background: #f9f7f4;
  font-family: "Lato", "Helvetica Neue", Helvetica, Arial, sans-serif;
  .header {
    padding-bottom: 5px;
    border-bottom: 1px solid #ebe8d5;
    margin-bottom: 10px;
  }
  .main {
    display: flex;
  }
  h1 {
    margin: 0;
    display: flex;
    align-items: flex-end;
    font-size: 20px;
    font-family: "Merriweather", Georgia, "Times New Roman", serif;
    font-weight: bold;
  }
  .link-text {
    color: #00635d;
    text-decoration: none;
    font-size: 20px;
    font-family: "Merriweather", Georgia, "Times New Roman", serif;
    font-weight: bold;
  }
  .leftcol {
    padding-right: 10px;
    margin-right: 10px;
    max-width: 200px;
  }
  .book-shelves {
    padding-right: 10px;
    margin-right: 10px;
    border-bottom: 1px solid #ebe8d5;
  }
  .heading {
    font-family: "Lato", "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-size: 14px;
    font-weight: bold;
  }
  a {
    color: #00635d;
    font-family: "Lato", "Helvetica Neue", Helvetica, Arial, sans-serif;
    text-decoration: none;
  }
  .add-button {
    height: 21px;
    margin: 10px 0;
  }

  .head-field {
    vertical-align: bottom;
    padding: 12px 5px 5px 0;
    font-weight: bold;
    text-align: left;
    border-bottom: 2px solid #ebe8d5;
  }

  .no-match {
    padding: 20px;
    text-align: center;
    color: #999999;
    font-size: 14px;
  }

  .shelf-name {
    margin-left: 15px;
    background-color: #eae9e6;
    border-radius: 5px;
    color: #382110;
  }
`;

const CurrReadShelf = () => {
  const shelves = useSelector((state) => state.shelves);

  if (shelves.read.keys === undefined) return null;
  if (shelves.toRead.keys === undefined) return null;
  if (shelves.currRead.keys === undefined) return null;

  return (
    <CurrReadShelfWrapper>
      <div className="header">
        <h1>
          <Link className="link-text" to="/my-books">
            My Books
          </Link>
          <div>:</div>
          <div className="shelf-name">
            Curr-Read ({shelves.currRead.length})
          </div>
        </h1>
      </div>
      <div className="main">
        <div className="leftcol">
          <div className="book-shelves">
            <div className="heading">Bookshelves</div>
            <div className="allshelf">
              <Link to="/my-books">
                All (
                {shelves.read.length +
                  shelves.toRead.length +
                  shelves.currRead.length}
                )
              </Link>
            </div>
            <div className="readshelf">
              <Link to="/my-books/read">Read ({shelves.read.length})</Link>
            </div>
            <div className="currentlyreadingshelf">
              <Link to="/my-books/currentlyreading">
                Currently Reading ({shelves.currRead.length})
              </Link>
            </div>
            <div className="wanttoreadshelf">
              <Link to="/my-books/wanttoread">
                Want To Read ({shelves.toRead.length})
              </Link>
            </div>
            <div className="add-button"></div>
          </div>
        </div>
        <div className="rightcol">
          <table>
            <thead className="table-head">
              <tr className="table-head">
                <th className="cover head-field" alt="cover">
                  cover
                </th>
                <th className="title head-field" alt="title">
                  title
                </th>
                <th className="author head-field" alt="author">
                  author
                </th>
                <th className="avg-rating head-field" alt="avg rating">
                  avg rating
                </th>
                <th className="rating head-field" alt="rating">
                  rating
                </th>
                <th className="shelves head-field" alt="shelves">
                  shelves
                </th>
                <th className="review head-field" alt="review">
                  review
                </th>
                <th className="date-read head-field" alt="date read">
                  date read
                </th>
                <th className="date-added head-field" alt="date added">
                  date added
                </th>
              </tr>
            </thead>
            <tbody>
              {shelves.currRead.map((book) => {
                return <TableRow key={book.id} shelf="curr-read" book={book} />;
              })}
            </tbody>
          </table>
          {shelves.read.length === 0 ? (
            <div className="no-match">No matching items</div>
          ) : null}
        </div>
      </div>
    </CurrReadShelfWrapper>
  );
};

export default CurrReadShelf;
