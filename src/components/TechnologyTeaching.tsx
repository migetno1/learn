import { ArrowUpRight, BookOpen, MonitorPlay, ShieldCheck } from 'lucide-react'
import { technologyMeta, technologySources, type TechnologySourceId } from '../data/technologyContent'

export function TechCitations({ sources }: { sources: TechnologySourceId[] }) {
  return <span className="citation-links" aria-label="Sources">{sources.map((id) => <a key={id} href={technologySources[id].href} target="_blank" rel="noreferrer" title={technologySources[id].title}>{id}<span className="sr-only">: {technologySources[id].short}</span></a>)}</span>
}

export function TechnologyModeNav({ mode }: { mode: 'learn' | 'present' }) {
  return <nav className="mode-nav" aria-label="Topic mode"><a href={mode === 'learn' ? '#main' : '../'} aria-current={mode === 'learn' ? 'page' : undefined}><BookOpen size={16} aria-hidden="true" /> Study</a><a href={mode === 'present' ? '#main' : './presentation/'} aria-current={mode === 'present' ? 'page' : undefined}><MonitorPlay size={16} aria-hidden="true" /> Present</a></nav>
}

export function TechnologyStatus({ dark = false }: { dark?: boolean }) {
  return <aside className={`jurisdiction-stamp ${dark ? 'jurisdiction-stamp--dark' : ''}`} aria-label="Jurisdiction and review status"><ShieldCheck size={18} aria-hidden="true" /><div><strong>{technologyMeta.jurisdiction}</strong><span>Current as at {technologyMeta.currentAsAt}</span></div></aside>
}

export function Maturity({ children, tone }: { children: React.ReactNode; tone: 'current' | 'emerging' | 'horizon' | 'boundary' }) {
  return <span className={`tech-maturity tech-maturity--${tone}`}>{children}</span>
}

export function TechnologySourceRegister() {
  return <div className="source-register">{Object.entries(technologySources).map(([id, source]) => <a key={id} href={source.href} target="_blank" rel="noreferrer"><span>{id}</span><span><strong>{source.short}</strong><small>{source.kind} · {source.title}</small></span><ArrowUpRight size={16} aria-hidden="true" /></a>)}</div>
}
