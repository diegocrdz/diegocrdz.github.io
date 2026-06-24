import { useTranslation } from 'react-i18next'
import Timeline from '@/components/Timeline'
import Section from '@/components/Section'
import Layout from '@/components/Layout'

const About = () => {
    const { t } = useTranslation();

    return (
        <Layout title="pages.about">
            <Section title="pages.about">
                <div className="flex flex-col gap-8">
                    <div className="flex flex-col text-lg gap-8">
                        <p>{t('about.p1')}</p>
                        <p>{t('about.p2')}</p>
                    </div>
                </div>
            </Section>
            <Section title="about.timelineTitle">
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
                    ))}
                />
            </Section>
        </Layout>
    )
}

export default About