import React from 'react'

type Props = React.SVGProps<SVGSVGElement> & {
  className?: string
}

export const Popup = ({ className }: Props) => (
  <svg
    width="24"
    height="8"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path d="M12 0L11.5777 0.844584C11.3258 1.34844 11.1998 1.60037 11.0728 1.82886C9.04687 5.47468 5.27311 7.80699 1.10615 7.98862C0.844995 8 0.56333 8 0 8L24 8C23.4367 8 23.155 8 22.8938 7.98862C18.7269 7.80699 14.9531 5.47468 12.9272 1.82886C12.8002 1.60038 12.6742 1.34846 12.4223 0.844643L12.4223 0.844584L12 0Z"></path>
  </svg>
)
