import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import FeatureCards from '../components/FeatureCards';
import styles from './index.module.css';

export default function Home() {
  return (
    <Layout
      title="Federate your organization. Amplify it with AI."
      description="YottaDots is an open framework for federated organizations and AI-enabled work."
    >
      <main>
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <div className={styles.eyebrow}>
              OPEN ORGANIZATION DESIGN
            </div>

            <h1>
              Federate your organization.
              <span> Amplify it with AI.</span>
            </h1>

            <p className={styles.heroText}>
              YottaDots is an open framework for organizations that want
              autonomy without fragmentation — and AI without losing
              human accountability.
            </p>

            <div className={styles.heroButtons}>
              <Link
                className={styles.primaryButton}
                to="/docs/why"
              >
                Explore YottaDots →
              </Link>

              <Link
                className={styles.secondaryButton}
                to="/docs/community/contribute"
              >
                Join the community
              </Link>
            </div>

            <div className={styles.openBadge}>
              ● Open knowledge · Community driven · Free to use
            </div>
          </div>
        </section>

        <section className={styles.intro}>
          <div className={styles.sectionLabel}>
            WHY YOTTADOTS
          </div>

          <h2>
            Organizations need a new operating model.
          </h2>

          <p>
            Hierarchies struggle with speed. Full decentralization
            struggles with alignment. AI changes the economics of
            coordination altogether.
          </p>

          <p>
            YottaDots explores the space in between.
          </p>
        </section>

        <FeatureCards />

        <section className={styles.openSection}>
          <div>
            <div className={styles.sectionLabel}>
              POWER OF THE COMMUNITY
            </div>

            <h2>
              Open by design.
            </h2>

            <p>
              The YottaDots method belongs in the open.
              Principles, patterns and canvases can be used,
              challenged and improved by everyone.
            </p>
          </div>

          <div className={styles.openActions}>
            <Link
              to="/docs/method"
              className={styles.primaryButton}
            >
              Explore the method
            </Link>

            <Link
              to="/docs/community/contribute"
              className={styles.secondaryButton}
            >
              Contribute
            </Link>
          </div>
        </section>

        <section className={styles.finalCall}>
          <div className={styles.dotCluster}>
            <span />
            <span />
            <span />
          </div>

          <h2>
            Better organizations are built together.
          </h2>

          <p>
            Use YottaDots. Challenge it. Improve it.
            Share what you learn.
          </p>

          <Link
            to="/docs/why/manifesto"
            className={styles.primaryButton}
          >
            Read the manifesto
          </Link>
        </section>
      </main>
    </Layout>
  );
}
