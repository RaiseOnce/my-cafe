import { Button } from '@/ui/Button/Button'
import Link from 'next/link'
import { Filter } from '@/assets/Filter'
import styles from './Menu.module.scss'

type Props = {}

export default function Menu({}: Props) {
  return (
    <nav className={styles.nav}>
      <ul className={styles.navList}>
        <li className={styles.navItem}>
          <Link className={styles.navLink} href="/">
            Все
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link className={styles.navLink} href="/">
            Шаурма
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link className={styles.navLink} href="/">
            Мучное
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link className={styles.navLink} href="/">
            Бургеры
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link className={styles.navLink} href="/">
            Напитки
          </Link>
        </li>
      </ul>

      <div>
        <Button className={styles.filterBtn}>
          <Filter className={styles.filterSvg} />
          <span>Сортировка</span>
        </Button>
      </div>
    </nav>
  )
}
