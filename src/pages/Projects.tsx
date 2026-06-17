import ProjectsGrid from '@/components/sections/ProjectsGrid'
import PageHeader from '@/components/PageHeader'
import Section from '@/components/Section'

const Projects = () => {
  return (
    <Section title="pages.projects.title">
      <PageHeader />
      <ProjectsGrid />
    </Section>
  )
}

export default Projects