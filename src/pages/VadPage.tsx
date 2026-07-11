import { ArrowLeft, ArrowRight, Brain, Clock3, MapPin, Scale, ShieldCheck, Stethoscope } from 'lucide-react'
import { useEffect } from 'react'
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import { SiteHeader } from '../components/SiteHeader'
import { CitationLinks, JurisdictionStamp, SourceRegister, VadModeNav } from '../components/VadTeaching'
import {
  bathurstPathway,
  capacityElements,
  eligibilityCriteria,
  firstRequestDuties,
  misconceptions,
  vadMeta,
} from '../data/vadContent'
import vadHero from '../assets/vad-editorial-hero.webp'

const contents = [
  ['legal-frame', 'Legal frame'],
  ['eligibility', 'Eligibility'],
  ['first-request', 'First request'],
  ['capacity', 'Capacity'],
  ['gp-role', 'GP boundaries'],
  ['adjacent-care', 'Adjacent care'],
  ['misconceptions', 'Misconceptions'],
  ['bathurst', 'Bathurst pathway'],
  ['sources', 'Sources'],
] as const

export function VadPage() {
  const reduceMotion = useReducedMotion()
  const { scrollYProgress } = useScroll()
  const imageY = useTransform(scrollYProgress, [0, 0.18], [0, reduceMotion ? 0 : 54])

  useEffect(() => {
    const targets = Array.from(document.querySelectorAll<HTMLElement>([
      '.learning-section > header',
      '.learning-section .lead',
      '.legal-principle',
      '.qualification-note',
      '.criteria-grid article',
      '.request-contrast article',
      '.duty-timeline article',
      '.legal-detail',
      '.capacity-intro',
      '.capacity-list li',
      '.case-law-grid article',
      '.role-columns article',
      '.adjacent-grid article',
      '.misconception-list details',
      '.bathurst-intro',
      '.pathway-list li',
      '.contact-cards a',
      '.source-register a',
      '.learning-cta > *',
    ].join(',')))

    const staggerGroups = document.querySelectorAll<HTMLElement>('.criteria-grid, .duty-timeline, .capacity-list, .case-law-grid, .role-columns, .adjacent-grid, .misconception-list, .pathway-list, .source-register')
    staggerGroups.forEach((group) => Array.from(group.children).forEach((child, index) => {
      if (child instanceof HTMLElement) child.style.setProperty('--reveal-delay', `${Math.min(index, 5) * 110}ms`)
    }))

    targets.forEach((target) => target.classList.add('learning-reveal'))
    if (reduceMotion) {
      targets.forEach((target) => target.classList.add('is-visible'))
      return () => targets.forEach((target) => target.classList.remove('learning-reveal', 'is-visible'))
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => entry.target.classList.toggle('is-visible', entry.isIntersecting))
    }, { threshold: 0.1, rootMargin: '0px 0px -8% 0px' })
    const frame = requestAnimationFrame(() => targets.forEach((target) => observer.observe(target)))

    return () => {
      cancelAnimationFrame(frame)
      observer.disconnect()
      targets.forEach((target) => target.classList.remove('learning-reveal', 'is-visible'))
    }
  }, [reduceMotion])

  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <div className="scroll-progress" aria-hidden="true"><motion.span style={{ scaleX: scrollYProgress }} /></div>
      <SiteHeader homeHref="../../" compact />
      <main id="main" className="vad-learn-page">
        <section className="learn-hero">
          <div className="learn-hero__topline">
            <a className="back-link" href="../../"><ArrowLeft size={17} aria-hidden="true" /> All topics</a>
            <VadModeNav mode="learn" />
          </div>
          <div className="learn-hero__grid">
            <motion.div className="learn-hero__copy" initial={reduceMotion ? false : { opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}>
              <p className="eyebrow">NSW learning guide · Ethics, law & clinical practice</p>
              <h1>Voluntary<br /><em>Assisted Dying</em></h1>
              <p>A source-linked guide to eligibility, the first request, capacity and the practical role of a GP in Bathurst.</p>
              <JurisdictionStamp />
            </motion.div>
            <motion.figure className="learn-hero__art" style={{ y: imageY }}>
              <img src={vadHero} width="1693" height="929" alt="Two abstract figures in conversation beside a branching path and open doorway" />
            </motion.figure>
          </div>
        </section>

        <section className="learning-disclaimer" aria-label="Scope note">
          <strong>Educational scope</strong>
          <p>This guide explains NSW law and teaching interpretation. It is not individual medical or legal advice and must not be used to determine whether a particular person is eligible.</p>
        </section>

        <div className="learning-layout">
          <nav className="contents-nav" aria-label="On this page">
            <p>On this page</p>
            {contents.map(([id, label], index) => <a key={id} href={`#${id}`}><span>{String(index + 1).padStart(2, '0')}</span>{label}</a>)}
          </nav>

          <div className="learning-content">
            <section className="learning-section" id="legal-frame">
              <header><span>01</span><div><p className="eyebrow">Start with jurisdiction</p><h2>The legal frame</h2></div></header>
              <div className="learning-prose">
                <p className="lead">In NSW, VAD has been a lawful end-of-life option for eligible adults since 28 November 2023 under the <em>{vadMeta.act}</em>. The statutory review now underway does not change the law unless amendments are enacted. <CitationLinks sources={['S1', 'S12']} /></p>
                <div className="legal-principle"><Scale aria-hidden="true" /><div><strong>Do not teach “the Australian VAD law”.</strong><p>Eligibility, practitioner duties and service pathways are jurisdiction-specific. Every legal rule on this page concerns NSW.</p></div></div>
                <p>Lawful VAD is not suicide for the purposes of NSW law. That statutory characterisation does not remove the need to clarify ambiguous distress or assess acute safety concerns through ordinary clinical care. <CitationLinks sources={['S1', 'S2', 'S9']} /></p>
              </div>
            </section>

            <section className="learning-section" id="eligibility">
              <header><span>02</span><div><p className="eyebrow">Every criterion matters</p><h2>Eligibility</h2></div></header>
              <div className="learning-prose">
                <p className="lead">Eligibility is conjunctive: an authorised coordinating practitioner and an independent consulting practitioner must each be satisfied that every criterion is met. A preliminary view from a treating GP is not a formal eligibility assessment. <CitationLinks sources={['S1', 'S2']} /></p>
                <div className="criteria-grid">
                  {eligibilityCriteria.map(([title, detail], index) => <article key={title}><span>{index + 1}</span><h3>{title}</h3><p>{detail}</p></article>)}
                </div>
                <div className="qualification-note"><strong>Diagnosis is not the test.</strong><p>A person is not eligible merely because they have disability, dementia or a mental health impairment. Nor does one of those diagnoses automatically exclude them. The person must independently meet every criterion. <CitationLinks sources={['S1']} /></p></div>
              </div>
            </section>

            <section className="learning-section" id="first-request">
              <header><span>03</span><div><p className="eyebrow">The trigger point</p><h2>Receiving a first request</h2></div></header>
              <div className="learning-prose">
                <p className="lead">A first request is the patient’s clear and unambiguous request to a medical practitioner for access to VAD, made during a medical consultation. It may be verbal or communicated another way. General enquiries are not first requests. <CitationLinks sources={['S1', 'S6']} /></p>
                <div className="request-contrast">
                  <article><span>Explore</span><h3>“I’m tired of all this.”</h3><p>Clarify meaning, distress, safety and what the patient is asking.</p></article>
                  <ArrowRight aria-hidden="true" />
                  <article><span>Legal trigger</span><h3>“I want to request voluntary assisted dying.”</h3><p>Recognise the first request and begin the statutory response.</p></article>
                </div>
                <div className="duty-timeline">
                  {firstRequestDuties.map((duty) => <article key={duty.title}><div><Clock3 aria-hidden="true" /><span>{duty.timing}</span></div><div><p className="section-tag">{duty.section}</p><h3>{duty.title}</h3><p>{duty.detail}</p></div></article>)}
                </div>
                <details className="legal-detail"><summary>Conscientious objection: the careful distinction</summary><div><p>The Act permits a registered health practitioner to refuse participation. A medical practitioner who receives a first request must still refuse immediately, record the request and refusal, and notify the Board. The Act does not impose the approved-information duty where refusal is because of conscientious objection. <CitationLinks sources={['S1', 'S4']} /></p><p>Ordinary services must not be withdrawn because the patient requested VAD. Professional standards also require doctors not to use an objection to impede access to lawful treatment. Offering the Care Navigator pathway is practice guidance supporting continuity; it is not an express statutory duty to make a named clinician-to-clinician referral. <CitationLinks sources={['S1', 'S4', 'S10']} /></p></div></details>
              </div>
            </section>

            <section className="learning-section learning-section--ink" id="capacity">
              <header><span>04</span><div><p className="eyebrow">Decision-specific, not diagnosis-specific</p><h2>Capacity</h2></div></header>
              <div className="learning-prose">
                <div className="capacity-intro"><Brain size={44} strokeWidth={1.4} aria-hidden="true" /><p>The Act presumes VAD decision-making capacity unless the patient is shown not to have it. Capacity concerns the particular VAD request or decision at the relevant time. <CitationLinks sources={['S1']} /></p></div>
                <ol className="capacity-list">{capacityElements.map((item, index) => <li key={item}><span>{index + 1}</span>{item}</li>)}</ol>
                <div className="case-law-grid">
                  <article><h3>Dementia</h3><p>Dementia is not itself proof of incapacity. Assess the statutory abilities, support communication and consider fluctuation. Permanent loss of VAD-specific capacity during the process ends eligibility.</p></article>
                  <article><h3>Mental illness</h3><p>Mental illness neither automatically establishes incapacity nor supplies the qualifying terminal condition. Assess its actual effect on voluntariness, cognition, weighing and communication.</p></article>
                  <article><h3>Referral</h3><p>If an authorised assessor cannot decide a relevant eligibility matter, the Act provides for referral to an appropriately skilled practitioner or other person for an opinion.</p></article>
                </div>
                <p className="source-line">Legal basis: ss 6, 16, 26–27. <CitationLinks sources={['S1', 'S2']} /></p>
              </div>
            </section>

            <section className="learning-section" id="gp-role">
              <header><span>05</span><div><p className="eyebrow">Role and boundaries</p><h2>What a GP may, must and must not do</h2></div></header>
              <div className="learning-prose role-columns">
                <article><Stethoscope aria-hidden="true" /><h3>May</h3><ul><li>Listen, clarify and answer patient-initiated questions within competence.</li><li>Initiate discussion only with the treatment, outcomes and palliative-care information required by s 10.</li><li>Continue ordinary GP care without becoming an authorised VAD practitioner.</li><li>Offer a warm connection to navigation services with consent.</li></ul></article>
                <article><ShieldCheck aria-hidden="true" /><h3>Must</h3><ul><li>Recognise and respond to a first request.</li><li>Meet the communication, documentation and Board-notification duties.</li><li>Maintain ordinary services and factual records.</li><li>Work within competence and authorised statutory roles.</li></ul></article>
                <article><Scale aria-hidden="true" /><h3>Must not</h3><ul><li>Treat a family member’s request as the patient’s request.</li><li>Pressure or induce a patient to request or continue VAD.</li><li>Present a preliminary opinion as a formal eligibility decision.</li><li>Provide restricted substance or administration information outside authorised guidance.</li></ul></article>
                <p className="source-line">Sources <CitationLinks sources={['S1', 'S2', 'S4', 'S10']} /></p>
              </div>
            </section>

            <section className="learning-section" id="adjacent-care">
              <header><span>06</span><div><p className="eyebrow">Parallel, not competing</p><h2>Adjacent areas of care</h2></div></header>
              <div className="learning-prose adjacent-grid">
                <article><h3>Palliative care</h3><p>VAD is distinct from palliative care and may coexist with it. Access to treatment, symptom relief and palliative care continues. <CitationLinks sources={['S1', 'S2', 'S11', 'S13']} /></p></article>
                <article><h3>Advance care planning</h3><p>An advance care directive cannot request or authorise VAD after loss of capacity. It remains valuable for other treatment decisions. <CitationLinks sources={['S1', 'S13']} /></p></article>
                <article><h3>Suicide-risk assessment</h3><p>A lawful VAD request is not suicide under NSW law. Ambiguous statements, a plan outside the statutory process or immediate danger still require ordinary clinical safety assessment. <CitationLinks sources={['S1', 'S2', 'S9']} /></p></article>
              </div>
            </section>

            <section className="learning-section" id="misconceptions">
              <header><span>07</span><div><p className="eyebrow">Discussion prompts</p><h2>Misconceptions</h2></div></header>
              <div className="learning-prose misconception-list">
                {misconceptions.map((item) => <details key={item.claim}><summary><span>{item.claim}</span><strong>Reveal answer</strong></summary><div><p className="verdict">{item.verdict}</p><p>{item.correction} <CitationLinks sources={item.sources} /></p></div></details>)}
              </div>
            </section>

            <section className="learning-section" id="bathurst">
              <header><span>08</span><div><p className="eyebrow">Local navigation</p><h2>The Bathurst pathway</h2></div></header>
              <div className="learning-prose">
                <div className="bathurst-intro"><MapPin aria-hidden="true" /><p>Bathurst sits within Western NSW Local Health District. The verified public pathway is service-based; no public practitioner list should be inferred or reproduced.</p></div>
                <ol className="pathway-list">{bathurstPathway.map((step, index) => <li key={step.title}><span>{index + 1}</span><div><h3>{step.title}</h3><p>{step.detail}</p></div></li>)}</ol>
                <div className="contact-cards"><a href="tel:1800684283"><span>Western NSW LHD</span><strong>1800 684 283</strong></a><a href="tel:1300802133"><span>NSW Care Navigator</span><strong>1300 802 133</strong></a></div>
                <p>IPTAAS may assist with eligible VAD-related travel and accommodation. Service activity shows the pathway has been used by Bathurst residents, but that does not establish current practitioner availability or predict eligibility or waiting time. <CitationLinks sources={['S8', 'S7', 'S11', 'S14']} /></p>
              </div>
            </section>

            <section className="learning-section" id="sources">
              <header><span>09</span><div><p className="eyebrow">Trace the authority</p><h2>Sources and review</h2></div></header>
              <div className="learning-prose"><p className="lead">The current Act controls. NSW Health materials explain implementation; professional sources inform clinical practice but do not replace legislation.</p><SourceRegister /></div>
            </section>
          </div>
        </div>

        <section className="learning-cta"><p className="eyebrow">Teach the legal decisions</p><h2>Ready for the room?</h2><p>Open the vignette-led presentation. The final misconception discussion can be omitted when time is short.</p><a className="button button--primary" href="./presentation/">Present this topic <ArrowRight size={18} aria-hidden="true" /></a></section>
      </main>
      <footer className="site-footer"><span className="footer-brand">Dr Alexander Ho</span><span>Voluntary Assisted Dying · NSW learning guide</span><span>Current as at {vadMeta.currentAsAt}</span></footer>
    </>
  )
}
