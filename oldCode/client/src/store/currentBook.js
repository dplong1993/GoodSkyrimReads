const SET_BOOK = 'goodskyrimreads/currentBook/SET_BOOK';

export const setBook = book => {
  return {
    type: SET_BOOK,
    book
  };
};

export const loadBook = (id) => {
  return async dispatch => {
    const response = await fetch(`/api/books/${id}`);

    if (response.ok) {
      const book = await response.json();
      dispatch(setBook(book));
    } else {
      const error = await response.json();
      window.alert(error.message);
    }
  }
}

export default function reducer(state = {}, action){
  switch(action.type){
    case SET_BOOK:
      return action.book;
    default:
      return state;
  }
}
