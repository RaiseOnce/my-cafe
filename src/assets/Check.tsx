import React from 'react'

type Props = React.SVGProps<SVGSVGElement> & {
  className?: string
}

export const Check = ({ className }: Props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20px"
    height="20px"
    viewBox="0 0 24 24"
    className={className}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M17.0303 8.78039L8.99993 16.8107L5.4696 13.2804L6.53026 12.2197L8.99993 14.6894L15.9696 7.71973L17.0303 8.78039Z"
    />
  </svg>
)
