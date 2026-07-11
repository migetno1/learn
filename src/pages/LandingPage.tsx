import { ArrowDown, ArrowUpRight } from 'lucide-react'
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import { SiteHeader } from '../components/SiteHeader'
import { TopicCard } from '../components/TopicCard'
import { topics } from '../data/topics'
import vadHero from '../assets/vad-editorial-hero.webp'

export function LandingPage() {
  const reduceMotion = useReducedMotion()
  const { scrollYProgress } = useScroll()
  const heroY = useTransform(scrollYProgress, [0, 0.35], [0, reduceMotion ? 0 : 45])

  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <div className="scroll-progress" aria-hidden="true"><motion.span style={{ scaleX: scrollYProgress }} /></div>
      <SiteHeader />
      <main id="main">
        <section className="home-hero">
          <div className="home-hero__copy">
            <motion.p className="eyebrow" initial={reduceMotion ? false : { opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4 }}>
              Evidence · Context · Conversation
            </motion.p>
            <motion.h1 initial={reduceMotion ? false : { opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}>
              Medicine is learned in the <em>details.</em>
            </motion.h1>
            <motion.p className="home-hero__intro" initial={reduceMotion ? false : { opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, delay: 0.12 }}>
              Thoughtful, visual teaching for the decisions that shape Australian general practice.
            </motion.p>
            <motion.div className="hero-actions" initial={reduceMotion ? false : { opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4, delay: 0.25 }}>
              <a className="button button--primary" href="./topics/voluntary-assisted-dying/">
                Explore the first topic <ArrowUpRight size={18} aria-hidden="true" />
              </a>
              <a className="text-link" href="#topics">View the library <ArrowDown size={17} aria-hidden="true" /></a>
            </motion.div>
          </div>
          <motion.figure className="home-hero__art" style={{ y: heroY }}>
            <img src={vadHero} alt="Two abstract figures in conversation beside a branching path and open doorway" />
            <figcaption>
              <span>Featured topic</span>
              <strong>Voluntary Assisted Dying</strong>
              <span>01 / 04</span>
            </figcaption>
          </motion.figure>
        </section>

        <section className="manifesto" aria-label="Teaching philosophy">
          <p className="manifesto__label">The premise</p>
          <p>Not a textbook on a screen.</p>
          <p className="manifesto__muted">A place to see the clinical story unfold.</p>
        </section>

        <section className="topic-library" id="topics">
          <div className="section-heading">
            <div>
              <p className="eyebrow">The learning library</p>
              <h2>Begin with a question.</h2>
            </div>
            <p>Each topic is designed to work both as an independent learning experience and as a presentation in the room.</p>
          </div>
          <div className="topic-grid">
            {topics.map((topic, index) => <TopicCard key={topic.title} topic={topic} index={index} />)}
          </div>
        </section>

        <section className="closing-note">
          <p className="eyebrow">Built for the room—and after it</p>
          <h2>Teach it. Discuss it. Return to it.</h2>
          <div className="closing-note__rule" />
          <p>Designed for medical students, GP registrars, and practising GPs.</p>
        </section>
      </main>
      <footer className="site-footer"><span>Learn</span><span>Australian general practice education</span><span>© {new Date().getFullYear()}</span></footer>
    </>
  )
}
