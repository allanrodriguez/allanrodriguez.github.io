import { graphql, navigate, useStaticQuery } from "gatsby"
import React from "react"
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"
import styles from "./header.module.css"

function GatsbyNavLink(props) {
  return (
    <Nav.Link eventKey={props.to} onSelect={() => navigate(props.to)}>
      {props.children}
    </Nav.Link>
  )
}

function HeaderLogoLink({ alt, className, href, logoName }) {
  return (
    <a href={href}>
      <img
        className={className}
        alt={alt}
        src={`https://raw.githubusercontent.com/rdimascio/icons/master/icons/light/${logoName}.svg`}
        height="21"
      />
    </a>
  )
}

export default function Header() {
  const data = useStaticQuery(graphql`
    query HeaderQuery {
      site {
        siteMetadata {
          title
          links {
            gitHub
            linkedIn
            spotify
          }
        }
      }
    }
  `)
  const links = data.site.siteMetadata.links

  return (
    <Navbar collapseOnSelect expand="lg" variant="dark">
      <Navbar.Brand>
        <b>{data.site.siteMetadata.title}</b>
      </Navbar.Brand>

      <Navbar.Toggle aria-controls="responsive-navbar-nav" />

      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav activeKey="/" className="mr-auto">
          <Nav.Item>
            <GatsbyNavLink to="/">About</GatsbyNavLink>
          </Nav.Item>
          <Nav.Item>
            <GatsbyNavLink to="/projects">Projects</GatsbyNavLink>
          </Nav.Item>
        </Nav>
        <Nav className="flex-row py-2" as="ul">
          <Nav.Item className={styles.logoLink} as="li">
            <HeaderLogoLink alt="GitHub logo" href={links.gitHub} logoName="github" />
          </Nav.Item>
          <Nav.Item className={styles.logoLink} as="li">
            <HeaderLogoLink alt="LinkedIn logo" href={links.linkedIn} logoName="linkedin" />
          </Nav.Item>
          <Nav.Item className={styles.logoLink} as="li">
            <HeaderLogoLink alt="Spotify logo" href={links.spotify} logoName="spotify" />
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}
