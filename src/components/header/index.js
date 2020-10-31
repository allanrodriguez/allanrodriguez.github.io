import { useStaticQuery } from "gatsby"
import React from "react"
import DayNightSwitch from "../day-night-switch"
import styles from "./header.module.css"

export default function Header() {
  const data = useStaticQuery(graphql`
    query TitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <nav>
      <div className={styles.titleContainer}>
        <div className={styles.title}>{data.site.siteMetadata.title}</div>
        <div
          style={{
            display: "flex",
            flexGrow: 1,
            justifyContent: "right",
          }}
        >
          <DayNightSwitch />
        </div>
      </div>
    </nav>
  )
}
