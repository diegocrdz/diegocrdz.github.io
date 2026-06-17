/**
 * Hero.tsx
 * 
 * Display the hero section of the portfolio, including a profile picture, name, role, and a short bio.
 */

import { useTranslation } from 'react-i18next';
import InteractiveDotGrid from '@/components/aicanvas/dot-grid';
import { EncryptedText } from '@/components/ui/encrypted-text';

const Hero = () => {
  const { t } = useTranslation()

  return (
    <section className="h-[calc(100vh-3.5rem)] w-full flex items-center justify-center px-6">
      <div className="absolute inset-0">
        <InteractiveDotGrid showLabel={false} />
      </div>
      <div className="relative z-10 max-w-2xl">
        <EncryptedText
          text={t('hero.intro')}
          className="text-5xl font-medium mb-2"
        />
        <p className="text-muted-foreground mb-4">{t('hero.role')}</p>
      </div>
    </section>
  )
}

export default Hero