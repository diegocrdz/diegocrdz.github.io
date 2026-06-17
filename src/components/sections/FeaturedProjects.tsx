/**
 * Featured Projects
 * 
 * Displays a selection of cards with featured projects
 */

import { useTranslation } from 'react-i18next'
import { Button } from "@/components/ui/button"
import CardImage from '@/components/CardImage'
import { Link } from 'react-router-dom'
import { projects } from '@/data/Projects'

const MAX_FEATURED = 3

export default function FeaturedProjects() {
    const { t } = useTranslation()

    return (
    <section>
        <div className="flex items-end justify-between gap-4 mb-12">
            <h2 className="text-3xl font-medium">{t('featured.title')}</h2>
            <Button variant="link" size="sm" asChild className="p-0">
                <a href="/projects">
                    {t('featured.viewAll')}
                </a>
            </Button>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
            {projects.slice(0, MAX_FEATURED).map((project) => (
                <Link to={`/projects/${project.id}`} key={project.id}>
                    <CardImage
                        title={t(`projects.${project.id}.title`)}
                        description={t(`projects.${project.id}.description`)}
                        imageUrl={project.thumbnail}
                        number={projects.indexOf(project) + 1}
                    />
                </Link>
            ))}
        </div>
    </section>
    )
}