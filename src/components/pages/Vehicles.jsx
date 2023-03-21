/* eslint-disable */
import React, { useEffect, useState } from 'react'
import './styles/vehicle.css'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { getVehicles } from '../../redux/vehicles/vehicles'

const Vehicles = () => {
    const dispatch = useDispatch();
    const vehicle = useSelector((state) => state.vehicles);
    const [get, setGet] = useState(null);
    useEffect(()=> {
      dispatch(getVehicles());
    }, []);
       
const getId = (id) => {
  const getVehicleId = async () => {
    const response = await fetch(`http://localhost:5000/api/v1/vehicles/${id}`);
    const data = await response.json();
    setGet(data);
    return data;
  };
  return getVehicleId;
}
    return (
      <div className="vehiclesDiv">
        <h2>Browse The Race Machines</h2>
        <div className="vehicles">
          {vehicle && vehicle.vehicles.map((veh) => (
            <NavLink
              className="vehicle-container"
                onClick={getId(veh.id)}
                state={veh}
                to={`/details/${veh.id}`}
              >
            <div className="vehicleDiv">
              <div className="image-container">
                <img src={veh.image} className="vehicleImg" alt="" />
              </div>
              <h3>{veh.name}</h3>
              <p>{veh.model}</p>
                {veh.id}
            </div>
          </NavLink>
          ))}
        </div>
      </div>
    );
}

export default Vehicles