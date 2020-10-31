import { combineReducers } from "@reduxjs/toolkit"
import dayNightReducer from "./components/day-night-switch/day-night-slice"

export default combineReducers({
  dayNight: dayNightReducer,
})
