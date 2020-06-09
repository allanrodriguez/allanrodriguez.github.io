import { createSlice } from "@reduxjs/toolkit"

const dayNightSlice = createSlice({
  name: "dayNight",
  initialState: { isDay: false },
  reducers: {
    setDayNight(state, action) {
      state.isDay = action.payload
    },
  },
})

export const { setDayNight } = dayNightSlice.actions

export default dayNightSlice.reducer
