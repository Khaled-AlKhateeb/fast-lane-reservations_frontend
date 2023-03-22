/* eslint-disable */
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  reservations: [],
  status: "idle",
};
   const url = "http://localhost:5000/api/v1/reservations";
export const getReservations = createAsyncThunk(
  "reservations/getReservations",
  async () => {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  }
);
export const createReservations = createAsyncThunk(
  "reservations/createReservations",
  async ({ token, vehicle, from_date, to_date, number_of_person }) => {
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
        },
        body: JSON.stringify({
          vehicle_id: vehicle.id,
          from_date,
          to_date,
          number_of_person,
        }),
      });
      if (response.status === 422) {
        return { error: "Invalid validation" };
      }

      if (response.status === 500) {
        throw new Error("Server error");
      }
      console.log(response, "response");
      const data = response.json();
      console.log(data, "data");
      return data;
    } catch (error) {
      console.log(error.message());
    }
  }
);

const reservationsSlice = createSlice({
  name: "reservations",
  initialState,
  reducers: {
   setStatus: (state) => {
      state.status = "idle";
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(createReservations.fulfilled, (state, action) => {
        const reserved = state;
        reserved.status = "Success";
        reserved.reservations = action.payload;
      })
      .addCase(getReservations.fulfilled, (state, action) => {
        const isFulfield = state;
        isFulfield.status = "fulfilled";
        isFulfield.reservations = action.payload;
      });
  },
});

export const { setStatus } = reservationsSlice.actions;
export default reservationsSlice.reducer;
