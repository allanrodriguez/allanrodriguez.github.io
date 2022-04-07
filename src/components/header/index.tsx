import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import GatsbyNavLink from "./components/gatsby-nav-link";
import LogoLink from "./components/logo-link";
import { logoLink, navbar } from "./header.module.css";

interface HeaderProps {
  onToggle?: (expanded: boolean) => void;
  style?: React.CSSProperties;
}

const Header: React.FC<HeaderProps> = ({ onToggle, style }) => {
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
  `);
  const links = data.site.siteMetadata.links;

  return (
    <Navbar
      className={navbar}
      collapseOnSelect
      expand="lg"
      variant="dark"
      fixed="top"
      style={style}
      onToggle={onToggle}
    >
      <Container fluid="lg">
        <Navbar.Brand>
          <b>{data.site.siteMetadata.title}</b>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />

        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav
            activeKey={
              typeof window !== "undefined"
                ? window.location.pathname
                : undefined
            }
            className="me-auto"
          >
            <Nav.Item>
              <GatsbyNavLink to="/">About</GatsbyNavLink>
            </Nav.Item>
            <Nav.Item>
              <GatsbyNavLink to="/projects/">Projects</GatsbyNavLink>
            </Nav.Item>
          </Nav>
          <Nav className="flex-row py-2" as="ul">
            <Nav.Item className={logoLink} as="li">
              <LogoLink
                alt="GitHub logo"
                href={links.gitHub}
                logoName="github"
              />
            </Nav.Item>
            <Nav.Item className={logoLink} as="li">
              <LogoLink
                alt="LinkedIn logo"
                href={links.linkedIn}
                logoName="linkedin"
              />
            </Nav.Item>
            <Nav.Item className={logoLink} as="li">
              <LogoLink
                alt="Spotify logo"
                href={links.spotify}
                logoName="spotify"
              />
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
