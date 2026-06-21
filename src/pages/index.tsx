import React, { useState, useEffect, useRef } from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';

/* ─── Inline SVG icons ───────────────────────────── */

function ArrowRightIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

function ServerIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="8" x="2" y="2" rx="2" ry="2"/>
      <rect width="20" height="8" x="2" y="14" rx="2" ry="2"/>
      <line x1="6" x2="6.01" y1="6" y2="6"/>
      <line x1="6" x2="6.01" y1="18" y2="18"/>
    </svg>
  );
}

function PackageIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m7.5 4.27 9 5.15"/>
      <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/>
      <path d="m3.3 7 8.7 5 8.7-5"/>
      <path d="M12 22V12"/>
    </svg>
  );
}

function TerminalIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="4 17 10 11 4 5"/>
      <line x1="12" x2="20" y1="19" y2="19"/>
    </svg>
  );
}

function MonitorIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="14" x="2" y="3" rx="2"/>
      <line x1="8" x2="16" y1="21" y2="21"/>
      <line x1="12" x2="12" y1="17" y2="21"/>
    </svg>
  );
}

/* ─── Hero Section ───────────────────────────────── */

function HeroSection() {
  return (
    <header className={styles.heroBanner}>
      <div className={styles.heroInner}>
        <div className={styles.heroBadge}>
          <span className={styles.heroBadgeDot} />
          Event Sourcing
          <span className={styles.heroBadgeDot} />
          Open Source &middot; Apache 2.0
          <span className={styles.heroBadgeDot} />
          Self-hosted
        </div>

        <h1 className={styles.heroTitle}>
          Capture what happened.{' '}
          <span className={styles.factGradient}>Decide what it means later.</span>
        </h1>

        <p className={styles.heroSubtitle}>
          <span className={styles.heroSubtitleBold}>FactStore</span> is an
          open-source event store built for correctness and flexibility.
          Append immutable facts reliably, stream them in order, and build
          whatever you need on top.
        </p>

        <div className={styles.heroCta}>
          <Link className={styles.ctaPrimary} to="/docs/overview">
            Read the Docs
            <ArrowRightIcon />
          </Link>
          <Link
            className={styles.ctaSecondary}
            href="https://github.com/factstore-io/factstore"
          >
            View on GitHub
          </Link>
        </div>
      </div>
    </header>
  );
}

/* ─── Manifesto Section ──────────────────────────── */

