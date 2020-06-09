import React from "react"
import styles from "./rounded-switch.module.css"

function RoundedSwitch({ onSwitch, leftText, rightText }) {
  return (
    <div className={styles.container}>
      {leftText}
      <label className={styles.switch}>
        <input type="checkbox" onChange={e => onSwitch && onSwitch(e.target.checked)} />
        <span className={styles.slider} />
      </label>
      {rightText}
    </div>
  )
}

export default RoundedSwitch
