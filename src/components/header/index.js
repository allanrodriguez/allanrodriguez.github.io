import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"
import DayNightSwitch from "../day-night-switch"

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
    <Navbar collapseOnSelect expand="lg" variant="dark">
      <Navbar.Brand>
        <b>{data.site.siteMetadata.title}</b>
      </Navbar.Brand>

      <Navbar.Toggle aria-controls="responsive-navbar-nav" />

      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#">About</Nav.Link>
          <Nav.Link href="#projects">Projects</Nav.Link>
        </Nav>
        <Nav>
          <DayNightSwitch />
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}
