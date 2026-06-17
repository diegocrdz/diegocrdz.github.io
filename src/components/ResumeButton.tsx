import { Button } from '@/components/ui/button'
import { useTranslation } from 'react-i18next'
import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function ResumeButton() {
    const { t } = useTranslation()

    return (
        <Button
            variant="link"
            size="sm"
            className="h-10 p-0"
            asChild
        >
            <Link to={t('resume.link')} target="_blank">
                {t('resume.cta')}
                <ArrowUpRight />
            </Link>
        </Button>
    )
}