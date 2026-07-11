export type Topic = {
  title: string
  eyebrow: string
  description: string
  status: 'available' | 'planned'
  href?: string
  accent: 'eucalyptus' | 'ochre' | 'blue' | 'terracotta'
}

export const topics: Topic[] = [
  {
    title: 'Voluntary Assisted Dying',
    eyebrow: 'Ethics · Law · Clinical practice',
    description: 'A NSW-focused guide to eligibility, first-request duties, capacity and the GP’s role, with a Bathurst pathway.',
    status: 'available',
    href: './topics/voluntary-assisted-dying/',
    accent: 'eucalyptus',
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
