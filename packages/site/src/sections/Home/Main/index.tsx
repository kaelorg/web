import React from 'react';

import styles from './styles.module.css';

const Main = () => (
  <section id="main">
    <div className="main-container flex relative items-center flex-col lg:flex-row">
      <aside className={styles.aside}>
        <h3>O BOT QUE VAI QUEBRAR OS PADRÕES</h3>

        <h1 className="text-gradient">
          Triplique o alcance de sua comunidade!
        </h1>

        <h5>
          Moderno, Prático e totalmente aberto para suas sugestões. Sempre
          inovando!
        </h5>

        <button type="button" className={styles.button}>
          ADICIONAR O KAEL
        </button>
      </aside>

      <div className={styles.logoContainer}>
        <img src="/logo_full.png" alt="Kael Logo" />
      </div>
    </div>
  </section>
);

export default Main;
