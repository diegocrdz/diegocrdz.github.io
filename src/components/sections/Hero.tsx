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
    <div className="h-screen w-screen flex items-center justify-center p-6">
      <div className="absolute inset-0">
        <InteractiveDotGrid showLabel={false} />
      </div>
      <div className="relative flex flex-col gap-4 z-10">
        <EncryptedText
          text={t('hero.intro')}
          className="text-4xl font-medium"
        />
        <p className="text-muted-foreground">
          {t('hero.role')}
        </p>
      </div>
    </div>
  )
}

export default Hero