import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Adaptive Consistency (DCB)',
    description: (
      <>
        Move beyond rigid aggregates. <b>Dynamic Consistency Boundaries</b> allow 
        you to define invariants at runtime, giving you the flexibility of 
        relational transactions within an immutable event store.
      </>
    ),
  },
  {
    title: 'Storage Agnostic & Open Source',
    description: (
      <>
        FactStore is a 100% open-source formal protocol. Use the <b>FoundationDB</b> implementation for 
        global ACID scale, or stay lightweight with <b>In-Memory</b> 
        adapters for local development and testing.
      </>
    ),
  },
  {
    title: 'Sustainable Engineering',
    description: (
      <>
        Designed for long-term stability. We use a <b>Fair Source</b> model to 
        remain independent: the code is open for all, while a production license 
        from businesses ensures continued development and maintenance.
      </>
    ),
  },
];

const Feature = ({title, description}: FeatureItem) => {
  return (
    <div className={clsx('col col--4')}>
      <div className="padding-horiz--md">
        <h3 style={{fontSize: '1.5rem', fontWeight: '700'}}>{title}</h3>
        <p style={{lineHeight: '1.6', color: 'var(--ifm-color-emphasis-700)'}}>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): React.JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
