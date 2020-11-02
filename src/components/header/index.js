import { Link, graphql, useStaticQuery } from "gatsby"
import React from "react"
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"
import DayNightSwitch from "../day-night-switch"

function GatsbyNavLink(props) {
  return <Link activeClassName="nav-link" data-rb-event-key={props.to} {...props} />
}

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
          <GatsbyNavLink to="/">About</GatsbyNavLink>
          <Nav.Link href="#projects">Projects</Nav.Link>
        </Nav>
        <Nav>
          <img src="https://raw.githubusercontent.com/rdimascio/icons/master/icons/light/github.svg" height="24" />
          <img src="https://raw.githubusercontent.com/rdimascio/icons/master/icons/light/linkedin.svg" height="24" />
          <img src="https://raw.githubusercontent.com/rdimascio/icons/master/icons/light/spotify.svg" height="24" />
          {/* <DayNightSwitch /> */}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}
