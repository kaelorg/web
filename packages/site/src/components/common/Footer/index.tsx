import React from 'react';

import Link from '@components/common/Link';
import Divider from '@components/ui/Divider';

import routes from '@fixtures/data/routes';

import styles from './styles.module.css';

const Footer = () => (
  <footer className={styles.container}>
    <div className="main-container">
      <section className="flex">
        <div className="flex flex-wrap ml-auto">
          {routes.map(({ title, links }) => (
            <div key={title} className={styles.navigation}>
              <h4 className="text-gradient">{title}</h4>

              <ul>
                {links.map(({ href, title: linkTitle }) => (
                  <Link key={href} href={href}>
                    {linkTitle}
                  </Link>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <Divider margin="35px" opacity="0.3" />

      <div className={styles.brand}>
        <p>
          2019-{new Date().getFullYear()} © Kael um serviço Kaeltec. Todos os
          direitos reservados.
        </p>

        <button type="button" className={styles.button}>
          ADICIONAR
        </button>
      </div>
    </div>
  </footer>
);

export default Footer;
