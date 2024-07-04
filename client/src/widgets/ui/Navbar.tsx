import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { RootState, useAppDispatch } from "../../app/store/store";
import { logoutThunk } from '../../../entities/users/authSlice' 

const Navbar = (): JSX.Element => {

  const { user } = useSelector((state: RootState) => state.auth);
  const dispatch = useAppDispatch();

  const onHandleLogout = (e: React.MouseEvent<HTMLAnchorElement>): void => {
    e.preventDefault(); // отменяем переход по ссылке
    dispatch(logoutThunk());
  };

  return (

  <nav className="Navbar">
  <ul>
 {user ? (
  <>
    <li>
      <NavLink to="#">играть</NavLink>
    </li>
      <li>
        <NavLink to="/" onClick={onHandleLogout}>
          logout
        </NavLink>
      </li>
   </>
 ):(
      <>
        <li>
          <NavLink to="/authorization">вход</NavLink>
        </li>
        <li>
          <NavLink to="/registration">регестрация
          </NavLink>
        </li>
      </>
     )}
  </ul>
</nav>
  )
};
export default Navbar; 