import { ArrowUpRight, BookOpen, MonitorPlay, ShieldCheck } from 'lucide-react'
import { aiMeta, aiSources, workflow, type AiSourceId } from '../data/aiContent'

export function AiCitations({ sources }: { sources: AiSourceId[] }) {
  return <span className="citation-links" aria-label="Sources">{sources.map((id) => <a key={id} href={aiSources[id].href} target="_blank" rel="noreferrer" title={aiSources[id].title}>{id}<span className="sr-only">: {aiSources[id].short}</span></a>)}</span>
}

export function AiModeNav({ mode, compact = false }: { mode: 'learn' | 'present'; compact?: boolean }) {
  return <nav className={`mode-nav ${compact ? 'mode-nav--compact' : ''}`} aria-label="Topic mode">
    <a href={mode === 'learn' ? '#main' : '../'} aria-current={mode === 'learn' ? 'page' : undefined}><BookOpen size={16} aria-hidden="true" /> Study</a>
    <a href={mode === 'present' ? '#main' : './presentation/'} aria-current={mode === 'present' ? 'page' : undefined}><MonitorPlay size={16} aria-hidden="true" /> Present</a>
  </nav>
}

export function AiStatusStamp({ dark = false }: { dark?: boolean }) {
  return <aside className={`jurisdiction-stamp ${dark ? 'jurisdiction-stamp--dark' : ''}`} aria-label="Jurisdiction and review status"><ShieldCheck size={18} aria-hidden="true" /><div><strong>{aiMeta.jurisdiction}</strong><span>Current as at {aiMeta.currentAsAt}</span></div></aside>
}

export function WorkflowStrip({ active }: { active?: number }) {
  return <ol className="ai-workflow" aria-label="Five-step AI workflow">{workflow.map((step, index) => <li key={step} className={active === index ? 'is-active' : ''}><span>{index + 1}</span>{step}</li>)}</ol>
}

export function AiSourceRegister() {
  return <div className="source-register">{Object.entries(aiSources).map(([id, source]) => <a key={id} href={source.href} target="_blank" rel="noreferrer"><span>{id}</span><span><strong>{source.short}</strong><small>{source.kind} · {source.title}</small></span><ArrowUpRight size={16} aria-hidden="true" /></a>)}</div>
}
