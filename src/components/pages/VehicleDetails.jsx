import React from "react";
import { useLocation } from "react-router-dom";

const VehicleDetails = () => {

const { state } = useLocation();

return (
  <div>
    <img src={state.image} alt="" style={{ width: "200px" }} />
    <p>
      <b>Name: </b> {state.name}
    </p>
    <p>
      <b>Model: </b> {state.model}
    </p>
    <p>
      <b>Price: </b> {state.price}
    </p>
    <p>
      <b>Horse Power: </b> {state.horse_power}
    </p>
    <p>
      <b>Product Date: </b> {state.year}
    </p>
  </div>
);
};

export { VehicleDetails };
