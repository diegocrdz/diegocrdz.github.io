import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import FeaturedProjects from '@/components/sections/FeaturedProjects'

const Home = () => {
  return (
    <>
        <Hero />
        <div className="border-t border-border" />
        <div className="max-w-4xl mx-auto px-4 md:px-8 py-24 flex flex-col gap-24">
            <About />
            <FeaturedProjects />
        </div>
    </>
  )
}

export default Home