import React from 'react';

import About from '@sections/Home/About';
import Main from '@sections/Home/Main';
import Originals from '@sections/Home/Originals';
import Resources from '@sections/Home/Resources';

import styles from '@styles/pages/Home.module.css';

const HomePage = () => (
  <div className={styles.container}>
    <Main />
    <Originals />
    <Resources />
    <About />
  </div>
);

export default HomePage;
