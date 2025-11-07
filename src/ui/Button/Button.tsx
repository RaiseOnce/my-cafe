import React from 'react'
import styles from './Button.module.scss'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
}

export const Button: React.FC<ButtonProps> = ({
  className,
  children,
  ...props
}) => {
  // формируем строку классов вручную
  let buttonClass = styles.button

  // добавляем кастомные классы, если переданы
  if (className) buttonClass += ` ${className}`

  return (
    <button className={buttonClass} {...props}>
      {children}
    </button>
  )
}

// import React from 'react'
// import styles from './Button.module.scss'

// type ButtonSize = 'small' | 'medium' | 'large'
// type ButtonVariant = 'primary' | 'secondary' | 'outline'

// interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
//   size?: ButtonSize
//   variant?: ButtonVariant
// }

// export const Button: React.FC<ButtonProps> = ({
//   size = 'medium',
//   variant = 'primary',
//   className = '',
//   children,
//   ...props
// }) => {
//   // формируем строку классов вручную
//   let buttonClass = styles.button

//   if (size === 'small') buttonClass += ` ${styles.small}`
//   if (size === 'medium') buttonClass += ` ${styles.medium}`
//   if (size === 'large') buttonClass += ` ${styles.large}`

//   if (variant === 'primary') buttonClass += ` ${styles.primary}`
//   if (variant === 'secondary') buttonClass += ` ${styles.secondary}`
//   if (variant === 'outline') buttonClass += ` ${styles.outline}`

//   // добавляем кастомные классы, если переданы
//   if (className) buttonClass += ` ${className}`

//   return (
//     <button className={buttonClass} {...props}>
//       {children}
//     </button>
//   )
// }
