'use client'

import React, { useEffect, useRef, useState } from 'react'
import styles from './Header.module.scss'
import { Container } from '../Container/Container'
import { Logo } from '../../assets/Logo'
import Link from 'next/link'
import { Button } from '@/ui/Button/Button'
import { Navigator } from '@/assets/Navigator'
import { Basket } from '@/assets/Basket'

import { SearchInput } from '../SearchInput/SearchInput'
import LangSwitcher from '../LangSwitcher/LangSwitcher'
type Props = {}

export default function Header({}: Props) {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <Container className={styles.container}>
        <div className={styles.left}>
          {/* <Link className={styles.logo} href="/">
            <Logo />
          </Link> */}
          <div className={styles.center}>
            <SearchInput />

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
          <LangSwitcher />
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
