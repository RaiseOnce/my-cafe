'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styles from './ProductCard.module.scss'
import { Bookmark } from '@/assets/Bookmark'
import { Button } from '@/ui/Button/Button'
import { Plus } from '@/assets/Plus'
import { Minus } from '@/assets/Minus'

type CartItem = {
  quantity: number
}

type Item = {
  id: number
  price: number
  weight?: string
  cartItems?: CartItem[]
}

type Category = {
  id: number
  name: string
}

type Product = {
  id: number
  name: string
  imageUrl: string
  bookmark: boolean
  category: Category
  items: Item[]
}

type Props = {
  product: Product
}

export default function ProductCard({ product }: Props) {
  const item = product.items[0]

  const price = item?.price ?? 0
  const weight = item?.weight ?? ''
  const count = item?.cartItems?.[0]?.quantity ?? 0

  return (
    <React.Fragment>
      <div className={styles.productCard}>
        <div
          className={`${styles.inner} ${count > 0 ? styles.innerActive : ''}`}
        >
          <Link href={'/'} className={styles.innerLink}>
            <div className={styles.imgWrapper}>
              <div className={styles.avatar}></div>
              <Image
                className={styles.img}
                alt={product.name}
                src={product.imageUrl}
                width={648}
                height={312}
              />
              {count > 0 ? (
                <div
                  className={styles.counter}
                  style={{
                    minWidth:
                      count < 10 ? '52px' : count < 100 ? '62px' : '72px',
                  }}
                >
                  {count}
                </div>
              ) : (
                ''
              )}
              <div
                className={styles.bookmark}
                onClick={(e) => {
                  e.preventDefault()
                  e.stopPropagation()
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
              <div className={styles.weight}>{weight} г</div>
            </div>
          </Link>
          <div className={styles.btnWrapper}>
            <Button className={styles.btn}>
              <span
                className={`${styles.minus} ${count && styles.minusActive}`}
                onClick={(e) => {
                  e.stopPropagation()
                }}
              >
                <Minus />
              </span>
              <div className={styles.price}>{price} TMT</div>
              <span
                className={styles.plus}
                onClick={(e) => {
                  e.stopPropagation()
                }}
              >
                <Plus />
              </span>
            </Button>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}
