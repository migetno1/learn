import { ArrowUpRight, BookOpen, MonitorPlay, Scale } from 'lucide-react'
import { SourceId, vadMeta, vadSources } from '../data/vadContent'

type CitationLinksProps = { sources: SourceId[] }

export function CitationLinks({ sources }: CitationLinksProps) {
  return (
    <span className="citation-links" aria-label="Sources">
      {sources.map((id) => (
        <a key={id} href={vadSources[id].href} target="_blank" rel="noreferrer" title={vadSources[id].title}>
          {id}<span className="sr-only">: {vadSources[id].short}</span>
        </a>
      ))}
    </span>
  )
}

type ModeNavProps = { mode: 'learn' | 'present'; compact?: boolean }

export function VadModeNav({ mode, compact = false }: ModeNavProps) {
  const learnHref = mode === 'learn' ? '#main' : '../'
  const presentHref = mode === 'present' ? '#main' : './presentation/'

  return (
    <nav className={`mode-nav ${compact ? 'mode-nav--compact' : ''}`} aria-label="Topic mode">
      <a href={learnHref} aria-current={mode === 'learn' ? 'page' : undefined}>
        <BookOpen size={16} aria-hidden="true" /> Study
      </a>
      <a href={presentHref} aria-current={mode === 'present' ? 'page' : undefined}>
        <MonitorPlay size={16} aria-hidden="true" /> Present
      </a>
    </nav>
  )
}

export function JurisdictionStamp({ dark = false }: { dark?: boolean }) {
  return (
    <aside className={`jurisdiction-stamp ${dark ? 'jurisdiction-stamp--dark' : ''}`} aria-label="Jurisdiction and review status">
      <Scale size={18} aria-hidden="true" />
      <div><strong>{vadMeta.jurisdiction}</strong><span>Current as at {vadMeta.currentAsAt}</span></div>
    </aside>
  )
}

export function SourceRegister() {
  return (
    <div className="source-register">
      {Object.entries(vadSources).map(([id, source]) => (
        <a key={id} href={source.href} target="_blank" rel="noreferrer">
          <span>{id}</span><span><strong>{source.short}</strong><small>{source.title}</small></span><ArrowUpRight size={16} aria-hidden="true" />
        </a>
      ))}
    </div>
  )
}
