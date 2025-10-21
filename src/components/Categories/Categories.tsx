'use client'

import { useState } from 'react'
import { Button } from '@/ui/Button/Button'
import { Filter } from '@/assets/Filter'
import styles from './Categories.module.scss'

type Props = {}

export default function Categories({}: Props) {
  const categories = ['Все', 'Шаурма', 'Мучное', 'Бургеры', 'Напитки']
  const sortOptions = ['По умолчанию', 'Дороже', 'Дешевле']

  // по умолчанию активна первая категория
  const [activeCategory, setActiveCategory] = useState(categories[0])

  // состояние активной сортировки
  const [activeSort, setActiveSort] = useState(sortOptions[0])

  // новое состояние для модалки сортировки
  const [isSortOpen, setIsSortOpen] = useState(false)

  const toggleSort = () => setIsSortOpen(!isSortOpen)

  const handleSortSelect = (option: string) => {
    setActiveSort(option)
    setIsSortOpen(false) // закрываем модалку после выбора
  }

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

        {isSortOpen && (
          <ul className={styles.sortOptions}>
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
                </li>
              )
            })}
          </ul>
        )}
      </div>
    </nav>
  )
}
