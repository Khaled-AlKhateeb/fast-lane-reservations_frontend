import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { login } from '../../redux/apiCalls';
import './styles/login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [err, setErr] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (email === '' && password === '') {
      setErr('Email and Password should be valid');
      return false;
    }
    if (email === '') {
      setErr("Email shouldn't be empty");
      return false;
    }
    if (password === '') {
      setErr('Password should not be empty');
      return false;
    }
    return login(dispatch, { email, password });
  };
  return (
    <div className="LoginDiv">
      <form className="LoginForm">
        <h2>Login to your account</h2>
        <input onChange={(e) => setEmail(e.target.value)} type="email" name="" id="" placeholder="Enter your email address" />
        <input onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Enter Password" name="" id="" />
        <div className="login-btn-container">
          <button className="login-btn" type="submit" onClick={handleLogin}>Login</button>
          <button className="login-btn" type="button" onClick={goBack}>Back</button>
        </div>
        {err && <span>{err}</span>}
        <p>
          Don&apos;t have an account?
          <br />
          <Link to="/register" className="Loginlink">
            &nbsp; create an account...
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
