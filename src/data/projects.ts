/**
 * Data for each project
 * Displayed in the Projects section
 */

export interface Project {
    id: string
    tags: string[]
    github?: string
    demo?: string
    thumbnail?: string
    images?: string[]
    year: number
}

export const projects: Project[] = [
  {
    id: 'dittravel',
    tags: ['Astro', 'Node.js', 'Prisma ORM', 'Tailwind CSS'],
    github: 'https://github.com/dittravel',
    thumbnail: '/projects/dittravel/dittravel-1.png',
    images: ['/projects/dittravel/dittravel-1.png', '/projects/dittravel/dittravel-2.png'],
    year: 2026
  },
  {
    id: 'next-buy-predictor',
    tags: ['Python', 'XGBoost', 'BERT4Rec', 'Flask', 'React'],
    thumbnail: '/projects/banamex/banamex-1.png',
    images: ['/projects/banamex/banamex-1.png', '/projects/banamex/banamex-2.jpeg'],
    year: 2026
  },
  {
    id: 'petroindustria-client-system',
    tags: ['React, Next.js', 'TypeScript', 'Supabase'],
    thumbnail: '/projects/petroindustria-client-system/petro-1.png',
    images: ['/projects/petroindustria-client-system/petro-1.png'],
    year: 2026
  },
  {
    id: 'multi-agent-simulation',
    tags: ['Python', 'Mesa', 'WebGL'],
    github: 'https://github.com/diegocrdz/TC2008B_Equipo8',
    demo: 'https://www.youtube.com/watch?v=kY9CcUqD3d4',
    thumbnail: '/projects/multi-agent-simulation/sim-1.png',
    images: ['/projects/multi-agent-simulation/sim-1.png', '/projects/multi-agent-simulation/sim-2.png'],
    year: 2025
  },
  {
    id: 'emergency-registration-system',
    tags: ['React Admin', 'JavaScript', 'MongoDB'],
    github: 'https://github.com/diegocrdz/TC2007B_Equipo3',
    demo: 'https://www.youtube.com/watch?v=-uO8mCZCvpc',
    thumbnail: '/projects/emergency-registration-system/ers-1.png',
    images: ['/projects/emergency-registration-system/ers-1.png', '/projects/emergency-registration-system/ers-2.png'],
    year: 2025
  },
  {
    id: 'overclocked',
    tags: ['HTML', 'JavaScript', 'SQL'],
    github: 'https://github.com/diegocrdz/TC2005B_Equipo1_BotRunners',
    demo: 'https://diegocrdz.github.io/TC2005B_Equipo1_BotRunners/Web/HTML/inicio.html',
    thumbnail: '/projects/overclocked/oc-1.png',
    images: ['/projects/overclocked/oc-1.png', '/projects/overclocked/oc-2.png', '/projects/overclocked/oc-3.jpg'],
    year: 2025
  },
    {
    id: 'real-time-translation',
    tags: ['AI', 'Python', 'Express.js'],
    year: 2025
  },
  {
    id: 'cybersecurity-library',
    tags: ['ISO 27001', 'NIST', 'NYCE', 'Kali Linux'],
    github: 'https://github.com/nikole-mor/Cryptography',
    demo: 'https://nikole-mor.github.io/Cryptography/',
    thumbnail: '/projects/cybersecurity-library/lib-1.png',
    images: ['/projects/cybersecurity-library/lib-1.png'],
    year: 2024
  },
  {
    id: 'solar-panel-cleaning',
    tags: ['MATLAB'],
    thumbnail: '/projects/solar-panel-cleaning/spc-1.png',
    images: ['/projects/solar-panel-cleaning/spc-1.png', '/projects/solar-panel-cleaning/spc-2.jpg'],
    year: 2024
  },
  {
    id: 'microsoft-basics-course',
    tags: ['Python', 'Microsoft Office'],
    thumbnail: '/projects/microsoft-basics-course/mbc-1.png',
    images: ['/projects/microsoft-basics-course/mbc-1.png'],
    year: 2024
  },
  {
    id: 'sebas-night-runner',
    tags: ['C#', 'Unity'],
    github: 'https://github.com/diegocrdz/SebasNightRunner',
    demo: 'https://diegocrdz.itch.io/sebas-night-runner',
    thumbnail: '/projects/sebas-night-runner/snr-1.png',
    images: ['/projects/sebas-night-runner/snr-1.png', '/projects/sebas-night-runner/snr-2.png', '/projects/sebas-night-runner/snr-3.png'],
    year: 2023
  },
]