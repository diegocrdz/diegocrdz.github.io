import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import FeaturedProjects from '@/components/sections/FeaturedProjects'
import Layout from '@/components/Layout'

const Home = () => {
  return (
    <Layout title="pages.home" showBackButton={false}>
        <Hero />
        <About />
        <FeaturedProjects />
    </Layout>
  )
}

export default Home