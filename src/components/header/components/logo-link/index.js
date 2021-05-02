import React from "react"

export default function HeaderLogoLink({ alt, className, href, logoName }) {
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
