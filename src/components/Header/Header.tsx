import React from 'react'
import styles from './Header.module.scss'
import { Container } from '../Container/Container'
import { Logo } from '../../assets/Logo'
import Link from 'next/link'
import { Globe } from '@/assets/Globe'
type Props = {}

export default function Header({}: Props) {
  return (
    <header className={styles.header}>
      <Container className={styles.container}>
        <div className={styles.left}>
          {/* <Link className={styles.logo} href="/">
            <Logo />
          </Link> */}
          <input />
          <div>Address</div>
        </div>

        <div className={styles.right}>
          <button className={styles.lang}>
            <Globe />
          </button>
          <button className={styles.auth}>
            <span>Войти</span>
          </button>
        </div>
      </Container>
    </header>
  )
}
