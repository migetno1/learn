import { ArrowUpRight, Clock3 } from 'lucide-react'
import { motion, useReducedMotion } from 'framer-motion'
import type { Topic } from '../data/topics'

export function TopicCard({ topic, index }: { topic: Topic; index: number }) {
  const reduceMotion = useReducedMotion()
  const content = (
    <motion.article
      className={`topic-card topic-card--${topic.accent} ${topic.status === 'planned' ? 'topic-card--planned' : ''}`}
      initial={reduceMotion ? false : { opacity: 0, y: 24 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.45, delay: Math.min(index * 0.06, 0.18), ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="topic-card__number" aria-hidden="true">{String(index + 1).padStart(2, '0')}</div>
      <div>
        <p className="eyebrow">{topic.eyebrow}</p>
        <h3>{topic.title}</h3>
        <p className="topic-card__description">{topic.description}</p>
      </div>
      <div className="topic-card__meta">
        {topic.status === 'available' ? (
          <span>Open topic <ArrowUpRight size={18} aria-hidden="true" /></span>
        ) : (
          <span><Clock3 size={16} aria-hidden="true" /> In development</span>
        )}
      </div>
    </motion.article>
  )

  return topic.href ? <a className="topic-card-link" href={topic.href}>{content}</a> : content
}
