import BackButton from '@/components/BackButton'
import ResumeButton from '@/components/ResumeButton'

interface PageHeaderProps {
    showBackButton?: boolean
    backTo?: string
    backText?: string
    showResume?: boolean
}

const PageHeader = ({
    showBackButton = true,
    backTo = "/",
    backText = "Home",
    showResume = true
}: PageHeaderProps) => {
    return (
        <div className="
            fixed px-6 h-10 top-4 left-0 right-0 max-w-4xl mx-auto
            flex items-center justify-between z-60 pointer-events-none
            "
        >
            <div className="pointer-events-auto">
                {showBackButton && backTo && backText &&
                    <BackButton
                        to={backTo}
                        text={backText}
                    />
                }
            </div>
            <div className="pointer-events-auto">
                {showResume && <ResumeButton />}
            </div>
        </div>
    )
}

export default PageHeader