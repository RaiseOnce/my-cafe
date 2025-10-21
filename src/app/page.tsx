import styles from './page.module.scss'
import Categories from '@/components/Categories/Categories'
import ProductCards from '@/components/ProductCards/ProductCards'

export default function Home() {
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
