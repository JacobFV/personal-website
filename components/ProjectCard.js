import styles from '../styles/ProjectCard.module.css'

export default function ProjectCard({ title, description, image, link }) {
  return (
    <div className={styles.card}>
      {/* Uncomment this when you have the images */}
      {/* <Image src={image} alt={title} width={300} height={200} className={styles.image} /> */}
      <div className={styles.content}>
        <h3>{title}</h3>
        <p>{description}</p>
        <a href={link} target="_blank" rel="noopener noreferrer" className={styles.link}>View Project</a>
      </div>
    </div>
  )
}