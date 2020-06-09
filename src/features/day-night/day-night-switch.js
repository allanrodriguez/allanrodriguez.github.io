import React, { useCallback } from "react"
import { useDispatch, useSelector } from "react-redux"
import RoundedSwitch from "../../components/rounded-switch"
import { setDayNight } from "./day-night-slice"

function DayNightSwitch() {
  const dispatch = useDispatch()
  const dayNight = useSelector(state => state.dayNight)
  const setDayNightStatus = useCallback(checked => dispatch(setDayNight(checked)), [dispatch])

  return <RoundedSwitch leftText="🌜" rightText="🌞" checked={dayNight.isDay} onSwitch={setDayNightStatus} />
}

export default DayNightSwitch
