import ProjectsGrid from '@/components/sections/ProjectsGrid'
import Title from '@/components/Title'

const Projects = () => {
  return (
    <section className="max-w-4xl mx-auto px-6 py-16">
      <Title title="pages.projects.title" />
      <ProjectsGrid />
    </section>
  )
}

export default Projects