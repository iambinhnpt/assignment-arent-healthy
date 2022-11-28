import React, { TextareaHTMLAttributes } from 'react'

interface Props extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  className?: string
  fontSize?: string
  fontWeight?: string
  color?: string
  textAlign?: string
}
export const PageText: React.FC<Props> = ({ className, children }) => {
  return <span className={className}>{children}</span>
}
