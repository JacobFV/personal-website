import Head from 'next/head'
import Layout from '../components/Layout'
import styles from '../styles/Blog.module.css'

const BLOG_POSTS = [
  {
    title: "Looking Ahead to Future Impact",
    link: "https://jvboid.dev/blog/2023/looking-ahead-to-future-impact/",
    pubDate: "2023-11-21T00:00:00+00:00",
    description: "Almost one year ago, I embarked a journey to develop the world's first $1000 full-scale, general purpose humanoid robot, the Limboid. I had no idea what I was getting myself into: mechanical engineering, hydraulics, electronics, software,..."
  },
  {
    title: "The Future of AI: Challenges and Opportunities",
    link: "https://jvboid.dev/blog/2023/future-of-ai-challenges-opportunities/",
    pubDate: "2023-09-15T00:00:00+00:00",
    description: "As we stand on the brink of a new era in artificial intelligence, it's crucial to examine both the potential benefits and the challenges that lie ahead. This post explores the latest developments in AI and their implications for society..."
  },
  {
    title: "Robotics in Healthcare: A Game-Changer",
    link: "https://jvboid.dev/blog/2023/robotics-in-healthcare/",
    pubDate: "2023-07-03T00:00:00+00:00",
    description: "The integration of robotics in healthcare is revolutionizing patient care and medical procedures. From surgical assistants to rehabilitation robots, this post delves into the transformative impact of robotics on the healthcare industry..."
  },
  {
    title: "Sustainable Technology: Building a Greener Future",
    link: "https://jvboid.dev/blog/2023/sustainable-technology-greener-future/",
    pubDate: "2023-05-22T00:00:00+00:00",
    description: "As climate change becomes an increasingly pressing issue, the role of sustainable technology in creating a greener future cannot be overstated. This post examines innovative solutions and technologies that are paving the way for a more sustainable world..."
  },
  {
    title: "The Ethics of AI: Navigating the Gray Areas",
    link: "https://jvboid.dev/blog/2023/ethics-of-ai-navigating-gray-areas/",
    pubDate: "2023-03-10T00:00:00+00:00",
    description: "As AI systems become more advanced and integrated into our daily lives, ethical considerations are more important than ever. This post explores the complex ethical landscape of AI, discussing topics such as bias, privacy, and accountability..."
  },
  {
    title: "The Rise of Edge Computing: Bringing Processing Power Closer",
    link: "https://jvboid.dev/blog/2023/rise-of-edge-computing/",
    pubDate: "2023-01-05T00:00:00+00:00",
    description: "Edge computing is transforming the way we process and analyze data. By bringing computation closer to the data source, we can achieve faster response times and improved efficiency. This post examines the potential of edge computing and its applications..."
  }
]

export default function Blog() {
  return (
    <Layout>
      <Head>
        <title>Jacob F. Valdez - Blog</title>
      </Head>
      <div className="container">
        <h1>Blog</h1>
        <div className={styles.blogPosts}>
          {BLOG_POSTS.map((post, index) => (
            <div key={index} className={styles.blogPost}>
              <h2><a href={post.link}>{post.title}</a></h2>
              <p className={styles.date}>{new Date(post.pubDate).toLocaleDateString()}</p>
              <div className={styles.description} dangerouslySetInnerHTML={{ __html: post.description }} />
            </div>
          ))}
        </div>
      </div>
    </Layout>
  )
}