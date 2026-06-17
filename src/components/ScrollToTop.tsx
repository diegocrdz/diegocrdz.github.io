/**
 * Scrolls the window to the top when the pathname changes
 * Default behavior of React Router is to keep the scroll position when navigating to a new page
 */

import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const ScrollToTop = () => {
    const { pathname } = useLocation()

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [pathname])

    return null
}

export default ScrollToTop