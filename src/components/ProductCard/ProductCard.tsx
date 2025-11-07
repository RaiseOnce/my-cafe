'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import Image, { StaticImageData } from 'next/image'
import styles from './ProductCard.module.scss'
import { Bookmark } from '@/assets/Bookmark'
import { Button } from '@/ui/Button/Button'
import { useProductStore } from '@/store/useProductStore'

type Product = {
  id: number | string
  name: string
  weight: string
  price: number
  image: StaticImageData | string
  link: string
  bookmark: boolean
  count: number
}

type Props = {
  product: Product
}

export default function ProductCard({ product }: Props) {
  const { increaseCount, decreaseCount } = useProductStore()
  const { toggleBookmark } = useProductStore()

  const handleButtonClick = () => {
    // Если товара ещё нет — первый клик добавляет 1
    if (product.count === 0) {
      increaseCount(product.id)
    }
  }

  return (
    <React.Fragment>
      <div className={styles.productCard}>
        <div
          className={`${styles.inner} ${
            product.count > 0 ? styles.innerActive : ''
          }`}
        >
          <Link href={product.link || '/'} className={styles.innerLink}>
            <div className={styles.imgWrapper}>
              <div className={styles.avatar}></div>
              <Image
                className={styles.img}
                alt={product.name}
                src={product.image}
                width={0}
                height={0}
              />
              {product.count > 0 ? (
                <div
                  className={styles.counter}
                  style={{
                    minWidth:
                      product.count < 10
                        ? '52px'
                        : product.count < 100
                        ? '62px'
                        : '72px',
                  }}
                >
                  {product.count}
                </div>
              ) : (
                ''
              )}
              <div
                className={styles.bookmark}
                onClick={(e) => {
                  e.preventDefault()
                  e.stopPropagation()
                  toggleBookmark(product.id)
                }}
              >
                <Bookmark
                  className={`${styles.bookmarkSvg} ${
                    product.bookmark ? styles.bookmarkSvgActive : ''
                  }`}
                />
              </div>
            </div>
            <div className={styles.middle}>
              <h4 className={styles.name}>{product.name}</h4>
              <div className={styles.weight}>{product.weight}</div>
            </div>
          </Link>
          <div className={styles.btnWrapper}>
            <Button className={styles.btn} onClick={handleButtonClick}>
              <span
                className={`${styles.minus} ${
                  product.count && styles.minusActive
                }`}
                onClick={(e) => {
                  e.stopPropagation()
                  decreaseCount(product.id)
                }}
              >
                -
              </span>
              <div className={styles.price}>{product.price} TMT</div>
              <span
                className={styles.plus}
                onClick={(e) => {
                  e.stopPropagation()
                  increaseCount(product.id)
                }}
              >
                +
              </span>
            </Button>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}
