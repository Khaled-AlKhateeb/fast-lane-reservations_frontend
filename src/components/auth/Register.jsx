import React from 'react';
import { Link } from 'react-router-dom';
import './styles/login.css';

const Register = () => (
  <div className="LoginDiv">
    <form className="LoginForm">
      <h2>Create a new account</h2>
      <input type="text" name="" id="" placeholder="Enter your name" />
      <input type="email" name="" id="" placeholder="Enter your email address" />
      <input type="password" placeholder="Enter Password" name="" id="" />
      <input type="password" placeholder="Confirm Password" name="" id="" />
      <button type="submit">Signup</button>
      <p>
        Have an account?
        <Link to="/login" className="Loginlink">
          &nbsp; Login...
        </Link>
      </p>
    </form>
  </div>
);

export default Register;
