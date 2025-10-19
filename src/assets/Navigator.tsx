import React from 'react'

type Props = React.SVGProps<SVGSVGElement> & {
  className?: string
}

export const Navigator = ({ className }: Props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24px"
    height="24px"
    viewBox="0 0 24 24"
    className={className}
  >
    <path
      d="M20 4L12.2455 20L10.9174 13.0826L4 11.7545L20 4Z"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)
