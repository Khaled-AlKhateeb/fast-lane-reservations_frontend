import React, { useEffect, useState } from 'react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import { useNavigate } from 'react-router-dom';
import './styles/form.css';
import {
  Button, MenuItem, Select, TextField,
} from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';

import { createReservations, setStatus } from '../../redux/reservations/reservation';

const Form = () => {
  const [fromDate, setFromDate] = useState('');
  const [toDate, setToDate] = useState('');
  const [vehicle, setVehicle] = useState('');
  const [numberOfPerson, setNumberOfPerson] = useState(0);
  const { currentUser } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const vehicles = useSelector((state) => state.vehicles.vehicles);
  const statusSetter = useSelector((state) => state.reservations.status);
  const handleVehicleId = (vecId) => {
    const vehicleId = Number(vecId);
    const selectedVehicle = vehicles.find((vehicle) => vehicle.id === vehicleId);
    setVehicle(selectedVehicle);
  };

  const handleSubmit = () => {
    dispatch(
      createReservations({
        token: currentUser?.data.token,
        vehicle: vehicle || vehicles[0],
        from_date: fromDate,
        to_date: toDate,
        number_of_person: numberOfPerson,
      }),
    );
  };
  useEffect(() => {
    if (statusSetter === 'Success') {
      navigate('/reservations');
      dispatch(setStatus());
    }
  }, [statusSetter]);

  const styles = {
    backgroundColor: 'green',
    color: 'black',
    fontSize: '1.2rem',
    fontWeight: '600',
    width: '30%',
  };

  return (
    <div className="container">
      <h1 className="title">Reserve Your Machine</h1>
      <form>
        <div className="input-container">
          <h2>Select Start Date</h2>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <MobileDatePicker
              inputFormat="YYYY-MM-DD"
              value={fromDate}
              onChange={(newValue) => setFromDate(newValue)}
              /* eslint-disable react/jsx-props-no-spreading */
              renderInput={(params) => <TextField {...params} />}
              fullWidth
            />
          </LocalizationProvider>
        </div>
        <div className="input-container">
          <h2>Select End Date</h2>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <MobileDatePicker
              className="end-date-label"
              inputFormat="YYYY-MM-DD"
              value={toDate}
              onChange={(newValue) => setToDate(newValue)}
              /* eslint-disable react/jsx-props-no-spreading */
              renderInput={(params) => <TextField {...params} />}
              fullWidth
            />
          </LocalizationProvider>
        </div>
        <div className="input-container">
          <h2>Select Number of Persons</h2>
          <TextField
            id="outlined-basic"
            variant="outlined"
            type="number"
            onChange={(e) => setNumberOfPerson(e.target.value)}
          />
        </div>
        <div className="input-container">
          <h2>Select Your desired Vehicle</h2>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={vehicle?.id || ''}
            onChange={(e) => handleVehicleId(e.target.value)}
          >
            {vehicles && vehicles.map((vec) => (
              <MenuItem value={vec.id} key={vec.id}>
                <strong>{vec.name}</strong>
                <em>{vec.model}</em>
              </MenuItem>
            ))}
          </Select>
        </div>
        <Button style={styles} onClick={handleSubmit}>Reserve</Button>
      </form>
    </div>
  );
};
export default Form;
