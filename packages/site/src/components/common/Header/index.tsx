import React from 'react';

import Link from '@components/common/Link';

import styles from './Header.module.css';

const Header = () => {
  const links = [
    {
      name: 'Comandos',
      href: '/commands',
    },
    {
      name: 'Suporte',
      href: '/support',
    },
    {
      name: 'Idioma',
      href: '/language',
    },
    {
      name: 'Parceiros',
      href: '/partners',
    },
  ];

  return (
    <header>
      <div className="main-container py-4">
        <div className="flex justify-between items-center">
          <section className="w-32">
            <img className="w-full h-full" src="/logo.svg" alt="Kael Logo" />
          </section>

          <section className="flex items-center">
            <nav>
              {links.map(({ name, href }) => (
                <Link
                  href="/"
                  key={href}
                  className="mr-8 opacity-80 hover:underline"
                >
                  <span>{name}</span>
                </Link>
              ))}
            </nav>

            <Link href="/premiun" className={styles.priceButton}>
              <span>Preços</span>
            </Link>
          </section>
        </div>
      </div>
    </header>
  );
};

export default Header;
