/* eslint-disable */
import React from 'react';
import {
  RiLogoutCircleLine,
  RiReservedFill,
  RiHome7Line,
  RiAddCircleLine,
  RiMenuFill,
} from 'react-icons/ri';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { logout } from '../../redux/apiCalls';
import styles from './styles';
import './style/nav.css';

const Nav = () => {
  const dispatch = useDispatch();

  const logouts = () => {
    logout(dispatch, false);
  };
  const expandMenu = () => {
    const navMenuList = document.getElementById('navMenuList');
    if (navMenuList.style.display === "none") {
      navMenuList.style.display = 'flex';
    } else if (screen.width < 768) {
      navMenuList.style.display = 'none'
    }
  }

  return (
    <div className="NavDiv">
      <img
        className="logo"
        src="https://res.cloudinary.com/dosu6sfvl/image/upload/v1679637735/FL_Logo_jalcym.png"
        alt="Fast Lane logo"
      />
      <nav className="nav-menu-container">
        <button type="button" className="nav-expand" onClick={() => { expandMenu() }}><RiMenuFill className="nav-expand-icon" /></button>
        <ul id="navMenuList" className="nav-menu-list">
          <NavLink
            to="/"
            className="nav-link"
            onClick={() => { expandMenu() }}
            style={styles}
          >
            <RiHome7Line />
            Home
          </NavLink>
          <NavLink
            to="/reservations"
            className="nav-link"
            onClick={() => { expandMenu() }}
            style={styles}
          >
            <RiReservedFill />
            Reservations
          </NavLink>

          <NavLink
            to="/form"
            className="nav-link"
            onClick={() => { expandMenu() }}
            style={styles}
          >
            <RiAddCircleLine />
            Add a reservation
          </NavLink>
          <NavLink
            to="/addVehicle"
            className="nav-link"
            onClick={() => { expandMenu() }}
            style={styles}
          >
            <RiAddCircleLine />
            Add a vehicle
          </NavLink>
          <button
            type="button"
            className="nav-logout-btn"
            onClick={logouts}
          >
            <RiLogoutCircleLine />
            Log out
          </button>
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
