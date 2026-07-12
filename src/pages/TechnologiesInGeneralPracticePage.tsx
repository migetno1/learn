import { ArrowLeft, ArrowRight, BookOpenCheck, CircleAlert, Eye, HeartHandshake, Languages, MapPin, ShieldCheck, Smartphone, UserRoundCheck, WifiOff } from 'lucide-react'
import { useEffect, useRef } from 'react'
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import { SiteHeader } from '../components/SiteHeader'
import { Maturity, TechCitations, TechnologyModeNav, TechnologySourceRegister, TechnologyStatus } from '../components/TechnologyTeaching'
import { safetyQuestions, technologyChapters, technologyJourney } from '../data/technologyContent'
import heroArt from '../assets/ai-cerebral-hero.webp'
import michaelArt from '../assets/ai-consultation.webp'
import verificationArt from '../assets/ai-verification.webp'
import monitoringArt from '../assets/ai-future-horizons.webp'
import learningArt from '../assets/ai-education-workflow.webp'
import landscapeArt from '../assets/ai-task-landscape.webp'

const artById: Record<string, string | undefined> = {
  scribe: verificationArt,
  evidence: landscapeArt,
  monitor: monitoringArt,
  retina: landscapeArt,
}

function ChapterHeader({ number, eyebrow, children }: { number: string; eyebrow: string; children: React.ReactNode }) {
  return <header><span>{number}</span><div><p className="eyebrow">{eyebrow}</p><h2>{children}</h2></div></header>
}

