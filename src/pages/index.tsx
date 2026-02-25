import React from 'react';
import clsx from 'clsx';
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

/* ─── Hero Section ───────────────────────────────── */

function HeroSection() {
  return (
    <header className={styles.heroBanner}>
      <div className={styles.heroInner}>
        {/* Badge */}
        <div className={styles.heroBadge}>
          <span className={styles.heroBadgeDot} />
          Open Source &middot; Apache 2.0
        </div>

        <h1 className={styles.heroTitle}>
          Treat your{' '}
          <span className={styles.factGradient}>Business Facts</span>{' '}
          with the respect they deserve.
        </h1>

        <p className={styles.heroSubtitle}>
          <span className={styles.heroSubtitleBold}>FactStore</span> is an
          open-source, flexible, and high-performance database for event sourcing
          at scale. Store, retrieve, and stream your facts with ease.
        </p>

        <div className={styles.heroCta}>
          <Link className={styles.ctaPrimary} to="/docs/overview">
            Read the Docs
            <ArrowRightIcon />
          </Link>
          <Link
            className={styles.ctaSecondary}
            href="https://github.com/factstore-io"
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
        <h2 className={styles.manifestoTitle}>
          A Manifesto for Data Integrity
        </h2>
        <div className={styles.manifestoBody}>
          <p className={styles.manifestoText}>
            Software systems are built on decisions, but they are sustained by
            facts. Traditional databases force you to structure your world before
            you understand it. FactStore comes from a different angle and is
            designed with event sourcing and flexibility in mind.
          </p>
          <p className={styles.manifestoText}>
            Event sourcing should be easy and accessible to everyone, with the
            least amount of patterns needed! FactStore is an attempt to provide
            this flexibility and freedom so that you can design your applications
            in a way that closely reflects how your business operates, without the
            additional technical overhead.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ─── Why Section ────────────────────────────────── */

const reasons = [
  { text: 'Open Source Transparency', detail: 'Audit every line of code.' },
  { text: 'Clear and simple APIs', detail: 'FactStore is well-documented and tested.' },
  {
    text: 'Flexible event sourcing',
    detail: 'Support for stream-based and dynamic consistency.',
  },
  {
    text: 'Atomic Operations',
    detail: 'Profit from strong consistency and idempotent operations.',
  },
  {
    text: 'CloudEvent support',
    detail: 'Use common transport protocols to share your facts.',
  },
];

function WhySection() {
  return (
    <section className={styles.whySection}>
      <div className={styles.whyInner}>
        <div className={styles.whyGrid}>
          {/* Left: text content */}
          <div className={styles.whyContent}>
            <h2 className={styles.whyTitle}>Why choose FactStore?</h2>
            <p className={styles.whyDescription}>
              Event sourcing should not be a rigid architectural trap. FactStore
              provides the tools to build systems that are both mathematically
              sound and operationally flexible.
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
                Get started now
              </Link>
            </div>
          </div>

          {/* Right: code snippet */}
          <div className={styles.codePanel}>
            <div className={styles.codePanelHeader}>
              <div className={styles.codeDotRed} />
              <div className={styles.codeDotYellow} />
              <div className={styles.codeDotGreen} />
              <span className={styles.codePanelFilename}>example.ts</span>
            </div>
            <pre className={styles.codePanelBody}>
              <code>
                <span className={styles.syntaxKeyword}>const</span>{' '}
                <span className={styles.syntaxIdent}>factStore</span>{' '}
                <span className={styles.syntaxPunctuation}>=</span>{' '}
                <span className={styles.syntaxKeyword}>new</span>{' '}
                <span className={styles.syntaxClass}>FactStore</span>
                {'(config);\n\n'}
                <span className={styles.syntaxComment}>{'// Append a business fact'}</span>
                {'\n'}
                <span className={styles.syntaxKeyword}>await</span>{' '}
                <span className={styles.syntaxIdent}>factStore</span>
                <span className={styles.syntaxPunctuation}>.</span>
                <span className={styles.syntaxMethod}>append</span>
                {'({\n'}
                {'  '}
                <span className={styles.syntaxIdent}>type</span>
                <span className={styles.syntaxPunctuation}>:</span>{' '}
                <span className={styles.syntaxString}>{'"OrderPlaced"'}</span>
                {',\n'}
                {'  '}
                <span className={styles.syntaxIdent}>stream</span>
                <span className={styles.syntaxPunctuation}>:</span>{' '}
                <span className={styles.syntaxString}>{'"order-123"'}</span>
                {',\n'}
                {'  '}
                <span className={styles.syntaxIdent}>data</span>
                <span className={styles.syntaxPunctuation}>:</span>{' '}
                {'{\n'}
                {'    '}
                <span className={styles.syntaxIdent}>customer</span>
                <span className={styles.syntaxPunctuation}>:</span>{' '}
                <span className={styles.syntaxString}>{'"alice"'}</span>
                {',\n'}
                {'    '}
                <span className={styles.syntaxIdent}>total</span>
                <span className={styles.syntaxPunctuation}>:</span>{' '}
                <span className={styles.syntaxNumber}>49.99</span>
                {'\n'}
                {'  }\n})'}
                {'\n\n'}
                <span className={styles.syntaxComment}>{'// Read the stream'}</span>
                {'\n'}
                <span className={styles.syntaxKeyword}>const</span>{' '}
                <span className={styles.syntaxIdent}>events</span>{' '}
                <span className={styles.syntaxPunctuation}>=</span>{' '}
                <span className={styles.syntaxKeyword}>await</span>{' '}
                <span className={styles.syntaxIdent}>factStore</span>
                <span className={styles.syntaxPunctuation}>.</span>
                <span className={styles.syntaxMethod}>read</span>
                {'(\n'}
                {'  '}
                <span className={styles.syntaxString}>{'"order-123"'}</span>
                {'\n);\n'}
              </code>
            </pre>
          </div>
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
      description="An open-source, flexible, and high-performance database for event sourcing at scale."
    >
      <HeroSection />
      <main>
        <ManifestoSection />
        <HomepageFeatures />
        <WhySection />
      </main>
    </Layout>
  );
}
