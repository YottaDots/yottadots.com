import React from 'react';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

const features = [
  {
    icon: '◉',
    title: 'Federate',
    to: '/docs/method/principles/federate',
    text: 'The centre decides the what. Value streams decide the how.',
  },
  {
    icon: '◎',
    title: 'Align',
    to: '/docs/method/principles/align',
    text: 'Shared goals, shaped with the value streams. Lightweight guardrails.',
  },
  {
    icon: '✦',
    title: 'Augment',
    to: '/docs/method/principles/augment',
    text: 'Design AI as a co-worker that strengthens human capability.',
  },
  {
    icon: '↗',
    title: 'Evolve',
    to: '/docs/method/principles/evolve',
    text: 'Build an organization that continuously learns and adapts.',
  },
];

export default function FeatureCards() {
  return (
    <section className={styles.wrapper}>
      <div className={styles.grid}>
        {features.map((feature) => (
          <article
            key={feature.title}
            className={styles.card}
          >
            <div className={styles.icon}>
              {feature.icon}
            </div>

            <h3>{feature.title}</h3>

            <p>{feature.text}</p>

            <Link to={feature.to}>Read more →</Link>
          </article>
        ))}
      </div>
    </section>
  );
}
