import { csrfFetch } from "./csrf";

const SET_USER = "session/setUser";
const REMOVE_USER = "session/removeUser";
const EDIT_USER = "session/editUser";

const setUser = (user) => {
  return {
    type: SET_USER,
    payload: user,
  };
};

const removeUser = () => {
  return {
    type: REMOVE_USER,
  };
};

const editUser = (user) => {
  return {
    type: EDIT_USER,
    user,
  };
};

export const login = (user) => async (dispatch) => {
  const { credential, password } = user;
  const response = await csrfFetch("/api/session", {
    method: "POST",
    body: JSON.stringify({
      credential,
      password,
    }),
  });
  const data = await response.json();
  dispatch(setUser(data.user));
  return response;
};

export const restoreUser = () => async (dispatch) => {
  const response = await csrfFetch("/api/session");
  const data = await response.json();
  dispatch(setUser(data.user));
  return response;
};

export const signup = (user) => async (dispatch) => {
  const { username, email, password, lastName, firstName } = user;
  const response = await csrfFetch("/api/users", {
    method: "POST",
    body: JSON.stringify({
      username,
      email,
      password,
      lastName,
      firstName,
    }),
  });
  const data = await response.json();
  dispatch(setUser(data.user));
  return response;
};

export const logout = () => async (dispatch) => {
  const response = await csrfFetch("/api/session", {
    method: "DELETE",
  });
  dispatch(removeUser());
  return response;
};

export const deleteUser = (id) => async (dispatch) => {
  const response = await csrfFetch(`/api/users/${id}`, {
    method: "DELETE",
  });
  dispatch(removeUser());
  return response;
};

export const editUserThunk = (oldUser, newUser) => async (dispatch) => {
  let userToSend = {};
  for (let key in newUser) {
    if (newUser[key] === "") {
      userToSend[key] = oldUser[key];
    } else {
      userToSend[key] = newUser[key];
    }
  }
  userToSend.id = oldUser.id;
  const response = await csrfFetch("api/users", {
    method: "PATCH",
    body: JSON.stringify(userToSend),
  });
  const data = await response.json();
  dispatch(editUser(data.user));
  return data;
};

const initialState = { user: null };

const sessionReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case SET_USER:
      newState = Object.assign({}, state);
      newState.user = action.payload;
      return newState;
    case REMOVE_USER:
      newState = Object.assign({}, state);
      newState.user = null;
      return newState;
    case EDIT_USER:
      newState = Object.assign({}, state);
      newState.user = action.user;
      return newState;
    default:
      return state;
  }
};

export default sessionReducer;
