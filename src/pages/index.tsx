import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import Logo from '@site/static/img/logo.svg'
import HomepageFeatures from '../components/HomepageFeatures';

function HomepageHeader() {
  return (
    <header className="heroBanner">
      <div className="container">
        <h1 className="heroTitle">
          FactStore — Because your <span className="factGradient">Facts</span> matter.
        </h1>
        <p className="heroSubtitle">
          A formal specification and high-performance database for event sourcing at scale. 
          Move beyond fixed aggregate boundaries with Dynamic Consistency.
        </p>
        <div style={{marginTop: '2rem'}}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/overview"
            style={{padding: '1rem 3rem', borderRadius: '4px', fontWeight: 'bold'}}>
            Explore the Specification
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`FactStore - The Flexible Event Store`}
      description="Grounded, intelligent event sourcing at scale.">
      <HomepageHeader />
      <main>
        <section className="manifestoSection">
          <div className="container" style={{maxWidth: '800px'}}>
            <h2 style={{fontSize: '2.5rem', marginBottom: '2rem'}}>A Manifesto for Data Integrity</h2>
            <p style={{fontSize: '1.25rem', lineHeight: '1.6'}}>
              Software systems are built on decisions, but they are sustained by facts. 
              Traditional databases force you to structure your world before you understand it. 
              FactStore is designed for the evolution of truth.
            </p>
            <p style={{fontSize: '1.1rem', color: '#64748b'}}>
              By decoupling the specification from the storage implementation—whether you use 
              FoundationDB for global reach or in-memory for local speed—FactStore remains 
              the immutable anchor of your architecture.
            </p>
          </div>
        </section>

        <HomepageFeatures />

        {/* Technical Value Proposition Section */}
        <section style={{padding: '5rem 0', backgroundColor: 'var(--ifm-background-color-light)'}}>
          <div className="container">
            <div className="row" style={{alignItems: 'center'}}>
              <div className="col col--6">
                <h2 style={{fontSize: '2.2rem', fontWeight: '700'}}>Why choose FactStore?</h2>
                <p style={{fontSize: '1.1rem', marginBottom: '2rem'}}>
                  Event sourcing shouldn't be a rigid architectural trap. FactStore provides 
                  the tools to build systems that are both mathematically sound and 
                  operationally flexible.
                </p>
                <ul style={{listStyle: 'none', padding: 0, lineHeight: '2.5'}}>
                  <li><b>✓ Open Source Transparency:</b> Audit every line of code.</li>
                  <li><b>✓ No Per-Node Tax:</b> Predictable licensing for sustainable growth.</li>
                  <li><b>✓ DCB Flexibility:</b> Dynamic boundaries that grow with your business logic.</li>
                  <li><b>✓ ACID Guaranteed:</b> Distributed transactions that never compromise.</li>
                </ul>
              </div>
              <div className="col">
                <img src={require('@site/static/img/logo.png').default} />
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
