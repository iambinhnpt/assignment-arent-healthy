import React, { HTMLAttributes } from 'react'

interface Props extends HTMLAttributes<HTMLDivElement> {
  className?: string
  display?: string
  backgroundImage?: string
  backgroundColors?: string
  border?: string
  width?: string
  height?: string
  maxWidth?: string
  margin?: string
  padding?: string
  position?: string
}
export const BlockWrapper: React.FC<Props> = ({ className, children, ...blockprops }) => {
  return (
    <div className={className} {...blockprops}>
      {children}
    </div>
  )
}
