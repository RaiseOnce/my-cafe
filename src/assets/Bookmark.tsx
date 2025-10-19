import React from 'react'

type Props = React.SVGProps<SVGSVGElement> & {
  className?: string
}

export const Bookmark = ({ className }: Props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24px"
    height="24px"
    viewBox="0 0 24 24"
    className={className}
  >
    <path
      d="M6 6C6 4.89543 6.89543 4 8 4H16C17.1046 4 18 4.89543 18 6V18.7268C18 19.5969 16.9657 20.0519 16.3243 19.4639L12 15.5L7.67573 19.4639C7.03432 20.0519 6 19.5969 6 18.7268V6Z"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)
