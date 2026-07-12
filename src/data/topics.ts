import vadHero from '../assets/vad-editorial-hero.webp'
import aiCerebralHero from '../assets/ai-cerebral-hero.webp'

export type Topic = {
  title: string
  eyebrow: string
  description: string
  status: 'available' | 'planned'
  href?: string
  image?: {
    src: string
    width: number
    height: number
    objectPosition?: string
  }
  accent: 'eucalyptus' | 'ochre' | 'blue' | 'terracotta'
}

export const topics: Topic[] = [
  {
    title: 'Voluntary Assisted Dying',
    eyebrow: 'Ethics · Law · Clinical practice',
    description: 'A NSW-focused guide to eligibility, first-request duties, capacity and the GP’s role, with a Bathurst pathway.',
    status: 'available',
    href: './topics/voluntary-assisted-dying/',
    image: {
      src: vadHero,
      width: 1693,
      height: 929,
    },
    accent: 'eucalyptus',
  },
  {
    title: 'Technologies in General Practice',
    eyebrow: 'Technology · Evidence · Patient benefit',
    description: 'Follow Michael before, during and after one consultation to examine which technologies help—and what safe use still requires.',
    status: 'available',
    href: './topics/technologies-in-general-practice/',
    image: {
      src: aiCerebralHero,
      width: 1672,
      height: 941,
      objectPosition: '94% 50%',
    },
    accent: 'blue',
  },
  {
    title: 'Diabetes',
    eyebrow: 'Metabolic health',
    description: 'Practical reasoning across diagnosis, treatment, risk reduction, and continuity of care.',
    status: 'planned',
    accent: 'ochre',
  },
  {
    title: 'Hypertension',
    eyebrow: 'Cardiovascular health',
    description: 'From accurate measurement to individualised risk conversations and longitudinal management.',
    status: 'planned',
    accent: 'terracotta',
  },
  {
    title: 'Chronic Kidney Disease',
    eyebrow: 'Renal health',
    description: 'Detection, staging, prescribing considerations, and shared care in general practice.',
    status: 'planned',
    accent: 'blue',
  },
]
