import React from 'react'

type Props = React.SVGProps<SVGSVGElement> & {
  className?: string
}

export const Cross = ({ className }: Props) => (
  <svg width="20px" height="20px" viewBox="0 0 24 24" className={className}>
    <path
      d="M16 8L8 16M8.00001 8L16 16"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)
