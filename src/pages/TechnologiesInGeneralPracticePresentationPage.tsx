import { ArrowLeft, ArrowRight, Bot, ChevronDown, ChevronUp, CircleAlert, Expand, HeartHandshake, ShieldCheck, UserRoundCheck, X } from 'lucide-react'
import { useEffect, useLayoutEffect, useMemo, useState } from 'react'
import { motion, useReducedMotion, useScroll } from 'framer-motion'
import { Maturity, TechnologyStatus } from '../components/TechnologyTeaching'
import { technologyJourney } from '../data/technologyContent'
import heroArt from '../assets/ai-cerebral-hero.webp'
import michaelArt from '../assets/ai-consultation.webp'
import verificationArt from '../assets/ai-verification.webp'
import futureArt from '../assets/ai-future-horizons.webp'
import learningArt from '../assets/ai-education-workflow.webp'

const journeyIds = technologyJourney.map((item) => `tech-${item.id}`)
const sectionIds = ['tech-opening', 'tech-michael', ...journeyIds, 'tech-appendix', 'tech-close']
const visualById: Record<string, string> = { scribe: verificationArt, monitor: futureArt, optimise: futureArt, retina: heroArt }

export function TechnologiesInGeneralPracticePresentationPage() {
  const reduceMotion = useReducedMotion()
  const { scrollYProgress } = useScroll()
  const [active, setActive] = useState(0)
  const [presenting, setPresenting] = useState(false)
  const sections = useMemo(() => sectionIds.map((id) => document.getElementById(id)).filter(Boolean) as HTMLElement[], [presenting])

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => { if (entry.isIntersecting) setActive(sectionIds.indexOf(entry.target.id)) }), { threshold: .55 })
    sectionIds.forEach((id) => { const element = document.getElementById(id); if (element) observer.observe(element) })
    return () => observer.disconnect()
  }, [])

  useLayoutEffect(() => {
    const textSelectors = [
      '.tech-opening .scene-inner > *',
      '.tech-michael-scene .scene-inner > div:first-child > *',
      '.tech-michael-board > *',
      '.tech-journey-scene .tech-scene-title .eyebrow',
      '.tech-journey-scene .tech-scene-title h2',
      '.tech-journey-scene .tech-maturity',
      '.tech-journey-scene .tech-scene-tool',
      '.tech-journey-scene .tech-scene-core > article',
      '.tech-journey-scene .tech-scene-guardrail > *',
      '.tech-appendix-scene .scene-inner > .eyebrow',
      '.tech-appendix-scene .scene-inner > h2',
      '.tech-appendix-present > article',
      '.tech-close .scene-inner > .eyebrow',
      '.tech-close .scene-inner > h2',
      '.tech-close-grid > article',
      '.tech-close .scene-inner > blockquote',
      '.tech-close .scene-inner > .jurisdiction-stamp',
    ]
    const textTargets = Array.from(document.querySelectorAll<HTMLElement>(textSelectors.join(',')))
    const visualTargets = Array.from(document.querySelectorAll<HTMLElement>('.tech-presentation .presentation-scene > img'))
    const sceneIndexes = new Map<Element, number>()

    textTargets.forEach((target) => {
      const scene = target.closest('.presentation-scene')
      const index = scene ? sceneIndexes.get(scene) ?? 0 : 0
      target.classList.add('tech-presentation-motion')
      target.style.setProperty('--tech-motion-delay', `${Math.min(index, 5) * 70}ms`)
      if (scene) sceneIndexes.set(scene, index + 1)
    })
    visualTargets.forEach((target) => {
      const restOpacity = target.classList.contains('tech-scene-visual') ? '.1' : target.closest('.tech-michael-scene') ? '.38' : target.closest('.tech-appendix-scene') ? '.16' : '1'
      target.classList.add('tech-presentation-visual-motion')
      target.style.setProperty('--tech-visual-opacity', restOpacity)
    })

    const targets = [...visualTargets, ...textTargets]
    const resetTarget = (target: HTMLElement) => {
      target.classList.remove('tech-presentation-motion', 'tech-presentation-visual-motion', 'is-visible', 'is-past')
      target.style.removeProperty('--tech-motion-delay')
      target.style.removeProperty('--tech-visual-opacity')
    }

    if (reduceMotion) {
      targets.forEach((target) => target.classList.add('is-visible'))
      return () => targets.forEach(resetTarget)
    }

    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => {
      const target = entry.target as HTMLElement
      if (entry.isIntersecting) {
        target.classList.remove('is-past')
        target.classList.add('is-visible')
        return
      }
      target.classList.remove('is-visible')
      target.classList.toggle('is-past', entry.boundingClientRect.top < 0)
    }), { threshold: .16, rootMargin: '-7% 0px -7% 0px' })

    targets.forEach((target) => observer.observe(target))
    return () => {
      observer.disconnect()
      targets.forEach(resetTarget)
    }
  }, [reduceMotion])

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (['INPUT', 'TEXTAREA', 'SUMMARY'].includes((event.target as HTMLElement).tagName)) return
      if (event.key === 'Escape' && presenting) { void exitPresentation(); return }
      const forward = ['ArrowDown', 'ArrowRight', 'PageDown', ' '].includes(event.key)
      const backward = ['ArrowUp', 'ArrowLeft', 'PageUp'].includes(event.key)
      if (!forward && !backward) return
      event.preventDefault()
      const next = Math.max(0, Math.min(sectionIds.length - 1, active + (forward ? 1 : -1)))
      document.getElementById(sectionIds[next])?.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth' })
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [active, presenting, reduceMotion])

  useEffect(() => {
    const onFullscreenChange = () => { if (!document.fullscreenElement) { setPresenting(false); document.body.classList.remove('presentation-mode') } }
    document.addEventListener('fullscreenchange', onFullscreenChange)
    return () => { document.removeEventListener('fullscreenchange', onFullscreenChange); document.body.classList.remove('presentation-mode') }
  }, [])

  const enterPresentation = async () => {
    setPresenting(true)
    document.body.classList.add('presentation-mode')
    try { await document.documentElement.requestFullscreen?.() } catch { /* Fullscreen remains an enhancement. */ }
  }
  const exitPresentation = async () => {
    setPresenting(false)
    document.body.classList.remove('presentation-mode')
    if (document.fullscreenElement) await document.exitFullscreen?.()
  }
  const move = (delta: number) => {
    const next = Math.max(0, Math.min(sections.length - 1, active + delta))
    sections[next]?.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth' })
  }

  return <>
    <a className="skip-link" href="#main">Skip to presentation</a>
    <div className="scroll-progress" aria-hidden="true"><motion.span style={{ scaleX: scrollYProgress }} /></div>
    <header className="presentation-header tech-presentation-header"><a href="../"><ArrowLeft size={18} aria-hidden="true" /> Learning guide</a><strong>Technologies in General Practice</strong><button type="button" onClick={enterPresentation}><Expand size={18} aria-hidden="true" /> Fullscreen</button></header>
    <main id="main" className="tech-presentation">
      <section className="presentation-scene tech-opening" id="tech-opening" data-scene="01"><img src={heroArt} alt="" aria-hidden="true" /><div className="tech-opening__scrim" /><div className="scene-inner"><p className="eyebrow">Australian general practice</p><h1>Technology should<br /><em>help the patient.</em></h1><p className="scene-intro">One patient. Twelve recommendations. The question is not whether a tool is impressive—but whether it improves Michael’s care without moving hidden work or risk onto him.</p><TechnologyStatus dark /></div></section>

      <section className="presentation-scene tech-michael-scene" id="tech-michael" data-scene="02"><img src={michaelArt} alt="Editorial illustration of Michael speaking with his GP" /><div className="scene-inner"><div><p className="eyebrow">Fictional case · start with the person</p><h2>Meet Michael.</h2><p className="scene-intro">64 · self-employed school-bus driver · lives outside town · patchy connectivity</p></div><div className="tech-michael-board"><article><span>Booking reason</span><strong>Worsening frequency + nocturia</strong></article><article><span>The wider story</span><strong>Thirst + fatigue + disrupted sleep</strong></article><article><span>What matters</span><strong>Route safety + fewer trips into town</strong></article><article><span>His terms</span><strong>Concise plan · teach-back · right to refuse</strong></article><blockquote>“I need a plan I can understand, and I cannot keep coming back into town for every small thing.”</blockquote><p>Ordinary assessment later identifies type 2 diabetes. No AI makes the diagnosis.</p></div></div></section>

      {technologyJourney.map((item, index) => {
        const visual = visualById[item.id]
        const variant = index % 4
        return <section className={`presentation-scene tech-journey-scene tech-journey-scene--${variant} tech-journey-scene--${item.tone}`} id={`tech-${item.id}`} data-scene={String(index + 3).padStart(2, '0')} key={item.id}>
          {visual && <img className="tech-scene-visual" src={visual} alt="" aria-hidden="true" />}
          <div className="scene-inner">
            <div className="tech-scene-title"><div><p className="eyebrow">{item.phase}</p><h2>{item.title}</h2></div><Maturity tone={item.tone}>{item.maturity}</Maturity></div>
            <p className="tech-scene-tool">{item.tool}</p>
            <div className="tech-scene-core"><article><span>Task</span><p>{item.how}</p></article><article><span>For Michael</span><p>{item.michael}</p></article><article><span>Evidence boundary</span><p>{item.evidence}</p></article></div>
            <div className="tech-scene-guardrail"><CircleAlert aria-hidden="true" /><p><strong>Failure to anticipate:</strong> {item.failure}</p><ShieldCheck aria-hidden="true" /><p><strong>Clinician action:</strong> {item.oversight}</p></div>
          </div>
        </section>
      })}

      <section className="presentation-scene tech-appendix-scene" id="tech-appendix" data-scene="13"><img src={learningArt} alt="" aria-hidden="true" /><div className="scene-inner"><p className="eyebrow">Clinician-learning appendix · indirect patient benefit</p><h2>Prepare better.<br /><em>Do not outsource understanding.</em></h2><div className="tech-appendix-present"><article><Bot aria-hidden="true" /><h3>Diagnostic brainstorming</h3><p>Independent reasoning first. Synthetic prompt second. Authoritative verification third.</p><strong>Critical appraisal case—not validated patient-specific support.</strong></article><article><UserRoundCheck aria-hidden="true" /><h3>AI-assisted Anki</h3><p>Selected source. One testable point. Check every qualifier. Delete plausible clutter.</p><strong>Faster production is not evidence of better learning.</strong></article></div></div></section>

      <section className="presentation-scene tech-close" id="tech-close" data-scene="14"><div className="scene-inner"><p className="eyebrow">The transfer</p><h2>Useful technology<br /><em>leaves care more human.</em></h2><div className="tech-close-grid"><article><Bot aria-hidden="true" /><h3>The system may</h3><p>Capture · retrieve · classify · prioritise · draft · monitor</p></article><article><HeartHandshake aria-hidden="true" /><h3>The clinician and patient still</h3><p>Choose · interpret · verify · decide · respond · remain accountable</p></article></div><blockquote>Define the task. Appraise the workflow. Protect choice and data. Keep a fallback. Own the consequence.</blockquote><TechnologyStatus dark /></div></section>
    </main>
    {presenting && <nav className="presenter-controls" aria-label="Presentation controls"><span>{String(active + 1).padStart(2, '0')} / {String(sectionIds.length).padStart(2, '0')}</span><button type="button" onClick={() => move(-1)} disabled={active === 0} aria-label="Previous scene"><ChevronUp aria-hidden="true" /></button><button type="button" onClick={() => move(1)} disabled={active === sectionIds.length - 1} aria-label="Next scene"><ChevronDown aria-hidden="true" /></button><button type="button" onClick={exitPresentation} aria-label="Exit presentation"><X aria-hidden="true" /></button></nav>}
    <footer className="presentation-footer"><a href="../">Open the learning guide <ArrowRight aria-hidden="true" /></a><span>Australia · Current as at 12 July 2026</span></footer>
  </>
}
