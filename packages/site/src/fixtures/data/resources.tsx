import React from 'react';

interface Resource {
  key: string;
  description: string;
  title: string | JSX.Element;
  image?: string;
  element?: JSX.Element;
}

const resources: Resource[] = [
  {
    key: 'economy',
    title: 'Economia',
    description:
      'Um sistema avançado de economia para você usar como quiser em seu servidor.',
    element: (
      <div
        className="relative h-full mr-36"
        style={{
          maxWidth: '350px',
        }}
      >
        <img
          src="/img/resources/card_white.svg"
          alt="Card"
          className="relative"
          style={{
            transform: 'rotate(-8deg)',
          }}
        />
        <img
          src="/img/resources/card_black.svg"
          alt="Card"
          className="relative"
          style={{
            marginTop: '-100%',
            transform: 'rotate(-5deg) translate(20px, 15px)',
          }}
        />
      </div>
    ),
  },
  {
    key: 'vanity',
    title: 'Vanity',
    description:
      'Monte um negócio real em sua comunidade e utilize o vanity. Nosso sistema de cargos vips e temporários.',
    element: (
      <img
        src="/img/resources/vanity.svg"
        alt="vanity"
        style={{
          order: 1,
        }}
      />
    ),
  },
  {
    key: 'freeze',
    title: (
      <h3
        className="relative"
        style={{ borderBottom: '3px solid var(--color-white)' }}
      >
        Fr
        <span
          style={{
            color: '#60b9fe',
            borderBottom: '3px solid #60b9fe',
          }}
        >
          e
        </span>
        <span
          style={{
            color: '#8bcaff',
            borderBottom: '3px solid #8bcaff',
          }}
        >
          e
        </span>
        ze
      </h3>
    ),
    image: '/img/resources/freeze.svg',
    description:
      'Nosso exclusivo sistema de banimento baseado em “ tempmute ”. Você pode congelar um usuário sem precisar que o tire do servidor.',
  },
];

export default resources;
