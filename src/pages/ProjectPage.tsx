/**
 * Page that displays the details of a single project
 * 
 * It retrieves the project ID from the URL parameters,
 * finds the corresponding project from the projects data,
 * and renders the project details
 */

import { useParams, Navigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { projects } from '@/data/Projects'
import { ArrowUpRight, ArrowLeft, ArrowRight } from 'lucide-react'
import Gallery from '@/components/Gallery'
import BackButton from '@/components/BackButton'

import Title from '@/components/Title'

const DataSection = ({ title, children }: { title: string, children: React.ReactNode }) => (
    <div className="text-sm mb-4">
        <p className="text-muted-foreground font-medium">
            {title}
        </p>
        {children}
    </div>
)

const Section = ({ title, text, children }: { title: string, text?: string, children?: React.ReactNode }) => (
    <div className="flex flex-col gap-4">
        <h2 className="text-2xl font-medium">
            {title}
        </h2>
        <p className="leading-relaxed">
            {text}
        </p>
        {children}
    </div>
)

const LinkButton = ({ href, children }: { href: string, children: React.ReactNode }) => (
    <Button variant="link" asChild className="p-0">
        <a href={href} target="_blank">
            {children}
            <ArrowUpRight />
        </a>
    </Button>
)

const ProjectPage = () => {
    const { id } = useParams<{ id: string }>()
    const { t } = useTranslation()

    const projectData = projects.find((p) => p.id === id)
    const nextProject = projects[projects.indexOf(projectData!) + 1]
    const prevProject = projects[projects.indexOf(projectData!) - 1]

    // If no project is found with the given ID, redirect to the Projects page
    if (!projectData) {
        return <Navigate to="/projects" />
    }

    return (
        <section className="max-w-4xl mx-auto px-6 py-16">
            <BackButton text={t('pages.projects.title')} to="/projects" className="mb-8" />

            {/* Title */}
            <div className="flex flex-col justify-start gap-2 mb-12">
                <Title title={`projects.${id}.title`} />
                <p>{t(`projects.${id}.description`)}</p>
            </div>
            
            {/* Main content */}
            <div className="grid grid-cols-1 md:grid-cols-[1fr_3fr] gap-6 mb-8">
                {/* Data */}
                <div className="md:sticky top-16 self-start">
                    {/* Year */}
                    <DataSection title={t('pages.projects.year')}>
                        {projectData.year}
                    </DataSection>

                    {/* Tags */}
                    <DataSection title={t('pages.projects.stack')}>
                        <div className="flex flex-col gap-2 flex-wrap">
                            {projectData.tags.map((tag) => (
                                <Badge key={tag} variant="default">
                                    {tag}
                                </Badge>
                            ))}
                        </div>
                    </DataSection>

                    {/* Links */}
                    <div className="flex flex-col items-start gap-2">
                        {projectData.github && (
                            <LinkButton href={projectData.github}>
                                GitHub
                            </LinkButton>
                        )}
                        {projectData.demo && (
                            <LinkButton href={projectData.demo}>
                                Demo
                            </LinkButton>
                        )}
                    </div>
                </div>

                {/* Text content */}
                <div className="flex flex-col gap-16">
                    <Section 
                        title={t('pages.projects.summary')}
                        text={t(`projects.${id}.summary`)}
                    />
                    <Section 
                        title={t('pages.projects.methodology')}
                        text={t(`projects.${id}.methodology`)}
                    />
                    <Section 
                        title={t('pages.projects.results')}
                        text={t(`projects.${id}.result`)}
                    />
                    {/* Gallery */}
                    {projectData.images &&
                        <Section 
                            title={t('pages.projects.gallery')}
                        >
                            <Gallery images={projectData.images} />
                        </Section>
                    }
                </div>
            </div>

            {/* Next and previous project links */}
            <div className="flex justify-between mt-16">
                {projects[projects.indexOf(projectData) - 1] ? (
                    <div className="flex flex-col items-center justify-start gap-2">
                        <Button variant="link" asChild>
                            <a href={`/projects/${prevProject.id}`}>
                                <ArrowLeft />
                                <span className="max-w-30 md:max-w-none truncate">
                                    {t(`projects.${prevProject.id}.title`)}
                                </span>
                            </a>
                        </Button>
                    </div>
                ) : <div />}

                {projects[projects.indexOf(projectData) + 1] ? (
                    <Button variant="link" asChild>
                        <a href={`/projects/${nextProject.id}`}>
                            <span className="max-w-30 md:max-w-none truncate">
                                {t(`projects.${nextProject.id}.title`)}
                            </span>
                            <ArrowRight />
                        </a>
                    </Button>
                ) : <div />}
            </div>
        </section>
    )
}

export default ProjectPage