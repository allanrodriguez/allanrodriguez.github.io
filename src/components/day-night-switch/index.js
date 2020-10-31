import React, { useCallback } from "react"
import { useDispatch, useSelector } from "react-redux"
import { setDayNight } from "./day-night-slice"
import styles from "./day-night-switch.module.css"

export default function DayNightSwitch() {
  const dispatch = useDispatch()
  const dayNight = useSelector(state => state.dayNight)
  const setDayNightStatus = useCallback(checked => dispatch(setDayNight(checked)), [dispatch])

  return (
    <div className={styles.container}>
      🌜
      <label className={styles.switch}>
        <input type="checkbox" onChange={e => setDayNightStatus(e.target.checked)} checked={dayNight.isDay} />
        <span className={styles.slider} />
      </label>
      🌞
    </div>
  )
}
