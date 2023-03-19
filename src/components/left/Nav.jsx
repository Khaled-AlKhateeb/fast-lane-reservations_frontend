/* eslint-disable */
import React from 'react';
import {
  RiLogoutCircleLine, RiReservedFill, RiHome7Line, RiAddCircleLine, RiDeleteBin6Line,
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
      <h2 className="NavH2">Fast-Lane</h2>
      <nav>
        <ul>
          <NavLink to="/" className="link">
            <RiHome7Line />
            Home
          </NavLink>
          <NavLink to="/reservations" className="link">
            <RiReservedFill />
            Reservations
          </NavLink>
          <li className="link">
            <RiAddCircleLine />
            Add a reservation
          </li>
          <li className="link">
            <RiAddCircleLine />
            Add a vehicle
          </li>
          <li className="link">
            <RiDeleteBin6Line />
            Delete a vehicle
          </li>
          <li className="link" onClick={logouts}>
            <RiLogoutCircleLine />
            Log out
          </li>
        </ul>
      </nav>
    </div>
  )
};

export default Nav;
