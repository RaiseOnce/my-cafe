import { Button } from '@/ui/Button/Button'
import styles from './page.module.scss'
import Link from 'next/link'
import Image from 'next/image'
import burgerImg from '../assets/burger.jpg'

export default function Home() {
  return (
    <div className={styles.home}>
      <div className={styles.container}>
        <h2 className={styles.title}>Меню</h2>
        <nav className={styles.nav}>
          <ul className={styles.navList}>
            <li className={styles.navItem}>
              <Link className={styles.navLink} href="/">
                Все
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link className={styles.navLink} href="/">
                Бургеры
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link className={styles.navLink} href="/">
                Суши
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link className={styles.navLink} href="/">
                Пицца
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link className={styles.navLink} href="/">
                Паста
              </Link>
            </li>
            <li className={styles.navItem}>
              <span className={styles.navLink}>Еще</span>
            </li>
          </ul>

          <div>
            <button>Сортировка</button>
          </div>
        </nav>

        <div className={styles.items}>
          <div className={styles.item}>
            <div className={styles.itemImgWrapper}>
              <div className={styles.itemAvatar}></div>
              <Image
                className={styles.itemImg}
                alt=""
                src={burgerImg}
                width={0}
                height={0}
              />
            </div>
            <h3>Бургер</h3>
            <span>30-40 мин</span>
            <span>Быстрая доставка</span>
          </div>

          <div className={styles.item}>
            <div className={styles.itemImgWrapper}>
              <div className={styles.itemAvatar}></div>
              <Image
                className={styles.itemImg}
                alt=""
                src={burgerImg}
                width={0}
                height={0}
              />
            </div>
            <h3>Бургер</h3>
            <span>30-40 мин</span>
            <span>Быстрая доставка</span>
          </div>

          <div className={styles.item}>
            <div className={styles.itemImgWrapper}>
              <div className={styles.itemAvatar}></div>
              <Image
                className={styles.itemImg}
                alt=""
                src={burgerImg}
                width={0}
                height={0}
              />
            </div>
            <h3>Бургер</h3>
            <span>30-40 мин</span>
            <span>Быстрая доставка</span>
          </div>

          <div className={styles.item}>
            <div className={styles.itemImgWrapper}>
              <div className={styles.itemAvatar}></div>
              <Image
                className={styles.itemImg}
                alt=""
                src={burgerImg}
                width={0}
                height={0}
              />
            </div>
            <h3>Бургер</h3>
            <span>30-40 мин</span>
            <span>Быстрая доставка</span>
          </div>

          <div className={styles.item}>
            <div className={styles.itemImgWrapper}>
              <div className={styles.itemAvatar}></div>
              <Image
                className={styles.itemImg}
                alt=""
                src={burgerImg}
                width={0}
                height={0}
              />
            </div>
            <h3>Бургер</h3>
            <span>30-40 мин</span>
            <span>Быстрая доставка</span>
          </div>
        </div>
      </div>
    </div>
  )
}
