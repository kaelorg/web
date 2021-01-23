import React from 'react';

import SEO from '@components/forward/SEO';

import About from '@sections/Home/About';
import Main from '@sections/Home/Main';
import Originals from '@sections/Home/Originals';
import Resources from '@sections/Home/Resources';

import styles from '@styles/pages/Home.module.css';

const HomePage = () => (
  <>
    <SEO />

    <div className={styles.container}>
      <Main />
      <Originals />
      <Resources />
      <About />
    </div>
  </>
);

export default HomePage;
