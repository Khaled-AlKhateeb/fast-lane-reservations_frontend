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
//   console.log(allReservations);
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
    <div>
      {loading && <h1>Loading Your Reservations..</h1>}
      {!loading && (
        <>
          <h2>Your reservation has been successful!</h2>
          {allReservations &&
            allReservations.map((reservation) => (
              <div key={reservation.id}>
                <p>Reservation ID: {reservation.id}</p>
                <p>Vehicle: {reservation.vehicle.name}</p>
                <p>Start Date: {reservation.from_date}</p>
                <p>End Date: {reservation.to_date}</p>
                <p>Number of people: {reservation.number_of_person}</p>
                
              </div>
            ))}
        </>
      )}
    </div>
  );
};

export default Reservations;