export function TechnologiesInGeneralPracticePage() {
  const reduceMotion = useReducedMotion()
  const { scrollYProgress } = useScroll()
  const hero = useRef<HTMLElement>(null)
  const { scrollYProgress: heroProgress } = useScroll({ target: hero, offset: ['start start', 'end start'] })
  const heroY = useTransform(heroProgress, [0, 1], [0, reduceMotion ? 0 : 72])

  useEffect(() => {
    const targets = Array.from(document.querySelectorAll<HTMLElement>('.tech-learn-page .learning-section > header, .tech-learn-page .learning-prose > *, .tech-learn-page .learning-cta > *'))
    targets.forEach((target, index) => {
      target.classList.add('tech-reveal')
      target.style.setProperty('--tech-delay', `${Math.min(index % 4, 3) * 60}ms`)
    })
    if (reduceMotion) {
      targets.forEach((target) => target.classList.add('is-visible'))
      return () => targets.forEach((target) => target.classList.remove('tech-reveal', 'is-visible'))
    }
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => entry.target.classList.toggle('is-visible', entry.isIntersecting)), { threshold: .1, rootMargin: '0px 0px -10% 0px' })
    targets.forEach((target) => observer.observe(target))
    return () => observer.disconnect()
  }, [reduceMotion])

  return <>
    <a className="skip-link" href="#main">Skip to content</a>
    <div className="scroll-progress" aria-hidden="true"><motion.span style={{ scaleX: scrollYProgress }} /></div>
    <SiteHeader homeHref="../../" compact />
    <main id="main" className="tech-learn-page">
      <section className="tech-hero" ref={hero}>
        <motion.img src={heroArt} alt="" aria-hidden="true" style={{ y: heroY }} />
        <div className="tech-hero__scrim" />
        <div className="learn-hero__topline"><a className="back-link" href="../../"><ArrowLeft size={17} aria-hidden="true" /> All topics</a><TechnologyModeNav mode="learn" /></div>
        <div className="tech-hero__copy"><p className="eyebrow">Australian general practice · Patient journey</p><h1>Technologies in<br /><em>General Practice</em></h1><p>Follow Michael before, during and after one consultation—and ask when technology makes care safer, clearer or easier to reach.</p><TechnologyStatus dark /></div>
      </section>

      <section className="learning-disclaimer" aria-label="Scope and review note"><strong>Educational draft</strong><p>Current Australian sources were checked on 12 July 2026. Clinical, legal/privacy, consumer and Aboriginal and Torres Strait Islander review remain required. This is not individual medical, legal, privacy, procurement or cyber-security advice.</p></section>

      <div className="learning-layout">
        <nav className="contents-nav" aria-label="On this page"><p>Michael’s care journey</p>{technologyChapters.map(([id, label], index) => <a key={id} href={`#${id}`}><span>{String(index + 1).padStart(2, '0')}</span>{label}</a>)}</nav>
        <div className="learning-content">
          <section className="learning-section tech-michael" id="michael"><ChapterHeader number="01" eyebrow="Start with the person">Meet Michael—before the technology</ChapterHeader><div className="learning-prose">
            <figure className="tech-editorial-art"><img src={michaelArt} alt="Editorial illustration of Michael speaking with his GP" /></figure>
            <div className="tech-case-grid"><article><span>Fictional patient</span><h3>Michael, 64</h3><p>A self-employed school-bus driver who lives outside town. He books for worsening urinary frequency and nocturia, with known BPH.</p></article><article><span>The broader story</span><h3>What does not fit neatly?</h3><p>Thirst, fatigue, disrupted sleep and concern about staying alert on the morning route. Ordinary assessment later identifies type 2 diabetes; no AI makes the diagnosis.</p></article></div>
            <blockquote>“I need a plan I can understand, and I cannot keep coming back into town for every small thing.”</blockquote>
            <div className="tech-preferences"><p><MapPin aria-hidden="true" /><span><strong>Access</strong> Travel, work timing and patchy connectivity matter.</span></p><p><BookOpenCheck aria-hidden="true" /><span><strong>Communication</strong> Michael prefers concise written steps, then teach-back.</span></p><p><UserRoundCheck aria-hidden="true" /><span><strong>Choice</strong> He can refuse a tool, correct data and choose a non-digital path.</span></p><p><HeartHandshake aria-hidden="true" /><span><strong>Relationship</strong> Technology must support—not displace—the conversation.</span></p></div>
          </div></section>

          {technologyJourney.map((item) => <section className={`learning-section tech-journey-section tech-journey-section--${item.tone}`} id={item.id} key={item.id}><ChapterHeader number={item.number} eyebrow={item.phase}>{item.title}</ChapterHeader><div className="learning-prose">
            <div className="tech-tool-heading"><div><p className="section-tag">Technology category</p><h3>{item.tool}</h3></div><Maturity tone={item.tone}>{item.maturity}</Maturity></div>
            {artById[item.id] && <figure className={`tech-editorial-art tech-editorial-art--${item.id}`}><img src={artById[item.id]} alt="" aria-hidden="true" /></figure>}
            <div className="tech-mechanism"><article><span>How it works</span><p>{item.how}</p></article><article><span>Workflow</span><p>{item.workflow}</p></article><article><span>Patient benefit</span><p>{item.benefit}</p></article></div>
            <div className="tech-michael-thread"><strong>For Michael</strong><p>{item.michael}</p></div>
            <div className="tech-evidence-boundary"><article><ShieldCheck aria-hidden="true" /><div><h3>Evidence and maturity</h3><p>{item.evidence} <TechCitations sources={[...item.sources]} /></p></div></article><article><CircleAlert aria-hidden="true" /><div><h3>Failure to anticipate</h3><p>{item.failure}</p></div></article><article><UserRoundCheck aria-hidden="true" /><div><h3>Clinician oversight</h3><p>{item.oversight}</p></div></article></div>
          </div></section>)}

          <section className="learning-section tech-appendix" id="appendix"><ChapterHeader number="12" eyebrow="Clinician-learning appendix">How the GP prepares to care better</ChapterHeader><div className="learning-prose">
            <figure className="tech-editorial-art"><img src={learningArt} alt="A clinician-educator moving from verified sources to learning resources" /></figure>
            <p className="lead">These workflows may improve the GP’s preparation, but their patient benefit is indirect. They belong after Michael’s care journey—not at its centre.</p>
            <div className="tech-appendix-grid"><article><h3>Diagnostic brainstorming</h3><p>Reason independently first. Use a fictional or de-identified prompt to expose omissions, then verify against authoritative sources. Public chatbots are not validated patient-specific decision support.</p><Maturity tone="boundary">Critical appraisal case</Maturity><TechCitations sources={['G2', 'A4']} /></article><article><h3>AI-assisted Anki cards</h3><p>Give the model selected, non-identifiable source material. Keep one learning point per card, check every qualifier and delete plausible clutter.</p><Maturity tone="boundary">Education only · weak direct evidence</Maturity><TechCitations sources={['K1']} /></article></div>
          </div></section>

          <section className="learning-section tech-safety" id="safety"><ChapterHeader number="—" eyebrow="Carry this across every chapter">Before an output changes care</ChapterHeader><div className="learning-prose"><div className="tech-safety-grid">{safetyQuestions.map(([title, question]) => <article key={title}><span>{title}</span><p>{question}</p></article>)}</div><div className="tech-language-boundary"><Languages aria-hidden="true" /><div><h3>Language is a safety issue</h3><p>Use professional interpreters for complex clinical conversations and consent when needed. AI may support source-grounded drafting, but is not a safe substitute for an interpreter. <TechCitations sources={['L1', 'L2']} /></p></div></div><div className="tech-language-boundary"><WifiOff aria-hidden="true" /><div><h3>A fallback is part of the intervention</h3><p>If the tool, device or connection fails, Michael still needs a clear way to receive care.</p></div></div></div></section>

          <section className="learning-section" id="sources"><ChapterHeader number="13" eyebrow="Trace the authority">Sources and review</ChapterHeader><div className="learning-prose"><p className="lead">This guide uses a targeted rapid review, not a systematic review. Product pages describe functions only; they do not establish patient benefit.</p><TechnologySourceRegister /></div></section>
        </div>
      </div>
      <section className="learning-cta"><p className="eyebrow">One patient · twelve recommendations</p><h2>Ready for the room?</h2><p>Open the presentation and follow Michael’s journey with visible progress, keyboard navigation and fullscreen support.</p><a className="button button--primary" href="./presentation/">Present this topic <ArrowRight size={18} aria-hidden="true" /></a></section>
    </main>
    <footer className="site-footer"><span className="footer-brand">Dr Alexander Ho</span><span>Technologies in General Practice · Australian learning guide</span><span>Current as at 12 July 2026</span></footer>
  </>
}