function ManifestoSection() {
  return (
    <section className={styles.manifestoSection}>
      <div className={styles.manifestoInner}>
        <h2 className={styles.manifestoTitle}>Built on a simple idea.</h2>
        <div className={styles.manifestoBody}>
          <p className={styles.manifestoText}>
            Every meaningful thing that happens in your system is a fact. An
            order was placed. A payment was confirmed. A customer was
            onboarded. These things happened — and they don't un-happen.
            FactStore gives you a reliable, ordered record of them, without
            ever throwing that history away.
          </p>
          <p className={styles.manifestoText}>
            You can create multiple isolated logical stores to keep different
            parts of your system cleanly separated — similar to how you'd use
            separate schemas in a relational database. Within each store,
            FactStore gives you flexible consistency semantics: use traditional
            aggregate-based streams when they fit, define boundaries
            dynamically when they don't. The choice is yours.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ─── Live Demo Section ──────────────────────────── */

type FactColor = 'green' | 'blue' | 'amber' | 'purple' | 'teal';

interface DemoFact {
  id: string;
  type: string;
  subject: string;
  color: FactColor;
  timestamp: number;
}

const FACT_TEMPLATES: Array<{ type: string; subject: string; color: FactColor }> = [
  { type: 'CustomerOnboarded', subject: 'customer-42', color: 'green' },
  { type: 'OrderPlaced',       subject: 'order-17',    color: 'blue'  },
  { type: 'PaymentReceived',   subject: 'payment-9',   color: 'amber' },
  { type: 'OrderShipped',      subject: 'order-17',    color: 'purple'},
  { type: 'InventoryUpdated',  subject: 'product-3',   color: 'teal'  },
];

const MAX_VISIBLE_FACTS = 6;

function relativeTime(timestamp: number): string {
  const diff = Math.floor((Date.now() - timestamp) / 1000);
  if (diff < 2) return 'just now';
  if (diff < 60) return `${diff}s ago`;
  return `${Math.floor(diff / 60)}m ago`;
}

function LiveDemoSection() {
  const [facts, setFacts] = useState<DemoFact[]>([]);
  const [, setTick] = useState(0);
  const counterRef = useRef(3);

  const colorClass: Record<FactColor, string> = {
    green:  styles.colorGreen,
    blue:   styles.colorBlue,
    amber:  styles.colorAmber,
    purple: styles.colorPurple,
    teal:   styles.colorTeal,
  };

  useEffect(() => {
    const now = Date.now();
    setFacts([
      { id: 'seed-0', ...FACT_TEMPLATES[0], timestamp: now - 8000 },
      { id: 'seed-1', ...FACT_TEMPLATES[1], timestamp: now - 4500 },
      { id: 'seed-2', ...FACT_TEMPLATES[2], timestamp: now - 1500 },
    ]);

    const autoInterval = setInterval(() => {
      const n = counterRef.current++;
      const tpl = FACT_TEMPLATES[n % FACT_TEMPLATES.length];
      setFacts(prev =>
        [{ id: `f${n}`, ...tpl, timestamp: Date.now() }, ...prev].slice(0, MAX_VISIBLE_FACTS),
      );
    }, 2500);

    const tickInterval = setInterval(() => setTick(t => t + 1), 1000);

    return () => {
      clearInterval(autoInterval);
      clearInterval(tickInterval);
    };
  }, []);

  return (
    <section className={styles.demoSection}>
      <div className={styles.demoInner}>
        <div className={styles.demoLayout}>
          <div className={styles.demoText}>
            <h2 className={styles.demoTitle}>Run it yourself in under a minute</h2>
            <p className={styles.demoSubtitle}>
              FactStore ships with an in-memory implementation — no database
              or infrastructure required. Clone the repo and have a live
              server running in under a minute.
            </p>
            <Link className={styles.ctaPrimary} to="/docs/overview">
              Get started <ArrowRightIcon />
            </Link>
          </div>

          <div className={styles.demoCard}>
            <div className={styles.demoCardHeader}>
              <span className={styles.demoStoreName}>customers</span>
              <span className={styles.demoStreamBadge}>
                <span className={styles.demoStreamDot} />
                streaming
              </span>
            </div>

            <div className={styles.demoLog}>
              {facts.map(fact => (
                <div key={fact.id} className={styles.demoFactRow}>
                  <span className={`${styles.demoFactType} ${colorClass[fact.color]}`}>
                    {fact.type}
                  </span>
                  <span className={styles.demoFactSubject}>{fact.subject}</span>
                  <span className={styles.demoFactTime}>{relativeTime(fact.timestamp)}</span>
                </div>
              ))}
            </div>

            <div className={styles.demoCardFooter}>
              illustrated
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Why Section ────────────────────────────────── */

const reasons = [
  {
    text: 'Open Source',
    detail: 'Apache 2.0 licensed. Audit the code, self-host anywhere, no vendor lock-in.',
  },
  {
    text: 'Flexible consistency',
    detail:
      'Use traditional aggregate streams, Dynamic Consistency Boundaries, or mix both — FactStore does not decide for you.',
  },
  {
    text: 'Atomic and idempotent',
    detail:
      'Every append is transactional. Idempotency keys make retries safe in distributed systems.',
  },
  {
    text: 'Multiple logical stores',
    detail:
      'Create isolated stores to model domain boundaries — like separate schemas in a relational database.',
  },
  {
    text: 'Protocol-agnostic payloads',
    detail: 'Store facts as bytes. JSON, Avro, Protobuf — your choice.',
  },
];

function WhySection() {
  return (
    <section className={styles.whySection}>
      <div className={styles.whyInner}>
        <div className={styles.whyGrid}>
          {/* Left: text content */}
          <div className={styles.whyContent}>
            <h2 className={styles.whyTitle}>Designed for how you actually work</h2>
            <p className={styles.whyDescription}>
              FactStore gives you well-defined primitives — append, query,
              stream — and lets you decide how to use them. No prescribed
              patterns, no rigid boundaries. Just clear semantics and the
              flexibility to build the way your domain demands.
            </p>

            <ul className={styles.whyList}>
              {reasons.map((r) => (
                <li key={r.text} className={styles.whyListItem}>
                  <span className={styles.checkIcon}>
                    <CheckIcon />
                  </span>
                  <span className={styles.whyListText}>
                    <strong>{r.text}:</strong>{' '}
                    <span className={styles.whyListTextDetail}>{r.detail}</span>
                  </span>
                </li>
              ))}
            </ul>

            <div className={styles.whyCtaWrap}>
              <Link className={styles.ctaPrimary} to="/docs/overview">
                Get started
              </Link>
            </div>
          </div>

          {/* Right: terminal snippet */}
          <div className={styles.codePanel}>
            <div className={styles.codePanelHeader}>
              <div className={styles.codeDotRed} />
              <div className={styles.codeDotYellow} />
              <div className={styles.codeDotGreen} />
              <span className={styles.codePanelFilename}>terminal</span>
            </div>
            <pre className={styles.codePanelBody}>
              <code>
                <span className={styles.syntaxComment}>{'# Create a store for your customer domain\n'}</span>
                {'factstore store create customers\n\n'}
                <span className={styles.syntaxComment}>{'# Append a fact — tags are derived from the payload\n'}</span>
                {'factstore fact append \\\n'}
                {"  '{\"name\": \"Alice\", \"status\": \"active\"}' \\\n"}
                {'  --store customers \\\n'}
                {'  --subject customer-42 \\\n'}
                {'  --type CustomerOnboarded \\\n'}
                {'  --tag status=active\n\n'}
                <span className={styles.syntaxComment}>{'# Stream facts in real time\n'}</span>
                {'factstore fact subscribe \\\n'}
                {'  --store customers --from beginning\n'}
              </code>
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Ecosystem Section ──────────────────────────── */

type EcosystemItem = {
  title: string;
  description: string;
  icon: React.ReactNode;
};

const ecosystemItems: EcosystemItem[] = [
  {
    title: 'HTTP & gRPC Server',
    description:
      'A lightweight, cloud-native server exposing the full FactStore API over REST and gRPC. Deploy on-premise or in the cloud.',
    icon: <ServerIcon />,
  },
  {
    title: 'Kotlin Client SDK',
    description:
      'An idiomatic, coroutine-native client for JVM applications. Full API coverage with clean, type-safe abstractions.',
    icon: <PackageIcon />,
  },
  {
    title: 'Command-Line Interface',
    description:
      'A native binary for scripting, exploration, and local development. Manage stores and stream facts directly from your terminal.',
    icon: <TerminalIcon />,
  },
  {
    title: 'Web Explorer',
    description:
      'A browser-based UI for browsing stores, querying facts by subject or tags, and watching live fact streams in real time.',
    icon: <MonitorIcon />,
  },
];

function EcosystemSection() {
  return (
    <section className={styles.ecosystemSection}>
      <div className={styles.ecosystemInner}>
        <div className={styles.ecosystemHeader}>
          <h2 className={styles.ecosystemTitle}>A complete toolkit</h2>
          <p className={styles.ecosystemSubtitle}>
            FactStore is more than a library. It ships with everything you
            need to get up and running.
          </p>
        </div>

        <div className={styles.ecosystemGrid}>
          {ecosystemItems.map((item) => (
            <div key={item.title} className={styles.ecosystemCard}>
              <div className={styles.ecosystemIconWrap}>{item.icon}</div>
              <h3 className={styles.ecosystemCardTitle}>{item.title}</h3>
              <p className={styles.ecosystemCardDescription}>{item.description}</p>
            </div>
          ))}
        </div>

        <p className={styles.ecosystemNote}>
          Client SDKs for additional languages are on the roadmap. FactStore's
          gRPC API means you can integrate from any environment today.
        </p>
      </div>
    </section>
  );
}

/* ─── Final CTA Section ──────────────────────────── */

function CtaSection() {
  return (
    <section className={styles.ctaSection}>
      <div className={styles.ctaInner}>
        <h2 className={styles.ctaTitle}>Ready to explore FactStore?</h2>
        <p className={styles.ctaSubtitle}>
          Read the documentation, browse the source, or try it locally
          with the in-memory implementation — no infrastructure needed.
        </p>
        <div className={styles.ctaButtons}>
          <Link className={styles.ctaPrimary} to="/docs/overview">
            Read the Docs
            <ArrowRightIcon />
          </Link>
          <Link
            className={styles.ctaSecondary}
            href="https://github.com/factstore-io/factstore"
          >
            View on GitHub
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ─── Page Composition ───────────────────────────── */

export default function Home(): React.JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={siteConfig.title}
      description="An open-source event store built for correctness and flexibility."
    >
      <HeroSection />
      <main>
        <ManifestoSection />
        {/* <LiveDemoSection /> */}
        <HomepageFeatures />
        <WhySection />
        <EcosystemSection />
        <CtaSection />
      </main>
    </Layout>
  );
}
