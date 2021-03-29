const SET_BOOKS = 'goodskyrimreads/books/SET_BOOKS';


export const setBooks = books => {
  return {
    type: SET_BOOKS,
    books
  };
};

export const loadBooks = () => {
  return async dispatch => {
    const response = await fetch(`/api/books`);

    if (response.ok) {
      const books = await response.json();
      dispatch(setBooks(books));
    } else {
      const error = await response.json();
      window.alert(error.message);
    }
  }
}

//May need to split this reducer into a currentbook
//and books slice of state.

export default function reducer(state = [], action){
  switch(action.type){
    case SET_BOOKS:
      return [...action.books];
    default:
      return state;
  }
}
