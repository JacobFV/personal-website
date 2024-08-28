import styles from '../styles/Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.content}>
          <div className={styles.externalLinks}>
            <a href="https://github.com/JacobFV" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="https://linkedin.com/in/jacob-valdez-946056620" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="https://twitter.com/jvboid" target="_blank" rel="noopener noreferrer">Twitter</a>
          </div>
          <p>&copy; {new Date().getFullYear()} Jacob F. Valdez</p>
        </div>
      </div>
    </footer>
  )
}