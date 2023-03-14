import React from 'react';
import {
  RiLogoutCircleLine, RiReservedFill, RiHome7Line, RiAddCircleLine, RiDeleteBin6Line,
  RiMotorbikeFill,
} from 'react-icons/ri';
import { Link } from 'react-router-dom';
import './style/nav.css';

const Nav = () => (
  <div className="NavDiv">
    <h2 className="NavH2">Fast-Lane</h2>
    <nav>
      <ul>
        <Link to="/" className="link">
          <RiHome7Line />
          Home
        </Link>
        <Link to="/reservations" className="link">
          <RiReservedFill />
          Reservations
        </Link>
        <li className="link">
          <RiMotorbikeFill />
          Vehicles
        </li>
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
