import { Check } from "lucide-react"
import { useTranslation } from 'react-i18next'
import { Languages } from 'lucide-react'
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const LangToggle = () => {
  const { i18n } = useTranslation()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon">
          <Languages className="h-[1.2rem] w-[1.2rem]" />
          <span className="sr-only">Toggle language</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => i18n.changeLanguage('en')}>
          <Check className={i18n.language === 'en' ? 'opacity-100' : 'opacity-0'} />
          English
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => i18n.changeLanguage('es')}>
          <Check className={i18n.language === 'es' ? 'opacity-100' : 'opacity-0'} />
          Español
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default LangToggle