import { Link } from "gatsby";
import React from "react";

interface GatsbyNavLinkProps {
  to: string;
}

const GatsbyNavLink: React.FC<React.PropsWithChildren<GatsbyNavLinkProps>> = ({
  children,
  to,
}) => {
  return (
    <Link className="nav-link" activeClassName="active" to={to}>
      {children}
    </Link>
  );
};

export default GatsbyNavLink;
