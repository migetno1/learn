import { ArrowDown, ArrowLeft, ArrowRight, Brain, Check, ChevronDown, ChevronUp, Expand, MapPin, Scale, X } from 'lucide-react'
import { useEffect, useMemo, useRef, useState } from 'react'
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import { JurisdictionStamp, VadModeNav } from '../components/VadTeaching'
import { bathurstPathway, capacityElements, eligibilityCriteria, firstRequestDuties, misconceptions, vadMeta } from '../data/vadContent'
import vadHero from '../assets/vad-editorial-hero.webp'
import eligibilityArt from '../assets/vad-eligibility-thresholds.webp'
import capacityArt from '../assets/vad-capacity-profiles.webp'
import bathurstArt from '../assets/vad-bathurst-pathway.webp'
import margaretPortrait from '../assets/vad-margaret-character.webp'

const sectionIds = ['opening', 'vignette', 'eligibility', 'request', 'capacity', 'bathurst', 'close', 'misconceptions']
function SceneArtwork({ src, className = '' }: { src: string; className?: string }) {
  const reduceMotion = useReducedMotion()
  const frame = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: frame, offset: ['start end', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], [reduceMotion ? 0 : -18, reduceMotion ? 0 : 18])
  const scale = useTransform(scrollYProgress, [0, .5, 1], [1.025, 1, 1.025])

  return <div ref={frame} className={`scene-art ${className}`} aria-hidden="true"><motion.img src={src} alt="" style={{ y, scale }} /></div>
}

