/**
 * Title for each page
 */

import { useTranslation } from "react-i18next"

const Title = ({ title, className }: { title: string, className?: string }) => {
    const { t } = useTranslation()

    return (
        <h1 className={`text-4xl font-medium pb-8 ${className}`}>
            {t(title)}
        </h1>
    )
}

export default Title