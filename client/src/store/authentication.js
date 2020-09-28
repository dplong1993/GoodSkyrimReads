import Cookies from 'js-cookie'

const SET_USER = 'goodskyrimreads/authentication/SET_USER';
const SET_CURRENT_USER_ID = 'goodskyrimreads/authentication/SET_CURRENT_USER_ID';
// const REMOVE_USER = 'pokedex/authentication/REMOVE_USER'

export const setUser = user => {
  return {
    type: SET_USER,
    user
  };
};

export const setCurrentUserId = id => {
  return {
    type: SET_USER,
    id
  };
};

// export const removeUser = () => {
//   return {
//     type: REMOVE_USER
//   }
// }

function loadUser() {
  const authToken = Cookies.get("token");
  if(authToken){
    try {
      const payload = authToken.split(".")[1];
      const decodedPayload = atob(payload);
      const payloadObj = JSON.parse(decodedPayload);
      const { data } = payloadObj;
      return data;
    } catch (error) {
      Cookies.remove("token");
    }
  }
  return {};
}

export const login = (email, password) => {
  return async dispatch => {
    const response = await fetch(`/api/session`, {
      method: 'put',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({email, password}),
    });

    if (response.ok) {
      const { user } = await response.json();
      dispatch(setUser(user));
    } else {
      const error = await response.json();
      window.alert(error.message);
    }
  }
}

// export const logout = () => {
//   return async dispatch => {
//     const response = await fetch(`/api/session`, {
//       method: 'delete',
//     });
//     if (response.ok) {
//       dispatch(removeUser());
//     }
//   }
// }

export default function reducer(state = loadUser(), action){
  switch(action.type){
    case SET_USER:
      return action.user;
    case SET_CURRENT_USER_ID:
      return action.id;
    default:
      return state;
  }
}
