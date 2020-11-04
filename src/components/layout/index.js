import React from "react"
import Container from "react-bootstrap/Container"
import Footer from "../footer"
import Header from "../header"
import "bootstrap/dist/css/bootstrap.min.css"

export default function Layout({ children, className }) {
  return (
    <>
      <header>
        <Header />
      </header>
      <Container className={className} fluid="lg">
        {children}
      </Container>
      <footer>
        <Footer />
      </footer>
    </>
  )
}
