import React, { AnchorHTMLAttributes } from 'react'

interface Props extends AnchorHTMLAttributes<HTMLAnchorElement> {
  className?: string
  fontSize?: any
  color?: string
  padding?: string
  display?: string
  width?: string
  height?: string
}
export const PageLink: React.FC<Props> = ({ className, children, href, ...linkprops }) => {
  return (
    <a href={href} className={className} {...linkprops}>
      {children}
    </a>
  )
}
