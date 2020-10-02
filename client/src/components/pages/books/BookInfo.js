import React from 'react';

const BookInfo = ({ match: { params: { id } } }) => {
  return (
    <h1>Book {id} Page</h1>
  );
};

export default BookInfo;
