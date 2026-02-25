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
          Treat your <span className="factGradient">Business Facts</span> with the respect they deserve.
        </h1>
        <p className="heroSubtitle">
          <b>FactStore</b> is an open-source, flexible, and high-performance database for event sourcing at scale. 
          It provides a set of APIs and libraries to store, retrieve, and stream your business facts with ease. 
        </p>
        <div style={{marginTop: '2rem'}}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/overview"
            style={{padding: '1rem 3rem', borderRadius: '4px', fontWeight: 'bold'}}>
            Read the Docs
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
            <p style={{fontSize: '1.25rem'}}>
              Software systems are built on decisions, but they are sustained by facts. 
              Traditional databases force you to structure your world before you understand it. 
              FactStore comes from a different angle and is designed with event sourcing and flexiblity in mind. 
            </p>
            <p style={{fontSize: '1.25rem'}}>
              Event sourcing should be easy and accessible to everyone, with the least amount of patterns needed! 
              FactStore is an attempt to provide this flexibility and freedom so that you can design your applications in a way 
              that closely reflects how your business operates, without the additional technical overhead.
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
                  <li><b>✅ Open Source Transparency:</b> Audit every line of code.</li>
                  <li><b>✅ Clear and simple APIs:</b> FactStore is well-documented and tested.</li>
                  <li><b>✅ Flexible event sourcing:</b> Support for stream-based and dynamic consistency.</li>
                  <li><b>✅ Atomic Operations:</b> Profit from strong consistency and idempotent operations.</li>
                  <li><b>✅ CloudEvent support:</b> Use common transport protocols to share your facts. (TODO)</li>
                </ul>
              </div>
              <div className="col">
                <img src={require('@site/static/img/logo.png').default} width={"50%"} />
              </div>
            </div>
            <Link
              className="button button--primary button--lg"
              to="/docs/overview"
              style={{padding: '1rem 3rem', borderRadius: '4px', fontWeight: 'bold'}}>
              Get started now!
            </Link>
          </div>
        </section>
      </main>
    </Layout>
  );
}
