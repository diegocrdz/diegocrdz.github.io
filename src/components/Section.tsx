/**
 * Section component for consistent styling of sections across the site
 */

import Title from '@/components/Title'

const Section = ({ title, children, className }: {
    title?: string
    children: React.ReactNode
    className?: string
}) => {
  return (
    <section className={`max-w-4xl mx-auto px-6 mt-24 ${className}`}>
        {title &&
            <Title title={title} />
        }
        {children}
    </section>
  )
}

export default Section