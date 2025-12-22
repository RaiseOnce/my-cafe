'use client'

import ProductCard from '../ProductCard/ProductCard'
import styles from './ProductCards.module.scss'
import { useCatalogStore } from '@/app/store/useCatalogStore'

type Category = {
  id: number
  name: string
}

type Product = {
  id: number
  name: string
  imageUrl: string
  bookmark: boolean
  categoryId: number
  category: Category
  createdAt: Date
  updatedAt: Date
  items: any[]
}

type Props = {
  products: Product[]
}

export default function ProductCards({ products }: Props) {
  const { activeCategory, activeSort } = useCatalogStore()

  const filteredProducts =
    activeCategory === 'Все'
      ? products
      : products.filter((p) => p.category.name === activeCategory)

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    const aPrice = a.items[0]?.price ?? 0
    const bPrice = b.items[0]?.price ?? 0

    if (activeSort === 'Дороже') return bPrice - aPrice
    if (activeSort === 'Дешевле') return aPrice - bPrice
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
