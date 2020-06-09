import { combineReducers } from "@reduxjs/toolkit"
import dayNightReducer from "../features/day-night/day-night-slice"

export default combineReducers({
  dayNight: dayNightReducer,
})
