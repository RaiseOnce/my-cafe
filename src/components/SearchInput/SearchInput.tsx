'use client'

import React, { useEffect, useRef, useState } from 'react'
import styles from './SearchInput.module.scss'
import { Loupe } from '@/assets/Loupe'

interface Props {
  className?: string
}

export const SearchInput: React.FC<Props> = ({ className }) => {
  const [items] = useState([
    'Телефон',
    'телевизор',
    'Ноутбук',
    'Планшет',
    'тепловизор',
    'теплотрасса',
    'телестанция',
    'телебашня',
    'телескоп',
  ])
  const [query, setQuery] = useState('')
  const [hovered, setHovered] = useState<string | null>(null)
  const [isOpen, setIsOpen] = useState(false)

  const ref = useRef<HTMLDivElement>(null)

  // Фильтрация: только элементы, которые начинаются с query
  const filtered =
    query.length >= 2
      ? items.filter((item) =>
          item.toLowerCase().startsWith(query.toLowerCase())
        )
      : []

  const suggestion = (() => {
    const base = query
    const next = hovered
      ? hovered.toLowerCase()
      : filtered.length > 0
      ? filtered[0].toLowerCase()
      : ''

    if (!base || !next.startsWith(base.toLowerCase())) return base
    return next
  })()

  // Закрытие по клику вне компонента
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setIsOpen(false)
      }
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  // Управление открытием списка при изменении query
  useEffect(() => {
    setIsOpen(query.length >= 2 && filtered.length > 0)
  }, [query, filtered])

  const onSelect = (value: string) => {
    setQuery(value.toLowerCase())
    setHovered(null)
    setIsOpen(false)
  }

  return (
    <div ref={ref} className={`${className} ${styles.search}`}>
      <div className={styles.inputWrapper}>
        <div className={styles.searchSvg}>
          <Loupe />
        </div>
        <div className={styles.suggestion}>{suggestion}</div>
        <input
          className={styles.input}
          autoComplete="off"
          name="searchInput"
          type="text"
          placeholder="Найти"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value)
            setHovered(null)
          }}
        />
      </div>

      {isOpen && (
        <div className={styles.searchItems}>
          {filtered.slice(0, 5).map((item) => (
            <div
              key={item}
              className={styles.searchItem}
              onClick={() => onSelect(item.toLowerCase())}
              onMouseEnter={() => setHovered(item.toLowerCase())}
              onMouseLeave={() => setHovered(null)}
            >
              {item.toLowerCase()}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
