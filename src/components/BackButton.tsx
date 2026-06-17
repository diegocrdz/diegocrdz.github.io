import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import { useNavigate } from "react-router-dom"

const BackButton = ({ text, to, className }: { text?: string, to: string, className?: string }) => {
    const navigate = useNavigate()

    return (
        <Button
            variant="link"
            size="sm"
            className={className}
            onClick={() => navigate(to)}
        >
            <ArrowLeft />
            {text}
        </Button>
    )
}

export default BackButton