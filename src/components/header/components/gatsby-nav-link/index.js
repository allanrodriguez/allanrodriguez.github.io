import { Link } from "gatsby"
import React from "react"

export default function GatsbyNavLink({ children, to }) {
  return (
    <Link className="nav-link" activeClassName="active" to={to}>
      {children}
    </Link>
  )
}
