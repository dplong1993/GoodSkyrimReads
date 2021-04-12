import { csrfFetch } from "./csrf";

const SET_SHELVE_BOOKS = "goodskyrimreads/shelves/SET_SHELVE_BOOKS";
const ADD_BOOK = "goodskyrimreads/shelves/ADD_BOOK";

export const setShelveBooks = (books) => {
  return {
    type: SET_SHELVE_BOOKS,
    books,
  };
};

export const addBook = (book, shelfName) => {
  return {
    type: ADD_BOOK,
    book,
    shelfName,
  };
};

export const loadBooks = (id) => {
  return async (dispatch) => {
    const response = await fetch(`/api/users/${id}/bookshelves`);

    if (response.ok) {
      const user = await response.json();
      const shelves = {
        read: user.ReadBooks,
        toRead: user.ToReadBooks,
        currRead: user.CurrReadBooks,
      };
      dispatch(setShelveBooks(shelves));
    } else {
      const error = await response.json();
      window.alert(error.message);
    }
  };
};

export const addNewBook = (book, userId, shelfName) => {
  return async (dispatch) => {
    const response = await csrfFetch(
      `/api/shelves/${shelfName.toLowerCase()}`,
      {
        method: "POST",
        body: JSON.stringify({
          bookId: book.id,
          userId,
        }),
      }
    );
    if (response.ok) {
      const entry = response.json();
      console.log("Entry", entry);
      dispatch(addBook([book], shelfName));
    } else {
      const error = await response.json();
      window.alert(error.message);
    }
  };
};

export default function reducer(
  state = { read: [], toRead: [], currRead: [] },
  action
) {
  switch (action.type) {
    case SET_SHELVE_BOOKS:
      return {
        ...state,
        read: action.books.read,
        toRead: action.books.toRead,
        currRead: action.books.currRead,
      };
    case ADD_BOOK:
      switch (action.shelfName) {
        case "Read":
          return {
            ...state,
            read: [...state.read, ...action.book],
          };
        case "ToRead":
          return {
            ...state,
            toRead: [...state.toRead, ...action.book],
          };
        case "CurrRead":
          return {
            ...state,
            currRead: [...state.currRead, ...action.book],
          };
        default:
          return state;
      }
    default:
      return state;
  }
}
