'use client'

import { useState, useRef, useEffect } from 'react'
import { Button } from '@/ui/Button/Button'
import { Filter } from '@/assets/Filter'
import styles from './Categories.module.scss'
import { Check } from '@/assets/Check'
import { useCatalogStore } from '@/store/useCatalogStore'

type Props = {}

export default function Categories({}: Props) {
  const categories = ['Все', 'Шаурма', 'Мучное', 'Бургеры', 'Напитки']
  const sortOptions = ['По умолчанию', 'Дороже', 'Дешевле']

  const { activeCategory, setActiveCategory, activeSort, setActiveSort } =
    useCatalogStore()

  // новое состояние для модалки сортировки
  const [isSortOpen, setIsSortOpen] = useState(false)

  const toggleSort = () => setIsSortOpen(!isSortOpen)

  const handleSortSelect = (option: string) => {
    setActiveSort(option)
    setIsSortOpen(false) // закрываем модалку после выбора
  }

  const sortRef = useRef<HTMLUListElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (sortRef.current && !sortRef.current.contains(event.target as Node)) {
        setIsSortOpen(false)
      }
    }

    if (isSortOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    } else {
      document.removeEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isSortOpen])

  return (
    <nav className={styles.categories}>
      <ul className={styles.list}>
        {categories.map((category) => {
          const isActive = activeCategory === category
          return (
            <li key={category} className={styles.item}>
              <button
                onClick={() => setActiveCategory(category)}
                className={`${styles.link} ${isActive ? styles.active : ''}`}
              >
                {category}
              </button>
            </li>
          )
        })}
      </ul>

      <div className={styles.sortWrapper}>
        <div className={styles.sortToggler} onClick={toggleSort}>
          <Filter className={styles.svg} />
          <span>Сортировка: {activeSort}</span>
        </div>

        <ul
          ref={sortRef}
          className={`${styles.sortOptions} ${isSortOpen ? styles.open : ''}`}
        >
          {sortOptions.map((option) => {
            const isActive = activeSort === option
            return (
              <li
                key={option}
                className={`${styles.sortOption} ${
                  isActive ? styles.activeSortOption : ''
                }`}
                onClick={() => handleSortSelect(option)}
              >
                <span>{option}</span>
                {isActive ? (
                  <span className={styles.check}>
                    <Check className={styles.checkSvg} />
                  </span>
                ) : (
                  <span className={styles.checkEmpty}></span>
                )}
              </li>
            )
          })}
        </ul>
      </div>
    </nav>
  )
}
