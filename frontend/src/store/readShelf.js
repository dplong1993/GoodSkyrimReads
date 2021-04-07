const SET_BOOKS = "goodskyrimreads/readShelf/SET_BOOKS";

export const setBooks = (books) => {
  return {
    type: SET_BOOKS,
    books,
  };
};

export const loadBooks = (id) => {
  return async (dispatch) => {
    const response = await fetch(`/api/users/${id}/bookshelves`);

    if (response.ok) {
      const user = await response.json();
      dispatch(setBooks(user.Books));
    } else {
      const error = await response.json();
      window.alert(error.message);
    }
  };
};

export default function reducer(state = [], action) {
  switch (action.type) {
    case SET_BOOKS:
      return [...action.books];
    default:
      return state;
  }
}
