import React from 'react'
import styles from './Container.module.scss'

interface Props {
  className?: string
}

export const Container: React.FC<React.PropsWithChildren<Props>> = ({
  className,
  children,
}) => {
  return (
    <div className={`${styles.container} ${className || ''}`}>{children}</div>
  )
}
