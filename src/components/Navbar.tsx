/**
 * Main navigation bar
 * 
 * Contains links to different sections and language/theme toggles
 */

import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from '@/components/ui/navigation-menu'
import {
    Home,
    User,
    Folder,
    Mail,
} from 'lucide-react'
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip'
import ThemeToggle from '@/components/ThemeToggle'
import LangToggle from '@/components/LangToggle'

const navLinks = [
  { to: '/', icon: Home, label: 'pages.home' },
  { to: '/about', icon: User, label: 'pages.about' },
  { to: '/projects', icon: Folder, label: 'pages.projects.title' },
  { to: '/contact', icon: Mail, label: 'pages.contact.title' },
];

const Navbar = () => {
    const { t } = useTranslation()

    return (
        <nav className="fixed top-auto bottom-4 md:bottom-auto md:top-4 left-0 w-full flex items-center justify-center z-50">
            <div className="border border-border rounded-full bg-background/50 backdrop-blur-sm">
                <div className="h-10 px-3 flex items-center justify-center">            
                    {/* Nav Links */}
                    <NavigationMenu className="flex">
                        <NavigationMenuList className="flex gap-4">
                            {navLinks.map(({ to, icon: Icon, label }) => (
                                <NavigationMenuItem key={label}>
                                    <Tooltip>
                                        <TooltipTrigger className="flex items-center justify-center">
                                            <NavigationMenuLink asChild>
                                                <Link to={to} className="flex items-center gap-2 data-active:bg-transparent focus:bg-transparent">
                                                    <Icon />
                                                </Link>
                                            </NavigationMenuLink>
                                        </TooltipTrigger>
                                        <TooltipContent>
                                            {t(label)}
                                        </TooltipContent>
                                    </Tooltip>
                                </NavigationMenuItem>
                            ))}
                        </NavigationMenuList>
                    </NavigationMenu>

                    {/* Divisor */}
                    <div className="w-px h-4 bg-border mx-4" />

                    {/* Language and Theme toggles */}
                    <div className="flex items-center gap-2">
                        <LangToggle />
                        <ThemeToggle />
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar