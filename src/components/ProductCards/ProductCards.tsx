'use client'
import { useProductStore } from '@/store/useProductStore'
import ProductCard from '../ProductCard/ProductCard'
import styles from './ProductCards.module.scss'
import { useCatalogStore } from '@/store/useCatalogStore'

export default function ProductCards() {
  const { products } = useProductStore()
  const { activeCategory, activeSort } = useCatalogStore()

  // фильтруем по категории
  const filteredProducts =
    activeCategory === 'Все'
      ? products
      : products.filter((p) => p.category === activeCategory)

  // сортируем по цене
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (activeSort === 'Дороже') return b.price - a.price
    if (activeSort === 'Дешевле') return a.price - b.price
    return 0
  })

  return (
    <div className={styles.productCards}>
      {sortedProducts.map((item) => (
        <ProductCard key={item.id} product={item} />
      ))}
    </div>
  )
}
