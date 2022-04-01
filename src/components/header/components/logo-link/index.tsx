import React from "react";

interface HeaderLogoLinkProps {
  alt?: string;
  className?: string;
  href?: string;
  logoName: string;
}

const HeaderLogoLink: React.FC<HeaderLogoLinkProps> = ({
  alt,
  className,
  href,
  logoName,
}) => {
  return (
    <a href={href}>
      <img
        className={className}
        alt={alt}
        src={`https://raw.githubusercontent.com/rdimascio/icons/master/icons/light/${logoName}.svg`}
        height="21"
      />
    </a>
  );
};

export default HeaderLogoLink;
