'use client'

import React, { useEffect, useRef, useState } from 'react'
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
import { Popup } from '@/assets/Popup'
import { Check } from '@/assets/Check'
type Props = {}

export default function Header({}: Props) {
  const langOptions = ['Русский', 'Turkmence']

  // состояние активной сортировки
  const [activeLang, setActiveLang] = useState(langOptions[0])

  // новое состояние для модалки сортировки
  const [isLangOpen, setIsLangOpen] = useState(false)

  const toggleLang = () => setIsLangOpen(!isLangOpen)

  const handleLangSelect = (option: string) => {
    setActiveLang(option)
    setIsLangOpen(false) // закрываем модалку после выбора
  }

  const langRef = useRef<HTMLUListElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (langRef.current && !langRef.current.contains(event.target as Node)) {
        setIsLangOpen(false)
      }
    }

    if (isLangOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    } else {
      document.removeEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isLangOpen])

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
          <div className={styles.langWrapper} onClick={toggleLang}>
            <Button className={styles.langBtn}>
              <Globe />
            </Button>
            <div className={styles.popupWrapper}>
              <div className={styles.popupText}>Сменить язык</div>
              <Popup className={styles.popupSvg} />
            </div>
            <ul
              ref={langRef}
              className={`${styles.langOptions} ${
                isLangOpen ? styles.open : ''
              }`}
            >
              {langOptions.map((option) => {
                const isActive = activeLang === option
                return (
                  <li
                    key={option}
                    className={`${styles.langOption} ${
                      isActive ? styles.activeLangOption : ''
                    }`}
                    onClick={() => handleLangSelect(option)}
                  >
                    <span>{option}</span>
                    {isActive ? (
                      <span className={styles.check}>
                        <Check className={styles.checkSvg} />
                      </span>
                    ) : (
                      ''
                    )}
                  </li>
                )
              })}
            </ul>
          </div>
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
