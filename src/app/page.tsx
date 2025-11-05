'use client'
import { useEffect } from 'react'
import styles from './page.module.scss'
import Categories from '@/components/Categories/Categories'
import ProductCards from '@/components/ProductCards/ProductCards'
import { useProductStore } from '@/store/useProductStore'
import burgerImg from '@/assets/burger.jpg'

export default function Home() {
  const { products, setProducts } = useProductStore()

  useEffect(() => {
    if (products.length === 0) {
      setProducts([
        {
          id: 1,
          name: 'Бургер',
          weight: '200 г',
          price: 150,
          image: burgerImg,
          link: '/burgers/burger',
          count: 0,
          bookmark: true,
        },
        {
          id: 2,
          name: 'Пицца',
          weight: '450 г',
          price: 300,
          image: burgerImg,
          link: '/pizzas/pizza',
          count: 0,
          bookmark: false,
        },
        {
          id: 3,
          name: 'Суши',
          weight: '120 г',
          price: 200,
          image: burgerImg,
          link: '/sushi',
          count: 0,
          bookmark: false,
        },
      ])
    }
  }, [products, setProducts])

  return (
    <div className={styles.home}>
      <div className={styles.container}>
        <h2 className={styles.title}>Меню</h2>
        <Categories />
        <ProductCards />
      </div>
    </div>
  )
}
