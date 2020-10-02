import React from 'react';
import styled from 'styled-components';

// Add info from the want to read table for the current user to state. Use that info to display
// the first three book covers. Then have the a link go to the want to read shelf of the current
// user.

const WantToReadWrapper = styled.div`
  border-bottom: 1px solid #d8d8d8;
  margin-bottom: 16px;
  width: 300px;
  padding-bottom: 16px;
  font-family: "Lato", "Helvetica Neue", "Helvetica", sans-serif;

  .title {
    margin: 12px 0px 12px 8px;
    font-size: 14px;
  }

  .covers {
    margin-left: 8px;
  }

  .shelf-link {
    margin-top: 12px;
    margin-left: 8px;
  }

  a {
    color: #00635D;
    text-decoration: none;
    font-size: 14px;
  }
`;

const WantToRead = () => {
  return (
    <WantToReadWrapper>
      <h3 className="title">WANT TO READ</h3>
      <div className="covers">
        <svg width="96" height="96" viewBox="0 0 96 96" xmlns="http://www.w3.org/2000/svg"><title>Group 7 Copy 2</title><path d="M47.886 8.268v-.386c-.23-1.546-1.537-2.318-2.844-1.777-1.537.695-2.997 1.39-4.535 2.009-2.613 1.081-5.15 2.24-7.84 3.322-1.69.696-3.382 1.546-5.073 2.241-2.536 1.082-5.073 2.164-7.686 3.246-1.307.54-2.614 1.236-3.92 1.7-1.922.695-3.844.772-5.842.463-1.922-.309-3.766-.695-5.534-1.854 1.307-.541 2.613-1.082 3.843-1.7 3.843-1.7 7.763-3.323 11.53-5.023C23.29 9.041 26.518 7.65 29.9 6.182c.538-.232 1-.618 1.691-.31a34.31 34.31 0 0 0 3.382 1.469V2.009c0-1.236-1.383-2.164-2.536-1.777-1.23.463-2.383 1.082-3.536 1.545-2.537 1.005-4.996 2.164-7.456 3.246-1.691.695-3.382 1.468-5.073 2.24-2.46 1.082-4.92 2.087-7.456 3.169-1.768.773-3.536 1.468-5.227 2.24-1.844.85-3.382 2.164-3.382 4.792.077 14.45 0 28.977 0 43.427a3.7 3.7 0 0 0 .308 1.545c.692 1.932 2.229 2.937 3.997 3.632 1.921.773 3.843 1.237 5.918 1.468 2.076.232 4.074.155 6.073-.463 2.92-.928 5.61-2.396 8.531-3.555 2.153-.927 4.305-1.932 6.38-2.859a756.083 756.083 0 0 0 8.84-3.786c2.075-.928 4.15-1.855 6.226-2.705.922-.386 1.537-1.236 1.537-2.24-.23-14.373-.23-28.978-.23-43.66zM31.9 50.15s-10.454-3.245-10.454-11.9c0-8.655 7.456-13.214 10.223-7.264 0 0 2.383-7.804 7.302-6.645 4.996.927 4.227 12.827-7.071 25.809z" fill="#B9AD99" fillRule="evenodd"/></svg>
        <svg width="96" height="96" viewBox="0 0 96 96" xmlns="http://www.w3.org/2000/svg"><title>Group 7 Copy 2</title><path d="M47.886 8.268v-.386c-.23-1.546-1.537-2.318-2.844-1.777-1.537.695-2.997 1.39-4.535 2.009-2.613 1.081-5.15 2.24-7.84 3.322-1.69.696-3.382 1.546-5.073 2.241-2.536 1.082-5.073 2.164-7.686 3.246-1.307.54-2.614 1.236-3.92 1.7-1.922.695-3.844.772-5.842.463-1.922-.309-3.766-.695-5.534-1.854 1.307-.541 2.613-1.082 3.843-1.7 3.843-1.7 7.763-3.323 11.53-5.023C23.29 9.041 26.518 7.65 29.9 6.182c.538-.232 1-.618 1.691-.31a34.31 34.31 0 0 0 3.382 1.469V2.009c0-1.236-1.383-2.164-2.536-1.777-1.23.463-2.383 1.082-3.536 1.545-2.537 1.005-4.996 2.164-7.456 3.246-1.691.695-3.382 1.468-5.073 2.24-2.46 1.082-4.92 2.087-7.456 3.169-1.768.773-3.536 1.468-5.227 2.24-1.844.85-3.382 2.164-3.382 4.792.077 14.45 0 28.977 0 43.427a3.7 3.7 0 0 0 .308 1.545c.692 1.932 2.229 2.937 3.997 3.632 1.921.773 3.843 1.237 5.918 1.468 2.076.232 4.074.155 6.073-.463 2.92-.928 5.61-2.396 8.531-3.555 2.153-.927 4.305-1.932 6.38-2.859a756.083 756.083 0 0 0 8.84-3.786c2.075-.928 4.15-1.855 6.226-2.705.922-.386 1.537-1.236 1.537-2.24-.23-14.373-.23-28.978-.23-43.66zM31.9 50.15s-10.454-3.245-10.454-11.9c0-8.655 7.456-13.214 10.223-7.264 0 0 2.383-7.804 7.302-6.645 4.996.927 4.227 12.827-7.071 25.809z" fill="#B9AD99" fillRule="evenodd"/></svg>
        <svg width="96" height="96" viewBox="0 0 96 96" xmlns="http://www.w3.org/2000/svg"><title>Group 7 Copy 2</title><path d="M47.886 8.268v-.386c-.23-1.546-1.537-2.318-2.844-1.777-1.537.695-2.997 1.39-4.535 2.009-2.613 1.081-5.15 2.24-7.84 3.322-1.69.696-3.382 1.546-5.073 2.241-2.536 1.082-5.073 2.164-7.686 3.246-1.307.54-2.614 1.236-3.92 1.7-1.922.695-3.844.772-5.842.463-1.922-.309-3.766-.695-5.534-1.854 1.307-.541 2.613-1.082 3.843-1.7 3.843-1.7 7.763-3.323 11.53-5.023C23.29 9.041 26.518 7.65 29.9 6.182c.538-.232 1-.618 1.691-.31a34.31 34.31 0 0 0 3.382 1.469V2.009c0-1.236-1.383-2.164-2.536-1.777-1.23.463-2.383 1.082-3.536 1.545-2.537 1.005-4.996 2.164-7.456 3.246-1.691.695-3.382 1.468-5.073 2.24-2.46 1.082-4.92 2.087-7.456 3.169-1.768.773-3.536 1.468-5.227 2.24-1.844.85-3.382 2.164-3.382 4.792.077 14.45 0 28.977 0 43.427a3.7 3.7 0 0 0 .308 1.545c.692 1.932 2.229 2.937 3.997 3.632 1.921.773 3.843 1.237 5.918 1.468 2.076.232 4.074.155 6.073-.463 2.92-.928 5.61-2.396 8.531-3.555 2.153-.927 4.305-1.932 6.38-2.859a756.083 756.083 0 0 0 8.84-3.786c2.075-.928 4.15-1.855 6.226-2.705.922-.386 1.537-1.236 1.537-2.24-.23-14.373-.23-28.978-.23-43.66zM31.9 50.15s-10.454-3.245-10.454-11.9c0-8.655 7.456-13.214 10.223-7.264 0 0 2.383-7.804 7.302-6.645 4.996.927 4.227 12.827-7.071 25.809z" fill="#B9AD99" fillRule="evenodd"/></svg>
      </div>
      <a href="/my-books" className="shelf-link">View all books</a>
    </WantToReadWrapper>
  );
};

export default WantToRead;
