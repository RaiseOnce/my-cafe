import { Button } from '@/ui/Button/Button'
import styles from './page.module.scss'
import Link from 'next/link'
import Image from 'next/image'
import burgerImg from '../assets/burger.jpg'
import { Bookmark } from '@/assets/Bookmark'
import { Filter } from '@/assets/Filter'

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

        <div className={styles.items}>
          <div className={styles.item}>
            <div className={styles.itemInner}>
              <Link href={'/'} className={styles.itemInnerLink}>
                <div className={styles.itemImgWrapper}>
                  <div className={styles.itemAvatar}></div>
                  <Image
                    className={styles.itemImg}
                    alt=""
                    src={burgerImg}
                    width={0}
                    height={0}
                  />
                  <div className={styles.itemCounter}>3</div>
                  <div className={styles.itemBookmark}>
                    <Bookmark className={styles.itemBookmarkSvg} />
                  </div>
                </div>
                <div className={styles.itemMiddle}>
                  <h4 className={styles.itemName}>Бургер</h4>
                  <div className={styles.itemWeight}>200 г</div>
                </div>
              </Link>
              <div className={styles.itemBtnWrapper}>
                <Button className={styles.itemBtn}>
                  <span className={styles.itemMinus}>-</span>
                  <div className={styles.itemPrice}>150 TMT</div>
                  <span className={styles.itemPlus}>+</span>
                </Button>
              </div>
            </div>
          </div>

          <div className={styles.item}>
            <div className={styles.itemInner}>
              <Link href={'/'} className={styles.itemInnerLink}>
                <div className={styles.itemImgWrapper}>
                  <div className={styles.itemAvatar}></div>
                  <Image
                    className={styles.itemImg}
                    alt=""
                    src={burgerImg}
                    width={0}
                    height={0}
                  />
                  <div className={styles.itemCounter}>3</div>
                  <div className={styles.itemBookmark}>
                    <Bookmark className={styles.itemBookmarkSvg} />
                  </div>
                </div>
                <div className={styles.itemMiddle}>
                  <h4 className={styles.itemName}>Бургер</h4>
                  <div className={styles.itemWeight}>200 г</div>
                </div>
              </Link>
              <div className={styles.itemBtnWrapper}>
                <Button className={styles.itemBtn}>
                  <span className={styles.itemMinus}>-</span>
                  <div className={styles.itemPrice}>150 TMT</div>
                  <span className={styles.itemPlus}>+</span>
                </Button>
              </div>
            </div>
          </div>

          <div className={styles.item}>
            <div className={styles.itemInner}>
              <Link href={'/'} className={styles.itemInnerLink}>
                <div className={styles.itemImgWrapper}>
                  <div className={styles.itemAvatar}></div>
                  <Image
                    className={styles.itemImg}
                    alt=""
                    src={burgerImg}
                    width={0}
                    height={0}
                  />
                  <div className={styles.itemCounter}>3</div>
                  <div className={styles.itemBookmark}>
                    <Bookmark className={styles.itemBookmarkSvg} />
                  </div>
                </div>
                <div className={styles.itemMiddle}>
                  <h4 className={styles.itemName}>Бургер</h4>
                  <div className={styles.itemWeight}>200 г</div>
                </div>
              </Link>
              <div className={styles.itemBtnWrapper}>
                <Button className={styles.itemBtn}>
                  <span className={styles.itemMinus}>-</span>
                  <div className={styles.itemPrice}>150 TMT</div>
                  <span className={styles.itemPlus}>+</span>
                </Button>
              </div>
            </div>
          </div>

          <div className={styles.item}>
            <div className={styles.itemInner}>
              <Link href={'/'} className={styles.itemInnerLink}>
                <div className={styles.itemImgWrapper}>
                  <div className={styles.itemAvatar}></div>
                  <Image
                    className={styles.itemImg}
                    alt=""
                    src={burgerImg}
                    width={0}
                    height={0}
                  />
                  <div className={styles.itemCounter}>3</div>
                  <div className={styles.itemBookmark}>
                    <Bookmark className={styles.itemBookmarkSvg} />
                  </div>
                </div>
                <div className={styles.itemMiddle}>
                  <h4 className={styles.itemName}>Бургер</h4>
                  <div className={styles.itemWeight}>200 г</div>
                </div>
              </Link>
              <div className={styles.itemBtnWrapper}>
                <Button className={styles.itemBtn}>
                  <span className={styles.itemMinus}>-</span>
                  <div className={styles.itemPrice}>150 TMT</div>
                  <span className={styles.itemPlus}>+</span>
                </Button>
              </div>
            </div>
          </div>

          <div className={styles.item}>
            <div className={styles.itemInner}>
              <Link href={'/'} className={styles.itemInnerLink}>
                <div className={styles.itemImgWrapper}>
                  <div className={styles.itemAvatar}></div>
                  <Image
                    className={styles.itemImg}
                    alt=""
                    src={burgerImg}
                    width={0}
                    height={0}
                  />
                  <div className={styles.itemCounter}>3</div>
                  <div className={styles.itemBookmark}>
                    <Bookmark className={styles.itemBookmarkSvg} />
                  </div>
                </div>
                <div className={styles.itemMiddle}>
                  <h4 className={styles.itemName}>Бургер</h4>
                  <div className={styles.itemWeight}>200 г</div>
                </div>
              </Link>
              <div className={styles.itemBtnWrapper}>
                <Button className={styles.itemBtn}>
                  <span className={styles.itemMinus}>-</span>
                  <div className={styles.itemPrice}>150 TMT</div>
                  <span className={styles.itemPlus}>+</span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
