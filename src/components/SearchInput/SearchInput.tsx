'use client'

import React, { useEffect, useRef, useState } from 'react'
import styles from './SearchInput.module.scss'
import { Loupe } from '@/assets/Loupe'
import { Cross } from '@/assets/Cross'
import { Api } from '../../services/api-client'
import { Product } from '@prisma/client'
import { useDebounce } from 'react-use'
import Link from 'next/link'

interface Props {
  className?: string
}

export const SearchInput: React.FC<Props> = ({ className }) => {
  const [query, setQuery] = useState('')
  const [hovered, setHovered] = useState<string | null>(null)
  const [products, setProducts] = useState<Product[]>([])
  const [isOpen, setIsOpen] = useState(false)

  useDebounce(
    async () => {
      try {
        Api.products.search(query).then((products) => {
          setProducts(products)
        })
      } catch (error) {
        console.log(error)
      }
    },
    250,
    [query]
  )

  const ref = useRef<HTMLDivElement>(null)

  // Фильтрация: только элементы, которые начинаются с query
  const filtered =
    query.length >= 2
      ? products.filter((product) =>
          product.name.toLowerCase().startsWith(query.toLowerCase())
        )
      : []

  const suggestion = (() => {
    const base = query
    const next = hovered
      ? hovered.toLowerCase()
      : filtered.length > 0
      ? filtered[0].name.toLowerCase()
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

  const onSelect = (value: string) => {
    setQuery(value.toLowerCase())
    setHovered(null)
    setIsOpen(false)
  }

  return (
    <div ref={ref} className={`${className} ${styles.search}`}>
      <div className={styles.inputWrapper}>
        <div
          className={styles.searchSvg}
          onClick={() => {
            setIsOpen(true)
            ref.current?.querySelector('input')?.focus()
          }}
        >
          <Loupe />
        </div>
        {isOpen && <div className={styles.suggestion}>{suggestion}</div>}
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
            setIsOpen(e.target.value.length >= 1 && filtered.length > 0)
          }}
        />

        {query && (
          <div
            className={styles.crossSvg}
            onClick={() => {
              setQuery('')
              setHovered(null)
              setIsOpen(false)
            }}
          >
            <div className={styles.crossInner}>
              <Cross />
            </div>
          </div>
        )}
      </div>

      {isOpen && filtered.length > 0 && (
        <div className={styles.searchItems}>
          {filtered.slice(0, 5).map((product) => (
            <Link
              key={product.id}
              className={styles.searchItem}
              href={`/product/${product.id}`}
              onClick={() => onSelect(product.name.toLowerCase())}
              onMouseEnter={() => setHovered(product.name.toLowerCase())}
              onMouseLeave={() => setHovered(null)}
            >
              {product.name.toLowerCase()}
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}
