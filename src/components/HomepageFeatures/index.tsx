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
    title: 'Event Sourcing and Streaming',
    description: (
      <>
        FactStore supports traditional aggregate or stream-based event sourcing 
        as well as more flexibile approaches to enforce consistency, such as 
        dynamic consistency boundaries (DCB). FactStore gives you the flexibility to 
        use both.
      </>
    ),
  },
  {
    title: 'Scalable and Performant',
    description: (
      <>
        Adopt FactStore to the workload you need. Whether you need a FactStore for local development and expirementation, 
        or a production-ready, redundant storage, FactStore's flexible architecture let's you choose.
      </>
    ),
  },
  {
    title: 'Open Source',
    description: (
      <>
        The core of FactStore is fully open source and licensed under Apache 2.0.
        Deploy FactStore wherever you like, on-premise or in the cloud. 
        There is no vendor lock in. Enterprise features and support are being made available 
        for advanced use cases.
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
      <div className="container" >
        <h2 style={{fontSize: '2.5rem', marginBottom: '2rem'}}>Core Capabilites</h2>
        <h3>FactStore provides the backbone for your event sourcing infrastructure.</h3>
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
