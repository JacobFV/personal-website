import Head from 'next/head'
import Layout from '../components/Layout'

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Jacob F. Valdez - Home</title>
      </Head>
      <h1>Jacob F. Valdez</h1>
      <p>Human. I build stuff.</p>
      <p>Started programming VB6 when I was 10. Branched out over the years: C#, HTML/CSS/JS, Arduino, Python, TypeScript, AWS, Android, etc. etc. Did lots of engineering projects too. Also, lots of independent study; glad I did Cal I-III and DiffEq when I was 17, which helped a ton with the DL math. Stumbled across arxiv.org by accident in 2018 and fell in love with AI. Saw the future, and read ave. 1+ paper/day for 3 years following. Went back to school for CS in 2020; graduated Summer 2022. Spent the rest of 2022 as a SwE at Motio. Left to work on a full-scale humanoid robot, but then realized many important components of the robotics ecosystem were missing, so I started a general purpose robotics kit.</p>
      <p>Still iterating on the BoidKit, but now I'm also using it to finally build my $1,000 full-scale general-purpose humanoid robot (actually it was $526 last time I checked the BOM, not including shipping and tax). This is the most important project of my entire life. I talk about it on all my socials. If you have any love for science, technology, engineering, innovation, product development, etc., etc., please reach out about joining the team.</p>
    </Layout>
  )
}