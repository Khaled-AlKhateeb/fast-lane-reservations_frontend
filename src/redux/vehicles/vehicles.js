/* eslint-disable */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  vehicles: [],
  status: null,
};

export const getVehicles = createAsyncThunk('vehicles/vehicles', async () => {
  const url = 'http://localhost:5000/api/v1/vehicles';
  const response = await fetch(url);
  const data = await response.json();
  return data;
});

const vehicleSlice = createSlice({
  name: 'vehicles',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getVehicles.fulfilled, (state, action) => {
      const isFulfield = state;
      isFulfield.status = 'fulfilled';
      isFulfield.vehicles = action.payload;
    });
  },
});

export default vehicleSlice.reducer;
