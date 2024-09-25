'use client'

import { useRouter, usePathname } from '@/i18n/routing'

import styles from './Footer.module.scss'
import { useParams } from 'next/navigation'

export default function Footer() {
  const router = useRouter()
  const pathname = usePathname()
  const params = useParams()

  const currentYear = new Date().getFullYear()

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p className={styles.text}>
          © {currentYear} Airbnlove
        </p>
        <select className={styles.select} value={params.locale as 'en' | 'fr'} onChange={(e) => router.push(pathname, { locale: e.target.value as 'en' | 'fr' })}>
          <option value="en">English</option>
          <option value="fr">Français</option>
        </select>
      </div>
    </footer>
  )
}