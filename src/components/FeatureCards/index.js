import React from 'react';
import styles from './styles.module.css';

const features = [
  {
    icon: '◉',
    title: 'Federate',
    text: 'Place authority where the knowledge and capability live.',
  },
  {
    icon: '◎',
    title: 'Align',
    text: 'Create shared purpose, principles and lightweight guardrails.',
  },
  {
    icon: '✦',
    title: 'Augment',
    text: 'Design AI as a co-worker that strengthens human capability.',
  },
  {
    icon: '↗',
    title: 'Evolve',
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
          </article>
        ))}
      </div>
    </section>
  );
}
