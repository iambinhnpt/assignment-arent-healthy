import React, { HTMLAttributes } from 'react'
import { Link, Hex } from './styles'

interface Props extends HTMLAttributes<HTMLAnchorElement> {
  className?: string
  width?: string
  height?: string
  maxWidth?: string
  maxHeight?: string
}
export const HexagonBtn: React.FC<Props> = ({ className, children, ...blockprops }) => {
  return (
    <Link className={className} {...blockprops}>
      <Hex>{children}</Hex>
    </Link>
  )
}
