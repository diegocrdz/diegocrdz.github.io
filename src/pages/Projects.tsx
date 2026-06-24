import ProjectsGrid from '@/components/sections/ProjectsGrid'
import Section from '@/components/Section'
import Layout from '@/components/Layout'

const Projects = () => {
  return (
    <Layout title="pages.projects.title">
      <Section title="pages.projects.title">
        <ProjectsGrid />
      </Section>
    </Layout>
  )
}

export default Projects