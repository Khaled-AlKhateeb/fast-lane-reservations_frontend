import React from 'react';
import { Link } from 'react-router-dom';
import './styles/login.css';

const Login = () => (
  <div className="LoginDiv">
    <form className="LoginForm">
      <h2>Login to your account</h2>
      <input type="email" name="" id="" placeholder="Enter your email address" />
      <input type="password" placeholder="Enter Password" name="" id="" />
      <button type="submit">Login</button>
      <p>
        Don&apos;t have an account?
        <Link to="/register" className="Loginlink">
          &nbsp; create an account...
        </Link>
      </p>
    </form>
  </div>
);

export default Login;
