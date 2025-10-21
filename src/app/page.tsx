import styles from './page.module.scss'
import Menu from '@/components/Menu/Menu'
import ProductCards from '@/components/ProductCards/ProductCards'

export default function Home() {
  return (
    <div className={styles.home}>
      <div className={styles.container}>
        <h2 className={styles.title}>Меню</h2>
        <Menu />
        <ProductCards />
      </div>
    </div>
  )
}
