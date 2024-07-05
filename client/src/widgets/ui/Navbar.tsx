import React from "react";
import './Navbar.css'
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { RootState, useAppDispatch } from "../../app/store/store";
import { logoutThunk } from '../../entities/users/usersSlice' 

const Navbar = (): JSX.Element => {

  const { user } = useSelector((state: RootState) => state.auth);
  const dispatch = useAppDispatch();

  const onHandleLogout = (e: React.MouseEvent<HTMLAnchorElement>): void => {
    e.preventDefault(); // отменяем переход по ссылке
    dispatch(logoutThunk());
  };

  return (

  <nav className="Navbar">
  <ul className="ul">
 {user ? (
  <>
    <li>
      <NavLink to="/autho">играть</NavLink>
    </li>
    <li>
      <NavLink to="#">играть</NavLink>
    </li>
      <li>
        <NavLink to="/" className="nav-link" onClick={onHandleLogout}>
          logout
        </NavLink>
      </li>
   </>
 ):(
      <>
      <p className="nav-lin">Мы настаиваем, чтобы ты ввел свои данные</p>
      </>
     )}
  </ul>
</nav>
  )
};
export default Navbar; 