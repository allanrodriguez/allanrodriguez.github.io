import React from "react"
import Container from "react-bootstrap/Container"
import { Helmet } from "react-helmet-async"
import Footer from "../footer"
import Header from "../header"
import "bootstrap/dist/css/bootstrap.min.css"
import styles from "./layout.module.css"

const headerHeight = 56

function createWindowScrollCallback(callback) {
  let isTicking = false
  let previousScrollY = window.scrollY

  return () => {
    const deltaY = window.scrollY - previousScrollY
    if (deltaY === 0) return

    previousScrollY = window.scrollY

    if (isTicking) return

    window.requestAnimationFrame(() => {
      callback(deltaY)
      isTicking = false
    })

    isTicking = true
  }
}

export default function Layout({ children, className }) {
  const [headerTop, setHeaderTop] = React.useState(0)

  React.useEffect(() => {
    let localHeaderTop = 0

    const onWindowScroll = createWindowScrollCallback(deltaY => {
      if (deltaY > 0 && localHeaderTop > -headerHeight) {
        localHeaderTop = localHeaderTop - deltaY > -headerHeight ? localHeaderTop - deltaY : -headerHeight
        setHeaderTop(localHeaderTop)
      } else if (deltaY < 0 && localHeaderTop < 0) {
        localHeaderTop = localHeaderTop < deltaY ? localHeaderTop - deltaY : 0
        setHeaderTop(localHeaderTop)
      }
    })

    window.addEventListener("scroll", onWindowScroll)

    return () => window.removeEventListener("scroll", onWindowScroll)
  }, [])

  return (
    <>
      <Helmet htmlAttributes={{ lang: "en" }} />
      <header>
        <Header style={{ top: headerTop }} />
      </header>
      <main>
        <div className={styles.fixed}>
          <Container className={className} fluid="lg">
            {children}
          </Container>
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  )
}
