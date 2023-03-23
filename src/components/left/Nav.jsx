import React from 'react';
import {
  RiLogoutCircleLine,
  RiReservedFill,
  RiHome7Line,
  RiAddCircleLine,
} from 'react-icons/ri';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { logout } from '../../redux/apiCalls';
import './style/nav.css';

const Nav = () => {
  const dispatch = useDispatch();

  const logouts = () => {
    logout(dispatch, false);
  };

  return (
    <div className="NavDiv">
      <img
        className="logo"
        src="https://res.cloudinary.com/dosu6sfvl/image/upload/v1679389949/Fast%20Lane%20Assets/FL_Logo_hgb5gl.png"
        alt="Fast Lane logo"
      />
      <nav>
        <ul>
          <NavLink
            to="/"
            className="link"
          >
            <RiHome7Line />
            Home
          </NavLink>
          <NavLink
            to="/reservations"
            className="link"
          >
            <RiReservedFill />
            Reservations
          </NavLink>
          <NavLink to="/form">
            <li className="link">
              <RiAddCircleLine />
              Add a reservation
            </li>
          </NavLink>
          <NavLink
            to="/addVehicle"
            className="link"
          >
            <RiAddCircleLine />
            Add a vehicle
          </NavLink>
          <button
            type="button"
            className="link"
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
