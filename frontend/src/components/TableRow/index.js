import React from "react";
import { Link } from "react-router-dom";

const TableRow = ({ book, shelf }) => {
  return (
    <tr>
      <td>
        <Link to={`/books/${book.id}`}>
          <img
            className="book-cover"
            src={book.coverPhotoUrl}
            alt="Cover"
            style={{ width: "50px", paddingTop: "20px" }}
          />
        </Link>
      </td>
      <td>
        <div>{book.title}</div>
      </td>
      <td>
        <div>{book.author}</div>
      </td>
      <td>
        <div>0.00</div>
      </td>
      <td>
        <div>x out of 5 stars</div>
      </td>
      <td>
        <div>{shelf}</div>
      </td>
      <td>
        <div>
          <Link to={`/books/${book.id}/review`}>Write a review</Link>
        </div>
      </td>
      <td>
        <div>Not set</div>
      </td>
      <td>
        <div>April 7, 2021</div>
      </td>
    </tr>
  );
};

export default TableRow;
