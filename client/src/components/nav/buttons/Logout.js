import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../../store/authentication';


const Logout = () => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(logout());
  }

  return (
    <button
      onClick={handleClick}>
      Logout
    </button>
  );
};

export default Logout;
