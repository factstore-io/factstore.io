import React from 'react';
import type { ReactNode } from 'react';
import styles from './styles.module.css';

/* ─── Inline SVG icons ──── */

function ShieldIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
    </svg>
  );
}

function SearchIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  );
}

function RadioIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4.9 19.1C1 15.2 1 8.8 4.9 4.9" />
      <path d="M7.8 16.2c-2.3-2.3-2.3-6.1 0-8.5" />
      <circle cx="12" cy="12" r="2" />
      <path d="M16.2 7.8c2.3 2.3 2.3 6.1 0 8.5" />
      <path d="M19.1 4.9C23 8.8 23 15.2 19.1 19.1" />
    </svg>
  );
}

/* ─── Feature data ───────────────────────────────── */

type FeatureItem = {
  title: string;
  description: ReactNode;
  icon: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Append with confidence',
    description: (
      <>
        Every append is atomic and idempotent. Express exactly the consistency
        you need per operation — from simple unconditional writes to
        multi-subject conditional appends. Safe to retry. No surprises.
      </>
    ),
    icon: <ShieldIcon />,
  },
  {
    title: 'Query the way your domain thinks',
    description: (
      <>
        Read facts by subject, filter by tags, or query by time range —
        forward or backward, with or without limits. Access patterns that
        fit your domain, not the other way around.
      </>
    ),
    icon: <SearchIcon />,
  },
  {
    title: 'Stream in real time',
    description: (
      <>
        Consume facts as an ordered, resumable stream. Start from the
        beginning, from the end, or pick up exactly where you left off.
        Built for projections, integrations, and event-driven workflows.
      </>
    ),
    icon: <RadioIcon />,
  },
];

/* ─── Feature card component ─────────────────────── */

function Feature({ title, description, icon }: FeatureItem) {
  return (
    <div className={styles.featureCard}>
      <div className={styles.featureIconWrap}>{icon}</div>
      <h3 className={styles.featureCardTitle}>{title}</h3>
      <p className={styles.featureCardDescription}>{description}</p>
    </div>
  );
}

/* ─── Features section ───────────────────────────── */

export default function HomepageFeatures(): React.JSX.Element {
  return (
    <section className={styles.features}>
      <div className={styles.featuresInner}>
        <div className={styles.featuresHeader}>
          <h2 className={styles.featuresTitle}>Core Capabilities</h2>
          <p className={styles.featuresSubtitle}>
            Three primitives. Endless possibilities.
          </p>
        </div>

        <div className={styles.featuresGrid}>
          {FeatureList.map((props) => (
            <Feature key={props.title} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
