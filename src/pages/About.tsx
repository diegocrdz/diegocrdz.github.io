import Title from '@/components/Title'
import { useTranslation } from 'react-i18next'
import Timeline from '@/components/Timeline'

const About = () => {
    const { t } = useTranslation();

    return (
        <section className="max-w-4xl mx-auto px-6 py-16">
            <Title title="pages.about" />
            <div className="flex flex-col gap-8">
                <div className="flex flex-col text-lg gap-8">
                    <p>{t('about.p1')}</p>
                    <p>{t('about.p2')}</p>
                </div>
                <h2 className="text-2xl font-semibold">{t('about.timelineTitle')}</h2>
                <Timeline items={
                    (t('about.timeline', { returnObjects: true }) as Array<{
                        year: string
                        location: string
                        title: string
                        description: string
                    }>).map((item) => ({
                        year: item.year,
                        location: item.location,
                        title: item.title,
                        description: item.description}
                    ))
                } />
            </div>
        </section>
    )
}

export default About