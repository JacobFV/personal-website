import Head from 'next/head'
import Layout from '../components/Layout'
import ProjectCard from '../components/ProjectCard'
import styles from '../styles/Projects.module.css'

const projects = [
  {
    title: 'Human Robot',
    description: 'A $1,000 general-purpose humanoid robot prototype with full-scale articulation.',
    image: '/images/human-robot.jpg',
    link: 'https://humanrobots.ai'
  },
  {
    title: 'MLN-Dashboard',
    description: 'A full-stack Next.js web server for complex data visualization and analysis.',
    image: '/images/mln-dashboard.jpg',
    link: '#'
  },
  {
    title: 'DesparadosAEye',
    description: 'An Android app using on-device conversational AI with Facebook\'s BlenderBot-small.',
    image: '/images/desperadosaeye.jpg',
    link: '#'
  },
  {
    title: 'CookieCutter CNC',
    description: 'A 2x2 plasma cutter CNC machine to automate sheet metal cutting process.',
    image: '/images/cookiecutter-cnc.jpg',
    link: '#'
  }
]

export default function Projects() {
  return (
    <Layout>
      <Head>
        <title>Jacob F. Valdez - Projects</title>
      </Head>
      <div className="container">
        <h1>Projects</h1>
        <div className={styles.grid}>
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </Layout>
  )
}