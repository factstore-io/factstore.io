import React from 'react';
import type { ReactNode } from 'react';
import styles from './styles.module.css';

/* ─── Inline SVG icons ──── */

function LayersIcon() {
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
      <path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z" />
      <path d="m22.54 12.43-1.96-.89-7.75 3.53a2 2 0 0 1-1.66 0l-7.75-3.53-1.96.89a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.84Z" />
      <path d="m22.54 16.43-1.96-.89-7.75 3.53a2 2 0 0 1-1.66 0l-7.75-3.53-1.96.89a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.84Z" />
    </svg>
  );
}

function ZapIcon() {
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
      <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z" />
    </svg>
  );
}

function Code2Icon() {
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
      <path d="m18 16 4-4-4-4" />
      <path d="m6 8-4 4 4 4" />
      <path d="m14.5 4-5 16" />
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
    title: 'Event Sourcing and Streaming',
    description: (
      <>
        FactStore supports traditional aggregate or stream-based event sourcing
        as well as more flexible approaches to enforce consistency, such as
        dynamic consistency boundaries (DCB). FactStore gives you the flexibility
        to use both.
      </>
    ),
    icon: <LayersIcon />,
  },
  {
    title: 'Scalable and Performant',
    description: (
      <>
        Adapt FactStore to the workload you need. Whether you need a FactStore
        for local development and experimentation, or a production-ready,
        redundant storage, FactStore's flexible architecture lets you choose.
      </>
    ),
    icon: <ZapIcon />,
  },
  {
    title: 'Open Source',
    description: (
      <>
        The core of FactStore is fully open source and licensed under Apache 2.0.
        Deploy FactStore wherever you like, on-premise or in the cloud. There is
        no vendor lock-in. Enterprise features and support are available for
        advanced use cases.
      </>
    ),
    icon: <Code2Icon />,
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
            FactStore provides the backbone for your event sourcing
            infrastructure.
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
