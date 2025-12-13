import React from 'react'

type Props = React.SVGProps<SVGSVGElement> & {
  className?: string
}

export const Cross = ({ className }: Props) => (
  <svg width="24px" height="24px" viewBox="0 0 24 24" className={className}>
    <circle cx="12" cy="12" r="10" />

    <path
      d="M16 8L8 16M8.00001 8L16 16"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)
