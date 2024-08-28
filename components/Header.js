import Link from 'next/link'
import styles from '../styles/Header.module.css'

export default function Header() {
  return (
    <header className={styles.header}>
      <div className="container">
        <nav className={styles.nav}>
          <Link href="/" className={styles.logo}>JFV</Link>
          <div className={styles.links}>
            <Link href="/">Home</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/resume">Resume</Link>
            <Link href="/projects">Projects</Link>
          </div>
        </nav>
      </div>
    </header>
  )
}