export function VadPresentationPage() {
  const reduceMotion = useReducedMotion()
  const { scrollYProgress } = useScroll()
  const heroScale = useTransform(scrollYProgress, [0, 0.2], [1, reduceMotion ? 1 : 1.04])
  const [presenting, setPresenting] = useState(false)
  const [active, setActive] = useState(0)
  const [revealed, setRevealed] = useState<number[]>([])

  const sections = useMemo(() => sectionIds.map((id) => document.getElementById(id)).filter(Boolean) as HTMLElement[], [presenting])

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) if (entry.isIntersecting) setActive(sectionIds.indexOf(entry.target.id))
    }, { threshold: 0.55 })
    sectionIds.forEach((id) => { const element = document.getElementById(id); if (element) observer.observe(element) })
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (!presenting || ['INPUT', 'TEXTAREA', 'SUMMARY'].includes((event.target as HTMLElement).tagName)) return
      const forward = ['ArrowDown', 'ArrowRight', 'PageDown', ' '].includes(event.key)
      const backward = ['ArrowUp', 'ArrowLeft', 'PageUp'].includes(event.key)
      if (!forward && !backward && event.key !== 'Escape') return
      if (event.key === 'Escape') { void exitPresentation(); return }
      event.preventDefault()
      const next = Math.max(0, Math.min(sectionIds.length - 1, active + (forward ? 1 : -1)))
      document.getElementById(sectionIds[next])?.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth' })
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [active, presenting, reduceMotion])

  const enterPresentation = async () => {
    setPresenting(true)
    document.body.classList.add('presentation-mode')
    try { await document.documentElement.requestFullscreen?.() } catch { /* Fullscreen is an enhancement. */ }
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

  return (
    <>
      <a className="skip-link" href="#main">Skip to presentation</a>
      <div className="scroll-progress" aria-hidden="true"><motion.span style={{ scaleX: scrollYProgress }} /></div>
      <header className="presentation-header">
        <a href="../"><ArrowLeft size={17} aria-hidden="true" /> Learning guide</a>
        <VadModeNav mode="present" compact />
        <button type="button" onClick={enterPresentation}><Expand size={16} aria-hidden="true" /> Fullscreen</button>
      </header>

      <main id="main" className="vad-presentation">
        <section className="presentation-scene presentation-opening" id="opening" data-scene="01">
          <motion.img style={{ scale: heroScale }} src={vadHero} width="1200" height="816" alt="" aria-hidden="true" />
          <div className="presentation-opening__wash" />
          <div className="scene-inner">
            <p className="eyebrow">A NSW medico-legal presentation</p>
            <h1>When a patient<br /><em>asks about VAD</em></h1>
            <p className="scene-intro">Eligibility. The first request. Capacity. The path from a Bathurst consulting room.</p>
            <JurisdictionStamp dark />
            <a className="scroll-cue" href="#vignette">Begin the case <ArrowDown aria-hidden="true" /></a>
          </div>
        </section>

        <section className="presentation-scene vignette-scene" id="vignette" data-scene="02">
          <div className="scene-inner scene-split">
            <div className="case-file-column">
              <div className="case-file-label"><span>Case file</span><strong>01 / Opening facts</strong></div>
              <motion.img className="vignette-character" src={margaretPortrait} alt="Illustrated portrait of Margaret, the fictional patient" initial={reduceMotion ? false : { opacity: 0, y: 36 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: .5 }} transition={{ duration: 1 }} />
            </div>
            <motion.div className="vignette-card" initial={reduceMotion ? false : { opacity: 0, y: 42 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: .42 }} transition={{ duration: 1 }}>
              <p className="eyebrow">Bathurst · General practice</p>
              <h2>Margaret, 72</h2>
              <p>Margaret has metastatic pancreatic cancer. Her oncologist expects that she is likely to die within six months. She has mild cognitive impairment and takes antidepressant medication.</p>
              <blockquote>“I’ve thought about this carefully. I want to request voluntary assisted dying.”</blockquote>
              <p className="case-note">Her daughter is present and immediately says, “This is what Mum wants.”</p>
            </motion.div>
            <motion.div className="audience-question" initial={reduceMotion ? false : { opacity: 0, x: 36 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: false, amount: .7 }} transition={{ duration: .9, delay: .25 }}><span>The question</span><h3>What has legally happened?</h3><p>And what must the receiving GP do next?</p></motion.div>
          </div>
        </section>

        <section className="presentation-scene eligibility-scene" id="eligibility" data-scene="03">
          <SceneArtwork src={eligibilityArt} className="scene-art--eligibility" />
          <div className="scene-inner">
            <div className="scene-heading"><div><p className="eyebrow">Section 16</p><h2>Eligibility is a conjunction.</h2></div><p>Every element. Two independent authorised assessors. No treating GP shortcut.</p></div>
            <div className="presentation-criteria">{eligibilityCriteria.map(([title, detail], index) => <motion.article key={title} initial={reduceMotion ? false : { opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: .45 }} transition={{ duration: 1, delay: index * .11 }}><span>{String(index + 1).padStart(2, '0')}</span><div><h3>{title}</h3><p>{detail}</p></div></motion.article>)}</div>
            <div className="statute-ribbon"><Scale aria-hidden="true" /><p><strong>Not eligible merely because of</strong> disability, dementia or a mental health impairment.</p><span>s 16(2)</span></div>
          </div>
        </section>

        <section className="presentation-scene request-scene" id="request" data-scene="04">
          <div className="scene-inner">
            <div className="scene-heading"><div><p className="eyebrow">Sections 19–23</p><h2>The request changes the clock.</h2></div><p>Once the statutory trigger occurs, objection or lack of authorisation does not make the duties disappear.</p></div>
            <div className="trigger-equation"><motion.span initial={reduceMotion ? false : { opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: false }} transition={{ duration: .9 }}>Patient’s own request</motion.span><b>+</b><motion.span initial={reduceMotion ? false : { opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: false }} transition={{ duration: .9, delay: .24 }}>Clear and unambiguous</motion.span><b>+</b><motion.span initial={reduceMotion ? false : { opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: false }} transition={{ duration: .9, delay: .48 }}>Medical consultation</motion.span><motion.strong initial={reduceMotion ? false : { opacity: 0, scale: .94 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: false }} transition={{ duration: .9, delay: .72 }}>FIRST REQUEST</motion.strong></div>
            <div className="presentation-timeline">{firstRequestDuties.slice(1).map((duty, index) => <motion.article key={duty.title} initial={reduceMotion ? false : { opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: .5 }} transition={{ duration: .9, delay: index * .18 }}><span className="timeline-number">{index + 1}</span><div><p>{duty.timing}</p><h3>{duty.title}</h3><small>{duty.section}</small></div></motion.article>)}</div>
            <div className="case-application"><span>Application</span><p>Margaret’s words appear clear and unambiguous. Her daughter’s agreement is neither the request nor a substitute for Margaret’s own voluntariness and capacity.</p></div>
          </div>
        </section>

        <section className="presentation-scene capacity-scene" id="capacity" data-scene="05">
          <SceneArtwork src={capacityArt} className="scene-art--capacity" />
          <div className="scene-inner scene-split">
            <div><p className="eyebrow">Section 6</p><h2>Assess the decision.<br />Not the diagnosis.</h2><div className="capacity-presumption"><Brain aria-hidden="true" /><p><strong>Start with the presumption.</strong> VAD-specific decision-making capacity is presumed unless shown otherwise.</p></div></div>
            <ol className="presentation-capacity">{capacityElements.map((item, index) => <motion.li key={item} initial={reduceMotion ? false : { opacity: 0, x: 28 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: false, amount: .65 }} transition={{ duration: .9, delay: index * .14 }}><span>{index + 1}</span><p>{item}</p></motion.li>)}</ol>
            <div className="capacity-contrast"><article><h3>Dementia</h3><p>Not automatic incapacity. Consider the actual statutory abilities, support and fluctuation.</p></article><article><h3>Mental illness</h3><p>Not automatic incapacity or exclusion. Ask what effect, if any, it has on this decision.</p></article></div>
          </div>
        </section>

        <section className="presentation-scene bathurst-scene" id="bathurst" data-scene="06">
          <SceneArtwork src={bathurstArt} className="scene-art--bathurst" />
          <div className="scene-inner">
            <div className="scene-heading"><div><p className="eyebrow">From consultation to navigation</p><h2>The Bathurst pathway</h2></div><MapPin size={44} strokeWidth={1.3} aria-hidden="true" /></div>
            <div className="presentation-pathway">{bathurstPathway.map((step, index) => <motion.article key={step.title} initial={reduceMotion ? false : { opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: .5 }} transition={{ duration: 1, delay: index * .2 }}><span>{index + 1}</span><div><h3>{step.title}</h3><p>{step.detail}</p></div>{index < bathurstPathway.length - 1 && <ArrowRight aria-hidden="true" />}</motion.article>)}</div>
            <div className="service-strip"><div><span>Western NSW LHD</span><strong>1800 684 283</strong><small>Mon–Fri · 9 am–3 pm</small></div><div><span>NSW Care Navigator</span><strong>1300 802 133</strong><small>Mon–Fri · 8:30 am–4:30 pm</small></div></div>
          </div>
        </section>

        <section className="presentation-scene close-scene" id="close" data-scene="07">
          <div className="scene-inner">
            <p className="eyebrow">The first-request checklist</p>
            <h2>Recognise.<br /><em>Respond.</em><br />Record.</h2>
            <div className="close-principles"><p><Check aria-hidden="true" /> Recognise the first-request trigger.</p><p><Check aria-hidden="true" /> Respond within the statutory timeframes.</p><p><Check aria-hidden="true" /> Assess capacity, not diagnostic labels.</p><p><Check aria-hidden="true" /> Continue care and offer a verified pathway.</p></div>
            <a href="#misconceptions" className="optional-link">Optional discussion: misconceptions on trial <ArrowDown aria-hidden="true" /></a>
          </div>
        </section>

        <section className="presentation-scene misconceptions-scene" id="misconceptions" data-scene="08">
          <div className="scene-inner">
            <div className="scene-heading"><div><p className="eyebrow">Optional · cut here if short on time</p><h2>Misconceptions on trial</h2></div><p>Ask for a verdict before revealing the qualified answer.</p></div>
            <div className="trial-grid">{misconceptions.map((item, index) => { const isOpen = revealed.includes(index); return <article key={item.claim} className={isOpen ? 'is-revealed' : ''}><p className="trial-number">Proposition {index + 1}</p><h3>{item.claim}</h3><button type="button" aria-expanded={isOpen} onClick={() => setRevealed((current) => isOpen ? current.filter((value) => value !== index) : [...current, index])}>{isOpen ? 'Hide answer' : 'Reveal verdict'} <ArrowRight aria-hidden="true" /></button>{isOpen && <motion.div initial={reduceMotion ? false : { opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .8 }}><strong>{item.verdict}</strong><p>{item.correction}</p></motion.div>}</article> })}</div>
          </div>
        </section>
      </main>

      {presenting && <nav className="presenter-controls" aria-label="Presentation controls"><span>{String(active + 1).padStart(2, '0')} / {String(sectionIds.length).padStart(2, '0')}</span><button type="button" onClick={() => move(-1)} disabled={active === 0} aria-label="Previous section"><ChevronUp aria-hidden="true" /></button><button type="button" onClick={() => move(1)} disabled={active === sectionIds.length - 1} aria-label="Next section"><ChevronDown aria-hidden="true" /></button><button type="button" onClick={exitPresentation} aria-label="Exit presentation"><X aria-hidden="true" /></button></nav>}
      <footer className="presentation-footer"><a href="../">Open the learning guide <ArrowRight aria-hidden="true" /></a><span>NSW · Current as at {vadMeta.currentAsAt}</span></footer>
    </>
  )
}
