import React from 'react'
import Link from 'next/link'
import Image, { StaticImageData } from 'next/image'
import styles from './ProductCard.module.scss'
import { Bookmark } from '@/assets/Bookmark'
import { Button } from '@/ui/Button/Button'

type Product = {
  id: number | string
  name: string
  weight: string
  price: number
  image: StaticImageData | string
  link?: string
  bookmark?: boolean
  count?: number
}

type Props = {
  product: Product
}

export default function ProductCard({ product }: Props) {
  return (
    <React.Fragment>
      <div className={styles.productCard}>
        <div
          className={`${styles.inner} ${product.count && styles.innerActive}`}
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
              {product.count && (
                <div className={styles.counter}>{product.count}</div>
              )}
              <div className={styles.bookmark}>
                <Bookmark
                  className={`${styles.bookmarkSvg} ${
                    product.bookmark && styles.bookmarkSvgActive
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
            <Button className={styles.btn}>
              <span
                className={`${styles.minus} ${
                  product.count && styles.minusActive
                }`}
              >
                -
              </span>
              <div className={styles.price}>{product.price} TMT</div>
              <span className={styles.plus}>+</span>
            </Button>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}
