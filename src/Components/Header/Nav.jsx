import SearchBar from './SearchBar';
import { NavLink } from 'react-router-dom';
import Logout from '../Logout/Logout';
import './nav.scss';
import { useSelector } from 'react-redux';

const Nav = () => {
  const isAuth = useSelector((state) => state.user.isAuth);
  return (
    <div className="nav">
      <div className="nav__login btn">
        {!isAuth && (
          <NavLink className=" btn" to="login">
            Войти
          </NavLink>
        )}
      </div>
      <div className="nav__registration btn">
        {!isAuth && (
          <NavLink className=" btn" to="registration">
            Регистрация
          </NavLink>
        )}
        {isAuth && <Logout>Выйти</Logout>}
      </div>
    </div>
  );
};

export default Nav;
