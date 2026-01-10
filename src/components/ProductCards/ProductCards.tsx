'use client'

import ProductCard from '../ProductCard/ProductCard'
import styles from './ProductCards.module.scss'
import { useCatalogStore } from '@/app/store/useCatalogStore'

type Category = {
  id: number
  name: string
}

type CartItem = {
  quantity: number
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
  categoryId: number
  category: Category
  cartItems: CartItem[]
}

type Props = {
  products: Product[]
}

export default function ProductCards({ products }: Props) {
  const { activeCategory, activeSort } = useCatalogStore()

  // Фильтрация по категории
  const filteredProducts =
    activeCategory === 'Все'
      ? products
      : products.filter((p) => p.category.name === activeCategory)

  // Сортировка по цене
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    const aPrice = a.price
    const bPrice = b.price

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
