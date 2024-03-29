/* eslint-disable */
import React, { useEffect, useState } from "react";
import "./styles/vehicle.css";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { getVehicles } from "../../redux/vehicles/vehicles";
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, EffectFade } from 'swiper';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
const Vehicles = () => {
  const dispatch = useDispatch();
  const vehicle = useSelector((state) => state.vehicles);
  const [get, setGet] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
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

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth <= 768) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    }

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className='vehiclesDiv'>
      <div className="vehicles">
        <h2 className='vehicles-title'>See all our fast Machines</h2>
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={isMobile ? 1 : 3}
          className="swiper-container"
          navigation
          pagination={{ clickable: true }}
        >
          {vehicle && vehicle.vehicles.map((veh) => (
            <SwiperSlide key={veh.id}>
              <div className="vehicleDiv">
                <NavLink
                  onClick={getId(veh.id)}
                  state={veh}
                  to={`/details/${veh.id}`}
                  className="linkss"
                >
                  <img src={veh.image} className="vehicleImg" alt="" />
                  <h3 className="car-name">{veh.name}</h3>
                  <h3 className="model-name">{veh.model}</h3>
                </NavLink>
              </div>
            </SwiperSlide>
          ))}
          ...
        </Swiper>
      </div>
    </div>
  );
};

export default Vehicles;
