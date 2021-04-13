import { csrfFetch } from "./csrf";

const SET_SHELVE_BOOKS = "goodskyrimreads/shelves/SET_SHELVE_BOOKS";
const ADD_BOOK = "goodskyrimreads/shelves/ADD_BOOK";
const DELETE_BOOK = "goodskyrimreads/shelves/DELETE_BOOK";

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

export const deleteBook = (title, shelfName) => {
  return {
    type: DELETE_BOOK,
    title,
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
      dispatch(addBook([book], shelfName));
    } else {
      const error = await response.json();
      window.alert(error.message);
    }
  };
};

export const deleteBookFromShelf = (book, userId, shelfName) => {
  return async (dispatch) => {
    const response = await csrfFetch(
      `/api/shelves/${shelfName.toLowerCase()}/${userId}-${book.id}`,
      {
        method: "DELETE",
      }
    );
    if (response.ok) {
      dispatch(deleteBook(book.title, shelfName));
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
    //Can refactor using state[shelfName] after changing the first letter in shelfName to lowercase
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
    //Can refactor using state[shelfName] after changing the first letter in shelfName to lowercase
    case DELETE_BOOK:
      let newState;
      switch (action.shelfName) {
        case "Read":
          newState = [...state.read];
          newState = newState.filter((obj) => obj.title !== action.title);
          return {
            ...state,
            read: [...newState],
          };
        case "ToRead":
          newState = [...state.toRead];
          newState = newState.filter((obj) => obj.title !== action.title);
          return {
            ...state,
            toRead: [...newState],
          };
        case "CurrRead":
          newState = [...state.currRead];
          newState = newState.filter((obj) => obj.title !== action.title);
          return {
            ...state,
            currRead: [...newState],
          };
        default:
          return state;
      }
    default:
      return state;
  }
}
