import React from 'react';
import styled from 'styled-components';

//Bottom border of header of table not working atm.

const MyBooksWrapper = styled.div`
  margin: 0px auto;
  width: 970px;
  background: #FFFFFF;
  font-family: "Lato", "Helvetica Neue", Helvetica, Arial, sans-serif;

  .header {
    padding-bottom: 5px;
    border-bottom: 1px solid #EBE8D5;
    margin-bottom: 10px;
  }

  .main {
    display: flex;
  }

  h1 {
    margin: 0;
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
    border-bottom: 1px solid #EBE8D5;
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

  .add-button{
    height: 21px;
    margin: 10px 0;
  }

  .table-head{
    border-bottom: 2px solid #EBE8D5;
  }

  .head-field{
    vertical-align: bottom;
    padding: 12px 5px 5px 0;
    font-weight: bold;
    text-align: left;
  }

  .cover{
    width: 50px;
    margin: 0;
  }

  .title {
    width: 25%;
  }

  .author {

  }
`;

const MyBooks = () => {
  return (
    <MyBooksWrapper>
      <div className="header">
        <h1>
          <a className="link-text" href="/my-books">My Books</a>
        </h1>
      </div>
      <div className="main">
        <div className="leftcol">
          <div className="book-shelves">
            <div className="heading">Bookshelves</div>
            <div className="allshelf">
              <a href="/my-books">All (0)</a>
            </div>
            <div className="readshelf">
              <a href="/my-books/read">Read (0)</a>
            </div>
            <div className="currentlyreadingshelf">
              <a href="/my-books/currentlyreading">Currently Reading (0)</a>
            </div>
            <div className="wanttoreadshelf">
              <a href="/my-books/wanttoread">Want To Read (0)</a>
            </div>
            <div className="add-button"></div>
          </div>
        </div>
        <div className="rightcol">
          <table>
            <thead className="table-head">
              <tr className="table-head">
                <th className='cover head-field' alt='cover'>cover</th>
                <th className="title head-field" alt='title'>title</th>
                <th className="author head-field" alt='author'>author</th>
                <th className="avg-rating head-field" alt='avg rating'>avg rating</th>
                <th className="rating head-field" alt='rating'>rating</th>
                <th className="shelves head-field" alt='shelves'>shelves</th>
                <th className="review head-field" alt='review'>review</th>
                <th className="date-read head-field" alt='date read'>date read</th>
                <th className="date-added head-field" alt='date added'>date added</th>
              </tr>
            </thead>
          </table>
        </div>
      </div>
    </MyBooksWrapper>
  );
};

export default MyBooks;
