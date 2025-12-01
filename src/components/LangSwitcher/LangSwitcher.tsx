import React, { useEffect, useRef, useState } from 'react'
import styles from './LangSwitcher.module.scss'
import { Button } from '@/ui/Button/Button'
import { Globe } from '@/assets/Globe'
import { Popup } from '@/assets/Popup'
import { Check } from '@/assets/Check'

export default function LangSwitcher() {
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
        className={`${styles.langOptions} ${isLangOpen ? styles.open : ''}`}
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
  )
}
