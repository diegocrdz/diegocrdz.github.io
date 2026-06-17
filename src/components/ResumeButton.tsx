import { Button } from '@/components/ui/button'
import { useTranslation } from 'react-i18next'
import { ArrowUpRight } from 'lucide-react'

export default function ResumeButton() {
    const { t } = useTranslation()

    return (
        <Button variant="link" size="sm" className="fixed top-4 right-8 z-50 h-10 flex items-center" asChild>
            <a href={t('resume.link')} target="_blank">
                {t('resume.cta')}
                <ArrowUpRight className="h-3 w-3" />
            </a>
        </Button>
    )
}