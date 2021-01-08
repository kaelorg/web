import React from 'react';

import styles from '@styles/pages/Home.module.css';

const HomePage = () => (
  <div>
    <section className="h-screen">
      <div className="main-container flex relative">
        <aside>
          <h2>O BOT QUE VAI QUEBRAR OS PADRÕES</h2>

          <h1>Triplique o alcance de sua comunidade!</h1>
        </aside>

        <div className={styles.absoluteLogoContainer}>
          <img src="/logo.svg" alt="Kael Logo" />
        </div>
      </div>
    </section>
  </div>
);

export default HomePage;
