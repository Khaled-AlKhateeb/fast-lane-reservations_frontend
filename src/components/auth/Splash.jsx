import React from 'react';
import { Link } from 'react-router-dom';
import { BiLogIn, BiLogOut } from 'react-icons/bi';
import './styles/splash.css';

const Splash = () => (
  <div className="splashDiv">
    <h1 className="splashHeader">Welcome to Fast Lane Reservations</h1>

    <div className="loginRegDiv">
      <Link to="/login" className="link">
        <BiLogIn className="iconLog" />
        Login
      </Link>
      <Link to="/register" className="link">
        <BiLogOut />
        Register
      </Link>
    </div>
  </div>
);

export default Splash;
