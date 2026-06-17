/**
 * Grid for displaying a summary of projects with links to their details.
 * Used in the Projects page to show all projects in a compact format.
 */

import { projects } from '@/data/Projects'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import CardImage from '@/components/CardImage'
import { Badge } from '@/components/ui/badge'

const ProjectsGrid = () => {
    const { t } = useTranslation()

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {projects.map((project) => (
                <Link to={`/projects/${project.id}`} key={project.id}>
                    <CardImage
                        title={t(`projects.${project.id}.title`)}
                        description={t(`projects.${project.id}.description`)}
                        imageUrl={project.thumbnail}
                        number={projects.indexOf(project) + 1}
                    >
                        {/* Tags */}
                        <div className="flex flex-wrap gap-2 mt-4">
                            {project.tags.map((tag) => (
                                <Badge key={tag} variant="outline">
                                    {tag}
                                </Badge>
                            ))}
                        </div>
                    </CardImage>
                </Link>
            ))}
        </div>
    )
}

export default ProjectsGrid
