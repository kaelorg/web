import cn from 'classnames';
import React, { useState, useCallback } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';

import Link from '@components/common/Link';

import styles from './Header.module.css';

const Header = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

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

  const handleClick = useCallback(() => {
    setNavbarOpen(oldValue => !oldValue);
  }, []);

  return (
    <header className={styles.container}>
      <div className="main-container py-4 relative">
        <div className="flex justify-between items-center flex-wrap">
          <section className="w-16 lg:w-24">
            <img
              src="/logo_full.png"
              alt="Kael Logo"
              className="w-full h-full"
            />
          </section>

          <section className={styles.responsive}>
            <button type="button" className="flex" onClick={handleClick}>
              <GiHamburgerMenu />
            </button>
          </section>

          <section
            className={cn(styles.navigation, {
              open: navbarOpen,
            })}
          >
            <nav>
              {links.map(({ name, href }) => (
                <Link href="/" key={href}>
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
