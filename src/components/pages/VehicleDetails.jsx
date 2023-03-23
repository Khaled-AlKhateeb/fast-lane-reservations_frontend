/* eslint-disable */
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './styles/vehicleDetails.css';

const VehicleDetails = () => {
  const { state } = useLocation();

  return (
    <>
      <div className="details-div">
        <img src={state.image} alt="" />
        <div className="text-details-div">
          <article className="item">
            <p className="label">Name: </p>
            <p className="value">{state.name}</p>
          </article>
          <article className="item">
            <p className="label">Model: </p>
            <p className="value">{state.model}</p>
          </article>
          <article className="item">
            <p className="label">Horse Power: </p>
            <p className="value">{state.horse_power} hp</p>
          </article>
          <article className="item">
            <p className="label">Production: </p>
            <p className="value">{state.year}</p>
          </article>
          <article className="item">
            <p className="label">{state.description}</p>
          </article>
          <article className="item">
            <p className="label">Price: </p>
            <p className="value">$ {state.price}</p>
          </article>
          <br />
          <Link to="/form">
            <div className="action">Reserve</div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default VehicleDetails;
