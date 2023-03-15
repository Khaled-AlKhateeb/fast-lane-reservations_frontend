import React from 'react';
import {
  RiLogoutCircleLine, RiReservedFill, RiHome7Line, RiAddCircleLine, RiDeleteBin6Line,
} from 'react-icons/ri';
import { NavLink } from 'react-router-dom';
import './style/nav.css';

const Nav = () => (
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
        {/* <NavLink to="/" className="link">
          <RiMotorbikeFill />
          Vehicles
        </NavLink> */}
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
        <li className="link">
          <RiLogoutCircleLine />
          Log out
        </li>
      </ul>
    </nav>
  </div>
);

export default Nav;
