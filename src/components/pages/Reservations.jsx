/* eslint-disable */
import "./../pages/styles/reservations.css";

import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getReservations } from "../../redux/reservations/reservation";
import { useEffect } from "react";
const Reservations = () => {
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.user);
  const reservations = useSelector((state) => state.reservations);
  const [allReservations, setReservations] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
  if (currentUser?.data.token) {
    setLoading(true);
    dispatch(getReservations({ token: currentUser.data.token })).finally(() => {
      // Set loading state to false after a 5-second delay
      setTimeout(() => {
        setLoading(false);
      }, 5000);
    });
  }
}, [currentUser, dispatch]);


  useEffect(() => {
    if(reservations && reservations.reservations) {
       setLoading(true);
        setReservations(reservations.reservations);
    }
}, [reservations]);

  return (
    <div className="reservation-main-container">
      {loading && <h1>Loading Your Reservations..</h1>}
      {!loading && (
        <>
          <h2 className="reservation-title">Your Reservations</h2>
          <div className="reservations-div">
            {allReservations &&
              allReservations.map((reservation) => (
                <div className="reservations-container" key={reservation.id}>
                  <div className="reservation-div">
                    <img src={reservation.vehicle.image} alt={reservation.vehicle.name} />
                    <span>{reservation.vehicle.name}</span>
                    <span>{reservation.vehicle.model}</span>
                    <p>Reservation ID: {reservation.id}</p>
                    <p>Start Date: {reservation.from_date}</p>
                    <p>End Date: {reservation.to_date}</p>
                    <p>Number of people: {reservation.number_of_person}</p>
                    <button className="reservation-delete" onClick={() => deleteReservation(reservation)}>
                      Delete
                    </button>
                  </div>
                </div>
              ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Reservations;
