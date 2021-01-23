import React from 'react';

import styles from './styles.module.css';

const originals = [1, 2, 3];

const Originals = () => (
  <section id="originals" className="relative">
    <div className="main-container text-center">
      <h3 className={styles.mainTitle}>
        KAEL <span className="font-black">ORIGINALS</span>
      </h3>

      <h1 className={`text-gradient ${styles.title}`}>
        BUSCANDO SEMPRE O INOVADOR!
      </h1>

      <h5 className={styles.subtitle}>
        Novos projetos e serviços exclusivos do Kael á sua espera.
      </h5>

      <div className={styles.originals}>
        {originals.map(number => (
          <div key={number} />
        ))}
      </div>

      <button type="button" className={styles.button}>
        ADICIONAR
      </button>

      <p className="mt-4 text-xl tracking-widest">
        Alguns serviços podem ser oferecidos e cobrados a parte.
      </p>
    </div>

    <div className={styles.eclipse} />
  </section>
);

export default Originals;
