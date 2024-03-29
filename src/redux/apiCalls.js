/* eslint-disable */
import { publicRequest } from "../request";
import { loginFailure, loginStart, loginSuccess } from "./user/user"

export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await publicRequest.post("/user/login", user)
    const responseData = res.data;
    delete responseData.headers;
    dispatch(loginSuccess(responseData))
  } catch (err) {
    dispatch(loginFailure())
  }
}
export const logout = (dispatch) => {
  dispatch(loginSuccess(false))
}
export const register = async (dispatch, user) => {
  dispatch(loginStart())
  try {
    const res = await publicRequest.post("/users", user)
    const responseData = res.data;
    delete responseData.headers;
    dispatch(loginSuccess(responseData))
  } catch (err) {
    dispatch(loginFailure())
  }
}

export const addVehicle = async (dispatch, add, message) => {
  try {
    const rest = await publicRequest.post("/vehicles", add)
    const responseData = rest.data;
    delete responseData.headers;
    message(true)
  } catch (error) {

  }
}

export const deleteReservations = async (vehId, id) => {
  const response = await publicRequest.delete(`/reservations/${id}`)
  return response
}