/**
 * Layout that wraps each page
 */

import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'

import PageHeader from '@/components/PageHeader'
import PageTransition from '@/components/PageTransition'

type LayoutProps = {
    title?: string
    showBackButton?: boolean
    backTo?: string
    backText?: string
    showResume?: boolean
    children: React.ReactNode
}

const Layout = ({
    title,
    showBackButton = true,
    backTo = "/",
    backText = "pages.home",
    showResume = true,
    children
}: LayoutProps) => {
    const { t } = useTranslation()

    // Set the document title
    useEffect(() => {
        if (title) {
            document.title = t(title)
        }
    }, [title, t])

    return (
        <>
            <PageHeader
                showBackButton={showBackButton}
                backTo={backTo}
                backText={backText}
                showResume={showResume}
            />
            <PageTransition>
                {children}
            </PageTransition>
        </>
    )
}

export default Layout