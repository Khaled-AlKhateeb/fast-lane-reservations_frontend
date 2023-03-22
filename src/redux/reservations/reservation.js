/* eslint-disable */
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  reservations: [],
  status: "idle",
};
const url = "http://localhost:5000/api/v1/reservations";
export const getReservations = createAsyncThunk(
  "reservations/getReservations",
  async ({ token }) => {
    const response = await fetch(url, {
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
    });
    const data = response.json();
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
      const data = response.json();
      return data;
    } catch (error) {
    }
  }
);

export const deleteReserv = createAsyncThunk("reservations/deleteReserv",
  async ({ token, id }) => {
    try {
      const response = await fetch(url`/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
        }
      });
      const data = response.json();
      return data;
    } catch (error) {
    }
  }
)

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
      })
      .addCase(deleteReserv.fulfilled, (state, action) => {
        const full = state
        full.status = 'fufilled'
      })
  },
});

export const { setStatus } = reservationsSlice.actions;
export default reservationsSlice.reducer;
