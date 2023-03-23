import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import './styles/login.css';
import { register } from '../../redux/apiCalls';

const Register = () => {
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [err, setErr] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');
  const dispatch = useDispatch();

  const handleRegister = (e) => {
    e.preventDefault();
    if (email === '' && password === '' && name === '' && passwordConfirmation === '' && username === '') {
      setErr('All inputs should be valid');
      return false;
    }
    if (email === '') {
      setErr('Email should not be empty');
      return false;
    } if (password === '') {
      setErr('Password should not be empty');
      return false;
    } if (password.length < 6) {
      setErr('Password length should be greater than 6');
      return false;
    } if (passwordConfirmation.length === '') {
      setErr('Confirm your password');
      return false;
    } if (!passwordConfirmation.match(password)) {
      setErr('Password doesnt match');
      return false;
    } if (name === '') {
      setErr('Name should not be empty');
      return false;
    } if (name.length < 5) {
      setErr('Name should have a minimum of 5 characters');
      return false;
    } if (username === '') {
      setErr('Username should be valid');
      return false;
    }
    return register(dispatch, {
      name,
      username,
      password_confirmation: passwordConfirmation,
      email,
      password,
    });
  };

  return (
    <div className="LoginDiv">
      <form className="LoginForm">
        <h2>Create a new account</h2>
        <input onChange={(e) => setName(e.target.value)} type="text" name="" id="" placeholder="Enter your name" />
        <input onChange={(e) => setUsername(e.target.value)} type="text" name="" id="" placeholder="Enter your username" />
        <input onChange={(e) => setEmail(e.target.value)} type="email" name="" id="" placeholder="Enter your email address" />
        <input onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Enter Password" name="" id="" />
        <input onChange={(e) => setPasswordConfirmation(e.target.value)} type="password" placeholder="Confirm Password" name="" id="" />
        <button type="submit" onClick={handleRegister}>Signup</button>
        {err && <span>{err}</span>}
        <p>
          Have an account?
          <Link to="/login" className="Loginlink">
            &nbsp; Login...
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Register;
