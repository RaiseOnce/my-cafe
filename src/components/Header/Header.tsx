import React from 'react'
import styles from './Header.module.scss'
import { Container } from '../Container/Container'
import { Logo } from '../../assets/Logo'
import Link from 'next/link'
import { Globe } from '@/assets/Globe'
import { Button } from '@/ui/Button/Button'
import { Loupe } from '@/assets/Loupe'
import { Location } from '@/assets/Location'
import { Time } from '@/assets/Time'
import { Navigator } from '@/assets/Navigator'
import { Basket } from '@/assets/Basket'
type Props = {}

export default function Header({}: Props) {
  return (
    <header className={styles.header}>
      <Container className={styles.container}>
        <div className={styles.left}>
          {/* <Link className={styles.logo} href="/">
            <Logo />
          </Link> */}
          <div className={styles.center}>
            <div className={styles.search}>
              <div className={styles.searchSvg}>
                <Loupe />
              </div>
              <input className={styles.input} />
            </div>

            <div className={styles.address}>
              <Button className={styles.locationSetBtn}>
                <Navigator className={styles.locationNav} />
                <span className={styles.locationText}>Укажите адрес</span>
              </Button>
              {/* <div className={styles.location}>
                <Button className={styles.locationBtn}>
                  <Location className={styles.locationSvg} />
                  <span>улица Первая</span>
                </Button>
              </div>
              <div className={styles.time}>
                <Button className={styles.timeBtn}>
                  <Time className={styles.timeSvg} />
                  <span>Сейчас</span>
                </Button>
              </div> */}
            </div>
          </div>
        </div>

        <div className={styles.right}>
          <Button className={styles.lang}>
            <Globe />
          </Button>
          <Button className={styles.cartBtn}>
            <Basket className={styles.cartSvg} />
            <span className={styles.cartText}>Корзина</span>
          </Button>
          <Button className={styles.auth}>
            <span>Войти</span>
          </Button>
        </div>
      </Container>
    </header>
  )
}
