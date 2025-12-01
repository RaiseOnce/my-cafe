'use client'

import React from 'react'
import styles from './SearchInput.module.scss'
import { Loupe } from '@/assets/Loupe'

interface Props {
  className?: string
}

export const SearchInput: React.FC<Props> = ({ className }) => {
  const [focused, setFocused] = React.useState(false)

  return (
    <div className={`${className} ${styles.search}`}>
      <div className={styles.searchSvg}>
        <Loupe />
      </div>
      <input
        className={styles.input}
        type="text"
        placeholder="Найти"
        onFocus={() => setFocused(true)}
      />
    </div>
  )
}
