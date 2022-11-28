import React, { HTMLAttributes } from 'react'

interface Props extends HTMLAttributes<HTMLDivElement> {
  className?: string
  width?: string
  height?: string
  maxWidth?: string
  maxHeight?: string
}
export const CenterBox: React.FC<Props> = ({ className, children, ...blockprops }) => {
  return (
    <div className={className} {...blockprops}>
      {children}
    </div>
  )
}
