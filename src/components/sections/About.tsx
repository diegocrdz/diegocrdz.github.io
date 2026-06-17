import { useTranslation } from 'react-i18next'
import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'
import PhotoStack from '@/components/PhotoStack'
import { ArrowUpRight } from 'lucide-react'

export default function About() {
  const { t } = useTranslation()

  return (
    <section>
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-12">
            <div className="flex flex-col items-start justify-start gap-6">
                <h2 className="text-3xl font-medium mb-8">
                    {t('about.title')}
                </h2>
                <p>
                    {t('about.p1')}
                </p>
                <Button variant="link" className="px-0" asChild>
                    <Link to="/about">
                        {t('about.cta')}
                        <ArrowUpRight />
                    </Link>
                </Button>
            </div>
            <div className="shrink-0">
                <PhotoStack />
            </div>
        </div>
        
    </section>
  )
}