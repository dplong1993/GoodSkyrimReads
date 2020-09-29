import React from 'react';
import { NavLink } from 'react-router-dom';


const MyBooks = () => {
  return (
    <button className="my-books-button">
      <NavLink
        to="/mybooks"
        style={{
          color: 'black',
          textDecoration: 'none'
        }}
        activeClass="active">
        My Books
      </NavLink>
    </button>
  );
};

export default MyBooks;
