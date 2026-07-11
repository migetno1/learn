import { ArrowUpRight } from 'lucide-react'
import { BrandMark } from './BrandMark'

type SiteHeaderProps = {
  homeHref?: string
  compact?: boolean
}

export function SiteHeader({ homeHref = './', compact = false }: SiteHeaderProps) {
  return (
    <header className={`site-header ${compact ? 'site-header--compact' : ''}`}>
      <a className="brand-link" href={homeHref}>
        <BrandMark />
      </a>
      <p className="header-purpose">Clinical education for Australian general practice</p>
      {!compact && (
        <a className="header-link" href="#topics">
          Browse topics <ArrowUpRight size={16} aria-hidden="true" />
        </a>
      )}
    </header>
  )
}
