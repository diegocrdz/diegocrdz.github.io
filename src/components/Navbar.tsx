/**
 * Main navigation bar
 * 
 * Contains links to different sections and language/theme toggles
 */

import { useTranslation } from 'react-i18next'
import { useLocation } from "react-router-dom"
import { cn } from '@/lib/utils'
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
    const location = useLocation()

    return (
        <nav className="fixed top-auto bottom-4 md:bottom-auto md:top-4 left-0 w-full flex items-center justify-center z-50">
            <div className="border border-border rounded-full bg-background/50 backdrop-blur-sm">
                <div className="h-10 px-1 flex items-center justify-center gap-2">            
                    {/* Nav Links */}
                    <NavigationMenu className="flex h-full">
                        <NavigationMenuList className="flex items-center justify-between gap-2 h-full">
                            {navLinks.map(({ to, icon: Icon, label }) => {
                                const isActive = location.pathname === to

                                return (
                                    <NavigationMenuItem key={label} className="h-full">
                                        <Tooltip>
                                            <TooltipTrigger className="flex items-center justify-center h-full">
                                                <NavigationMenuLink asChild className="rounded-full px-2 h-full">
                                                    <Link
                                                        to={to}
                                                        className={cn(
                                                            "flex items-center justify-center h-full px-3 focus:bg-primary/20",
                                                            isActive && "bg-primary/20"
                                                        )}
                                                    >
                                                        <Icon />
                                                    </Link>
                                                </NavigationMenuLink>
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                {t(label)}
                                            </TooltipContent>
                                        </Tooltip>
                                    </NavigationMenuItem>
                                )
                            })}
                        </NavigationMenuList>
                    </NavigationMenu>

                    {/* Divisor */}
                    <div className="w-px h-4 bg-border" />

                    {/* Language and Theme toggles */}
                    <div className="flex items-center">
                        <LangToggle />
                        <ThemeToggle />
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar