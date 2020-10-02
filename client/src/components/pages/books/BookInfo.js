import React, { useEffect } from 'react';

const BookInfo = ({ match: { params: { id } } }) => {
  useEffect(() => {
    const getBook = async (id) => {
      const res = await fetch(`/api/books/${id}`);
      if(res.ok){
        const data = await res.json();
        console.log(data);
      }
    }
    getBook(id);
    //dispatch(loadBooks());
  }, [])


  return (
    <h1>Book {id} Page</h1>
  );
};

export default BookInfo;
