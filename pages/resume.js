import Head from 'next/head'
import Layout from '../components/Layout'

export default function Resume() {
  return (
    <Layout>
      <Head>
        <title>Jacob F. Valdez - Resume</title>
      </Head>
      <h1>Resume</h1>
      <h2>Experience</h2>
      <ul>
        <li>
          <h3>Developer (IC)</h3>
          <p>UTA College of Social Work</p>
          <p>June 2024 - Present</p>
          <p>Helping interns complete MyAmble, a full stack PWA for social work surveys with real-time LLM-driven analyses</p>
        </li>
        <li>
          <h3>Full-Stack Pipeline Engineer (IC)</h3>
          <p>Flora Creative Systems</p>
          <p>June 2024 - June 2024</p>
          <p>Worked alongside team of 10 other software engineers to build a node-based AI media editor</p>
          <p>Implemented node editor drawing integration and user credit tracking refinement</p>
        </li>
        <li>
          <h3>Independent Research & Development</h3>
          <p>Human Robot, Midlothian, TX</p>
          <p>Jan 2023 - May 2024</p>
          <p>Worked on Human Robot: a $1,000 general-purpose humanoid robot prototype with full-scale articulation</p>
        </li>
      </ul>
      <h2>Education</h2>
      <ul>
        <li>
          <h3>B.S. Computer Science</h3>
          <p>The University of Texas at Arlington, Arlington, TX</p>
          <p>June 2020 - Aug 2022</p>
          <p>GPA: 3.6/4.0</p>
        </li>
        <li>
          <h3>A.A.S. in Mathematics</h3>
          <p>Navarro College, Waxahachie, TX</p>
          <p>Sept 2014 - May 2018</p>
          <p>GPA: 3.9/4.0</p>
        </li>
      </ul>
    </Layout>
  )
}