import styles from './page.module.scss'
import Categories from '@/components/Categories/Categories'
import ProductCards from '@/components/ProductCards/ProductCards'
import { cookies } from 'next/headers'
import { prisma } from '../../../prisma/prisma-client'

export default async function Home() {
  const cookieStore = await cookies()
  const token = cookieStore.get('cartToken')?.value

  const categories = await prisma.category.findMany({
    include: {
      products: {
        include: {
          items: true,
        },
      },
    },
  })

  const products = await prisma.product.findMany({
    include: {
      category: true,
      items: {
        include: {
          cartItems: {
            where: {
              cart: { token },
            },
          },
        },
      },
    },
  })

  return (
    <div className={styles.container}>
      <div className={styles.home}>
        <h2 className={styles.title}>Меню</h2>
        <Categories categories={categories} />
        <ProductCards products={products} />
      </div>
    </div>
  )
}
