const SET_BOOKS = "goodskyrimreads/shelves/SET_BOOKS";

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
      console.log("AAAAAAAAAAAAAAAAAAAAAAAAA", user);
      const shelves = {
        read: user.ReadBooks,
        toRead: user.ToReadBooks,
        currRead: user.CurrReadBooks,
      };
      dispatch(setBooks(shelves));
    } else {
      const error = await response.json();
      window.alert(error.message);
    }
  };
};

export default function reducer(
  state = { read: {}, toRead: {}, currRead: {} },
  action
) {
  switch (action.type) {
    case SET_BOOKS:
      return {
        ...state,
        read: action.books.read,
        toRead: action.books.toRead,
        currRead: action.books.currRead,
      };
    default:
      return state;
  }
}
