/* eslint-disable */
import React from 'react';
import { useLocation } from 'react-router-dom';
import './styles/vehicleDetails.css';

const VehicleDetails = () => {
  const { state } = useLocation();

  return (
    <>
      <div className="detailsDiv">
        <img src={state.image} alt="" />
        <div className="textDetailsDiv">
          <article className="item">
            <p className="label">Name: </p>
            <p className="value">{state.name}</p>
          </article>
          <article className="item">
            <p className="label">Model: </p>
            <p className="value">{state.model}</p>
          </article>
          <article className="item">
            <p className="label">Price: </p>
            <p className="value">{state.price}</p>
          </article>
          <article className="item">
            <p className="label">Horse Power: </p>
            <p className="value">{state.horse_power}</p>
          </article>
          <article className="item">
            <p className="label">Product Date: </p>
            <p className="value">{state.year}</p>
          </article>
          <br />
          <a href="./reserve">
            <div className="action">Reserve</div>
          </a>
        </div>
      </div>
    </>
  );
};

export default VehicleDetails;
