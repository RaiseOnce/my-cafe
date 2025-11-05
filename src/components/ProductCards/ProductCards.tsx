'use client'
import { useProductStore } from '@/store/useProductStore'
import ProductCard from '../ProductCard/ProductCard'
import styles from './ProductCards.module.scss'

export default function ProductCards() {
  const { products } = useProductStore()

  return (
    <div className={styles.productCards}>
      {products.map((item) => (
        <ProductCard key={item.id} product={item} />
      ))}
    </div>
  )
}
