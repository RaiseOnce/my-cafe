import React from 'react'
import styles from './Header.module.scss'
import { Container } from '../Container/Container'
import { Logo } from '../Logo/Logo'
type Props = {}

export default function Header({}: Props) {
  return (
    <header className={styles.header}>
      <Container className={styles.container}>
        <div className={styles.left}>
          <div>
            <Logo />
          </div>
          <input />
          <div>Address</div>
        </div>

        <div className={styles.right}>
          <button>Lang</button>
          <button>Auth</button>
        </div>
      </Container>
    </header>
  )
}
