import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { logout } from '../../reducers/features/user/userReducer';
import './logout.scss';

const Logout = () => {
  const dispatch = useDispatch();

  return (
    <div className="logout">
      <button
        onClick={() => {
          dispatch(logout());
        }}
      >
        Выйти
      </button>
    </div>
  );
};

export default Logout;
