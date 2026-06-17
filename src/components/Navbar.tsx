/**
 * Main navigation bar
 * 
 * Contains links to different sections and language/theme toggles
 */

import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from '@/components/ui/navigation-menu'
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from '@/components/ui/sheet'
import {
    Home,
    User,
    Folder,
    Mail,
    Menu,
} from 'lucide-react'
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip'
import ThemeToggle from '@/components/ThemeToggle'
import LangToggle from '@/components/LangToggle'
import { Button } from '@/components/ui/button'

const navLinks = [
  { to: '/', icon: Home, label: 'pages.home' },
  { to: '/about', icon: User, label: 'pages.about' },
  { to: '/projects', icon: Folder, label: 'pages.projects.title' },
  { to: '/contact', icon: Mail, label: 'pages.contact.title' },
];

const Navbar = () => {
    const { t } = useTranslation()
    const [open, setOpen] = useState(false)

    return (
        <nav className="fixed top-4 left-4 md:left-0 w-full flex items-center justify-start md:justify-center z-50">
            <div className="border border-border rounded-full bg-background/50 backdrop-blur-sm">
                <div className="h-10 px-3 flex items-center justify-center">
                    {/* Side menu for mobile */}
                    <Sheet open={open} onOpenChange={setOpen}>
                        <SheetTrigger className="md:hidden">
                            <Button variant="ghost">
                                <Menu />
                                <span className="sr-only">Open navigation menu</span>
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="left" className="w-screen! max-w-none! border-none bg-linear-to-r from-background to-background/30">
                            <NavigationMenu>
                                <NavigationMenuList className="flex flex-col items-start justify-start gap-4 p-4">
                                    {navLinks.map(({ to, icon: Icon, label }) => (
                                        <NavigationMenuItem key={label}>
                                            <NavigationMenuLink asChild>
                                                <Link
                                                    to={to}
                                                    className="flex gap-2 text-lg"
                                                    onClick={() => setOpen(false)}
                                                >
                                                    <Icon />
                                                    {t(label)}
                                                </Link>
                                            </NavigationMenuLink>
                                        </NavigationMenuItem>
                                    ))}
                                </NavigationMenuList>
                            </NavigationMenu>
                        </SheetContent>
                    </Sheet>
                    
                    {/* Nav Links */}
                    <NavigationMenu className="hidden md:flex">
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
                    <div className="hidden md:block w-px h-4 bg-border mx-4" />

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