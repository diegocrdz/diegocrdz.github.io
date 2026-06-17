import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import FeaturedProjects from '@/components/sections/FeaturedProjects'
import PageHeader from '@/components/PageHeader'

const Home = () => {
  return (
    <>
        <PageHeader showBackButton={false} />
        <Hero />
        <About />
        <FeaturedProjects />
    </>
  )
}

export default Home