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

type Category = {
  id: number
  name: string
}

type Product = {
  id: number
  name: string
  imageUrl: string
  description: string
  composition: string
  proteins: number
  fats: number
  carbohydrates: number
  calories: number
  price: number
  weight: number
  category: Category
  cartItems: CartItem[]
}

type Props = {
  product: Product
}

export default function ProductCard({ product }: Props) {
  // Вытаскиваем количество из cartItems
  const count = product.cartItems[0]?.quantity ?? 0

  return (
    <div className={styles.productCard}>
      <div className={`${styles.inner} ${count > 0 ? styles.innerActive : ''}`}>
        <Link href={`/product/${product.id}`} className={styles.innerLink}>
          <div className={styles.imgWrapper}>
            <div className={styles.avatar}></div>
            <Image
              className={styles.img}
              alt={product.name}
              src={product.imageUrl}
              width={648}
              height={312}
            />
            {count > 0 && (
              <div
                className={styles.counter}
                style={{
                  minWidth: count < 10 ? '52px' : count < 100 ? '62px' : '72px',
                }}
              >
                {count}
              </div>
            )}
            <div
              className={styles.bookmark}
              onClick={(e) => {
                e.preventDefault()
                e.stopPropagation()
              }}
            >
              {/* <Bookmark
              className={`${styles.bookmarkSvg} ${
                product.bookmark ? styles.bookmarkSvgActive : ''
              }`}
              /> */}
            </div>
          </div>
          <div className={styles.middle}>
            <h4 className={styles.name}>{product.name}</h4>
            <div className={styles.weight}>{product.weight} г</div>
          </div>
        </Link>
        <div className={styles.btnWrapper}>
          <Button className={styles.btn}>
            <span
              className={`${styles.minus} ${count && styles.minusActive}`}
              // onClick={(e) => {
              //   e.stopPropagation()
              // }}
            >
              <Minus />
            </span>
            <div className={styles.price}>{product.price} TMT</div>
            <span
              className={styles.plus}
              // onClick={(e) => {
              //   e.stopPropagation()
              // }}
            >
              <Plus />
            </span>
          </Button>
        </div>
      </div>
    </div>
  )
}
