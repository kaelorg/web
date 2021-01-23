import React from 'react';

import Link from '@components/common/Link';
import Divider from '@components/ui/Divider';

import about from '@fixtures/data/about';

import styles from './styles.module.css';

const About = () => (
  <section id="about" className={styles.container}>
    <div className="main-container">
      <h2 className={styles.title}>SOBRE O KAEL</h2>

      <Divider height="2px" opacity="0.15" style={{ marginBottom: '40px' }} />

      <div className={styles.about}>
        {about.map(({ href, title }) => (
          <Link key={href} href={href}>
            {title}
          </Link>
        ))}
      </div>
    </div>
  </section>
);

export default About;
