'use client'

import { useState, useRef, useEffect } from 'react'
import { Button } from '@/ui/Button/Button'
import { Filter } from '@/assets/Filter'
import styles from './Categories.module.scss'
import { Check } from '@/assets/Check'
import { useCatalogStore } from '@/store/useCatalogStore'

type Category = {
  id: number
  name: string
  products: any[]
}

type Props = {
  categories: Category[]
}

export default function Categories({ categories }: Props) {
  const sortOptions = ['По умолчанию', 'Дороже', 'Дешевле']

  const { activeCategory, setCategory, activeSort, setSort } = useCatalogStore()

  // новое состояние для модалки сортировки
  const [isSortOpen, setIsSortOpen] = useState(false)

  const toggleSort = () => setIsSortOpen(!isSortOpen)

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
          const isActive = activeCategory === category.name
          return (
            <li key={category.id} className={styles.item}>
              <button
                onClick={() => setCategory(category.name)}
                className={`${styles.link} ${isActive ? styles.active : ''}`}
              >
                {category.name}
              </button>
            </li>
          )
        })}
      </ul>

      <div className={styles.sortWrapper}>
        <div className={styles.sortToggler} onClick={toggleSort}>
          <Filter className={styles.svg} />
          <span>Сортировка: {activeSort || 'По умолчанию'}</span>
        </div>

        <ul
          ref={sortRef}
          className={`${styles.sortOptions} ${isSortOpen ? styles.open : ''}`}
        >
          {sortOptions.map((option) => {
            const isActive =
              (option === 'По умолчанию' && activeSort === null) ||
              activeSort === option
            return (
              <li
                key={option}
                className={`${styles.sortOption} ${
                  isActive ? styles.activeSortOption : ''
                }`}
                onClick={() => {
                  setSort(option === 'По умолчанию' ? null : (option as any))
                  setIsSortOpen(false)
                }}
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
