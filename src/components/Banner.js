import React from 'react';
import styles from './Banner.module.css';

const features = [
  '100x more compute efficient',
  '95% accuracy for image recognition',
  '90% reduction in data labelling'
];

const Banner = () => (
  <section className={styles.banner}>
    <div className={styles.content}>
      <h1 className={styles.title}>repliqease</h1>
      <h2 className={styles.subtitle}>
        Bio-inspired AI that learns like the human brain
      </h2>

      {/* Feature boxes */}
      <div className={styles.features}>
        {features.map((text, idx) => (
          <div key={idx} className={styles.featureBox}>
            {text}
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Banner;
