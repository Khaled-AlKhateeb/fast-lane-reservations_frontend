/* eslint-disable */
import React, { useEffect, useState } from "react";
import "./styles/vehicle.css";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { getVehicles } from "../../redux/vehicles/vehicles";

const Vehicles = () => {
  const dispatch = useDispatch();
  const vehicle = useSelector((state) => state.vehicles);
  const [get, setGet] = useState(null);
  document.addEventListener('DOMContentLoaded', () => {
    const prevBtn = document.getElementById('prev');
    const nextBtn = document.getElementById('next');
    const sliderContent = document.querySelector('.slider-content');
    const elements = document.querySelectorAll('.linkss');
    const slideWidth = elements[0].clientWidth;
    let currentSlide = 0;
    prevBtn.addEventListener('click', () => {
      if (currentSlide > 0) {
        currentSlide--;
        sliderContent.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
      }
    });
    nextBtn.addEventListener('click', () => {
      if (currentSlide < elements.length - 1) {
        currentSlide++;
        sliderContent.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
      }
    });
  });
  useEffect(() => {
    dispatch(getVehicles());
  }, []);

  const getId = (id) => {
    const getVehicleId = async () => {
      const response = await fetch(
        `http://localhost:5000/api/v1/vehicles/${id}`,
      );
      const data = await response.json();
      setGet(data);
      return data;
    };
    return getVehicleId;
  };
  return (
    <div className='vehiclesDiv'>
      <h2 className='main-title'>Browse through our available Race Machines</h2>
      <div
        id='slider'
        className='vehicles'
      >
        <a id="prev" className='slider-prev' href='#'></a>
        {vehicle &&
          vehicle.vehicles.map((veh) => (
            <div
              className='vehicleDiv'
              id="sliderWrap"
              key={veh.id}
            >
              <div className="slider-content">
                <NavLink
                  onClick={getId(veh.id)}
                  state={veh}
                  to={`/details/${veh.id}`}
                  className='linkss'
                >
                  <img
                    src={veh.image}
                    className='vehicleImg'
                    alt=''
                  />
                  <h3 className='car-name'>{veh.name}</h3>
                  <h3 className='model-name'>{veh.model}</h3>
                </NavLink>
              </div>
            </div>
          ))}
          <a id="next" className='slider-next' href='#'></a>
      </div>
    </div>
  );
};

export default Vehicles;
