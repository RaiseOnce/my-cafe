import React from 'react'

type Props = React.SVGProps<SVGSVGElement> & {
  className?: string
}

export const Minus = ({ className }: Props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24px"
    height="24px"
    viewBox="0 0 24 24"
    className={className}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5 11C4.44772 11 4 11.4477 4 12C4 12.5523 4.44772 13 5 13H19C19.5523 13 20 12.5523 20 12C20 11.4477 19.5523 11 19 11H5Z"
    />
  </svg>
)
