/* eslint-disable */
import React from 'react';
import { useLocation } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import styles from '../left/styles';
import './styles/vehicleDetails.css';

const VehicleDetails = () => {
  const { state } = useLocation();

  return (
    <>
      <div className="details-div">
        <img src={state.image} alt={state.name} className='details-image' />
        <div className="text-details-div">
          <article className="item">
            <p className="label">Manufacturer: <strong>{state.name}</strong> </p>
          </article>
          <article className="item">
            <p className="label">Model: <strong>{state.model}</strong> </p>
          </article>
          <article className="item">
            <p className="label">Horse Power: {state.horse_power} </p>
          </article>
          <article className="item">
            <p className="label">Production: {state.year} </p>
          </article>
          <article className="item">
            <p className="label">{state.description}</p>
          </article>
          <br />
          <article className="item">
            <p className="label">Price: <strong>$ {state.price}</strong> </p>
            <p className="value"></p>
          </article>
          <br />
          <NavLink
            to="/form"
            style={styles}
          >
            <div className="action">Reserve</div>
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default VehicleDetails;
