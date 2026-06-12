/**
 * Hero.tsx
 * 
 * Display the hero section of the portfolio, including a profile picture, name, role, and a short bio.
 */

import { useTranslation } from 'react-i18next';

const Hero = () => {
  const { t } = useTranslation()

  return (
    <section className="min-h-screen flex items-center justify-center px-6">
      <div className="max-w-2xl w-full">
        <img
          src="/photo.jpg"
          alt="Diego"
          className="w-24 h-24 rounded-full object-cover mb-6"
        />
        <h1 className="text-4xl font-medium mb-2">Diego Córdova Rodríguez</h1>
        <p className="text-muted-foreground mb-4">{t('hero.role')}</p>
        <p className="text-muted-foreground mb-8">{t('hero.bio')}</p>
        <div className="flex gap-4">
          <a href={t('hero.github')} target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <a href={t('hero.linkedin')} target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero