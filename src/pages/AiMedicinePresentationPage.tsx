import { ArrowLeft, ArrowRight, Bot, Check, Expand, HeartHandshake } from 'lucide-react'
import { useEffect, useLayoutEffect, useState } from 'react'
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import { AiStatusStamp } from '../components/AiTeaching'
import { horizons, taskLens } from '../data/aiContent'
import cerebralHeroArt from '../assets/ai-cerebral-hero.webp'
import consultationArt from '../assets/ai-consultation.webp'
import verificationArt from '../assets/ai-verification.webp'
import futureArt from '../assets/ai-future-horizons.webp'
import educationArt from '../assets/ai-education-workflow.webp'
import taskLandscapeArt from '../assets/ai-task-landscape.webp'

const sectionIds = ['ai-opening', 'ai-michael', 'ai-scribe', 'ai-thinking', 'ai-evidence', 'ai-information', 'ai-education', 'ai-landscape', 'ai-future', 'ai-close']

export function AiMedicinePresentationPage() {
  const { scrollYProgress } = useScroll()
  const reduceMotion = useReducedMotion()
  const progressOpacity = useTransform(scrollYProgress, [0, .02], [.2, 1])
  const [active, setActive] = useState(0)

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => { if (entry.isIntersecting) setActive(sectionIds.indexOf(entry.target.id)) }), { threshold: .55 })
    sectionIds.forEach((id) => { const element = document.getElementById(id); if (element) observer.observe(element) })
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && document.body.classList.contains('presentation-mode')) {
        event.preventDefault()
        document.body.classList.remove('presentation-mode')
        if (document.fullscreenElement) void document.exitFullscreen?.()
        return
      }
      if (['INPUT', 'TEXTAREA', 'SUMMARY', 'BUTTON'].includes((event.target as HTMLElement).tagName)) return
      const forward = ['ArrowDown', 'ArrowRight', 'PageDown', ' '].includes(event.key)
      const backward = ['ArrowUp', 'ArrowLeft', 'PageUp'].includes(event.key)
      if (!forward && !backward) return
      event.preventDefault()
      const next = Math.max(0, Math.min(sectionIds.length - 1, active + (forward ? 1 : -1)))
      document.getElementById(sectionIds[next])?.scrollIntoView({ behavior: 'smooth' })
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [active])

  useLayoutEffect(() => {
    const targets = Array.from(document.querySelectorAll<HTMLElement>('.ai-presentation .scene-inner > *'))
    const visualTargets = Array.from(document.querySelectorAll<HTMLElement>('.ai-presentation .ai-scene-background'))
    targets.forEach((target, index) => {
      target.classList.add('ai-scene-reveal')
      target.style.setProperty('--ai-scene-delay', `${Math.min(index % 4, 3) * 90}ms`)
    })
    visualTargets.forEach((target) => target.classList.add('ai-visual-reveal'))
    if (reduceMotion) {
      targets.forEach((target) => target.classList.add('is-visible'))
      visualTargets.forEach((target) => target.classList.add('is-visible'))
      return () => {
        targets.forEach((target) => target.classList.remove('ai-scene-reveal', 'is-visible'))
        visualTargets.forEach((target) => target.classList.remove('ai-visual-reveal', 'is-visible'))
      }
    }
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => entry.target.classList.toggle('is-visible', entry.isIntersecting)), { threshold: .18, rootMargin: '-8% 0px -8% 0px' })
    targets.forEach((target) => observer.observe(target))
    visualTargets.forEach((target) => observer.observe(target))
    return () => observer.disconnect()
  }, [reduceMotion])

  useEffect(() => {
    const onFullscreenChange = () => {
      if (!document.fullscreenElement) {
        document.body.classList.remove('presentation-mode')
      }
    }
    document.addEventListener('fullscreenchange', onFullscreenChange)
    return () => {
      document.removeEventListener('fullscreenchange', onFullscreenChange)
      document.body.classList.remove('presentation-mode')
    }
  }, [])

  const enterPresentation = async () => {
    document.body.classList.add('presentation-mode')
    try { await document.documentElement.requestFullscreen?.() } catch { /* Fullscreen is an enhancement. */ }
  }

  return <>
    <a className="skip-link" href="#main">Skip to presentation</a>
    <div className="scroll-progress" aria-hidden="true"><motion.span style={{ scaleX: scrollYProgress, opacity: reduceMotion ? 1 : progressOpacity }} /></div>
    <header className="presentation-header ai-presentation-header"><a href="../"><ArrowLeft size={19} aria-hidden="true" /> Learning guide</a><strong>AI in Medicine · Presentation</strong><button type="button" onClick={enterPresentation}><Expand size={18} aria-hidden="true" /> Fullscreen</button></header>
    <main id="main" className="ai-presentation">
      <section className="presentation-scene ai-opening-scene" id="ai-opening" data-scene="01"><img className="ai-scene-background" src={cerebralHeroArt} alt="" aria-hidden="true" /><div className="ai-scene-scrim" /><div className="scene-inner"><p className="eyebrow">AI in medicine · Australia</p><h1>Will AI take<br /><span className="sr-only"> </span><em>our jobs?</em></h1><p className="opening-thesis">Follow one patient across documentation, clinical thinking, evidence, communication and education. AI can assist each task; it cannot inherit clinical accountability.</p><AiStatusStamp dark /></div></section>

      <section className="presentation-scene ai-michael-scene" id="ai-michael" data-scene="02"><img className="ai-scene-background" src={consultationArt} alt="" aria-hidden="true" /><div className="michael-scene__scrim" /><div className="scene-inner michael-scene__layout"><div className="michael-scene__title"><p className="eyebrow">Before the tool · fictional case</p><h2>Meet<br /><em>Michael.</em></h2><span>64 · Australian general practice</span></div><div className="michael-scene__panel"><div className="michael-facts"><article><span>Known</span><strong>BPH</strong></article><article><span>Worsening</span><strong>Frequency + nocturia</strong></article><article><span>Does not fit neatly</span><strong>Fatigue + thirst</strong></article><article><span>What matters</span><strong>Sleep + work + confidence</strong></article></div><blockquote>“How well does prostate artery embolisation work?”</blockquote><div className="audience-question"><span>Ask the room</span><h3>What are you thinking—and what would you not want to miss?</h3></div></div></div></section>

      <section className="presentation-scene ai-scribe-scene" id="ai-scribe" data-scene="03"><div className="scene-inner"><div className="scene-heading"><div><p className="eyebrow">During the consultation</p><h2>The ambient-scribe workflow</h2></div><p>The tool drafts documentation from spoken information. The clinician remains responsible for consent, the consultation and the final record. Lyrebird is a personal example, not an endorsement.</p></div><div className="ai-presentation-art-strip"><img src={verificationArt} alt="Abstract paper layers being checked against the consultation" /></div><ol className="scribe-workflow"><li><span>01</span><div><h3>Explain</h3><p>Describe capture, purpose, limits and clinician review.</p></div></li><li><span>02</span><div><h3>Consent</h3><p>Michael can decline; ordinary note-taking remains available.</p></div></li><li><span>03</span><div><h3>Consult</h3><p>Keep attention on Michael while the tool captures spoken details.</p></div></li><li><span>04</span><div><h3>Review</h3><p>Stop capture; check facts, omissions, examination, plan and follow-up.</p></div></li><li><span>05</span><div><h3>Authorise</h3><p>Correct the draft before it enters the record or another document.</p></div></li></ol><div className="present-scribe-grid"><article><Bot aria-hidden="true" /><h3>The scribe can assist</h3><p>Capture spoken details · structure a draft · reduce retyping</p></article><article><HeartHandshake aria-hidden="true" /><h3>The clinician still owns</h3><p>Consent and privacy · non-verbal information · examination and reasoning · omissions and inventions · the final record</p></article></div><p className="evidence-caption">Evidence shows promising workflow signals in some outpatient settings, but benefit varies, manual correction is common and Australian patient-outcome evidence remains limited.</p></div></section>

      <section className="presentation-scene ai-thinking-scene" id="ai-thinking" data-scene="04"><div className="scene-inner"><div className="scene-heading"><div><p className="eyebrow">Educational thinking partner</p><h2>Human reasoning first.<br /><em>AI challenge second.</em></h2></div><p>Use a fictional or de-identified educational prompt only after forming an independent assessment. The purpose is to expose learning gaps—not transfer the diagnostic decision.</p></div><div className="thinking-prompt"><span>Example educational prompt</span><p>Group possible causes of urinary frequency, nocturia, fatigue and thirst into common, serious and easily missed. Suggest findings that would discriminate between them. Do not choose a diagnosis.</p></div><ol className="thinking-flow"><li><span>01</span><h3>Assess first</h3><p>Form a differential and investigation plan from Michael’s story.</p></li><li><span>02</span><h3>Generate a challenge</h3><p>Ask for possibilities and discriminating questions—not an answer.</p></li><li><span>03</span><h3>Critique the output</h3><p>What was added, irrelevant, omitted or over-weighted? Which tests are justified?</p></li><li><span>04</span><h3>Verify and own</h3><p>Return to Michael and authoritative sources; the clinician decides and acts.</p></li></ol><div className="diagnosis-ribbon"><Check aria-hidden="true" /><p>Ordinary assessment and investigation later confirm type 2 diabetes.</p><strong>The AI did not make the diagnosis. LLM access has not reliably improved clinician reasoning.</strong></div></div></section>

      <section className="presentation-scene ai-evidence-scene" id="ai-evidence" data-scene="05"><div className="scene-inner"><p className="eyebrow">Finding evidence for Michael’s question</p><h2>The synthesis helps you find it.<br /><em>It is not the evidence.</em></h2><blockquote>“How well does prostate artery embolisation work?”</blockquote><p className="scene-context">First define the outcome Michael means. Then use the generated synthesis to locate—not replace—the original guideline or paper.</p><div className="presentation-evidence-ladder"><article><span>1</span><h3>Define “work”</h3></article><article><span>2</span><h3>Population + comparator</h3></article><article><span>3</span><h3>Follow-up + outcomes</h3></article><article><span>4</span><h3>Open the source</h3></article><article><span>5</span><h3>Shared decision</h3></article></div><p className="placeholder-ribbon">No efficacy number here: this clinical question has not been separately researched for this lesson.</p></div></section>

      <section className="presentation-scene ai-information-scene" id="ai-information" data-scene="06"><div className="scene-inner scene-split"><div><p className="eyebrow">Patient information after diagnosis</p><h2>Generation is cheap.<br /><em>Publication is not.</em></h2><p className="scene-intro">AI can draft or simplify an explanation. A trustworthy fact sheet still requires selected Australian sources, claim checking, readability and accessibility review, consumer input and clinician approval.</p></div><div className="present-placeholder"><span>Placeholder · site in development</span><h3>Type 2 diabetes fact sheet</h3><div className="patient-info-flow"><p><strong>1 · Source</strong><span>Select authoritative Australian material.</span></p><p><strong>2 · Draft</strong><span>Specify audience, purpose, reading level and actions.</span></p><p><strong>3 · Review</strong><span>Check claims, links, readability, accessibility and safety-netting.</span></p><p><strong>4 · Approve</strong><span>Publish only the clinician- and consumer-reviewed version.</span></p></div><a href="https://education.alexanderqho.com" target="_blank" rel="noreferrer">education.alexanderqho.com</a></div></div></section>

      <section className="presentation-scene ai-education-scene" id="ai-education" data-scene="07"><div className="scene-inner ai-education-layout"><figure><img src={educationArt} alt="A clinician-educator moving from verified sources to presentation and study-card development" /></figure><div><p className="eyebrow">After clinic</p><h2>Produce learning objects.<br /><em>Protect understanding.</em></h2><p className="scene-intro">The educator remains responsible for sources, selection, pedagogy and wording.</p><div className="present-education-grid"><article><h3>Research + presentation</h3><p>Question → challenge → primary sources → verify → distinguish claims, interpretation and placeholders → edit</p></article><article><h3>Anki</h3><p>Selected source → one learning point → retrieval prompt → qualifiers → source → delete the bad cards</p></article></div><blockquote>“A large deck of plausible cards can efficiently teach the wrong thing.”</blockquote></div></div></section>

      <section className="presentation-scene ai-landscape-scene" id="ai-landscape" data-scene="08"><img className="ai-scene-background" src={taskLandscapeArt} alt="" aria-hidden="true" /><div className="ai-landscape-scene__scrim" /><div className="scene-inner"><div className="scene-heading"><div><p className="eyebrow">Beyond this workflow</p><h2>Start with the task.<br /><em>Not the label “AI”.</em></h2></div><p>A scribe, image classifier and treatment recommendation are different interventions. Each has its own input, user, evidence, failure consequence and regulatory status.</p></div><div className="presentation-task">{taskLens.map(([letter, title, detail]) => <article key={letter}><span>{letter}</span><div><h3>{title}</h3><p>{detail}</p></div></article>)}</div><p className="evidence-caption">Apply TASK to a defined product, version, population and workflow. TASK is a teaching synthesis developed for this lesson—not a validated external standard.</p></div></section>

      <section className="presentation-scene ai-future-scene" id="ai-future" data-scene="09"><div className="scene-inner"><div className="scene-heading"><div><p className="eyebrow">Three horizons</p><h2>Possibilities,<br /><em>not promises.</em></h2></div><p>The further a system moves toward autonomous action, the higher the evidence and governance bar.</p></div><div className="ai-presentation-art-strip ai-presentation-art-strip--wide"><img src={futureArt} alt="A clinician and patient walking through branching future paths" /></div><div className="future-horizons">{Object.values(horizons).map((item) => <article key={item.label} className="is-visible"><span>{item.status}</span><h3>{item.label}</h3><ul>{item.items.slice(0, 3).map((use) => <li key={use}>{use}</li>)}</ul></article>)}</div><div className="future-questions"><span>What gets easier?</span><span>What new failure appears?</span><span>Who responds?</span><span>What human capability must remain?</span></div></div></section>

      <section className="presentation-scene ai-close-scene" id="ai-close" data-scene="10"><img className="ai-scene-background" src={futureArt} alt="" aria-hidden="true" /><div className="ai-scene-scrim ai-scene-scrim--strong" /><div className="scene-inner"><p className="eyebrow">Return to the question</p><h2>Will AI take<br /><em>our jobs?</em></h2><p className="close-answer">Probably not—but it will reshape our tasks.</p><div className="close-comparison"><article><Bot aria-hidden="true" /><h3>AI can generate</h3><p>Notes · lists · syntheses · drafts · learning resources</p></article><article><HeartHandshake aria-hidden="true" /><h3>Clinicians must provide</h3><p>Judgement · accountability · context · listening · reassurance · relationship</p></article></div><blockquote>Use AI for the work it can assist with. Keep hold of the work that makes care safe, trustworthy and human.</blockquote><AiStatusStamp dark /></div></section>
    </main>
    <footer className="presentation-footer"><a href="../">Open the learning guide <ArrowRight aria-hidden="true" /></a><span>Australia · Current as at 12 July 2026</span></footer>
  </>
}
