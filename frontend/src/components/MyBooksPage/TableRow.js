import React from "react";

const TableRow = ({ book }) => {
  return (
    <tr>
      <td>
        <img src={book.coverPhotoUrl} alt="Cover" />
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
        <div>to-read</div>
      </td>
      <td>
        <div>
          <a href={`/books/${book.id}/review`}>Write a review</a>
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
