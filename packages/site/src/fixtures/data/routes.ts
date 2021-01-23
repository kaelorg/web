interface Route {
  title: string;
  links: {
    title: string;
    href: string;
  }[];
}

const routes: Route[] = [
  {
    title: 'Produto',
    links: [
      {
        title: 'Adicionar',
        href: '/',
      },
      {
        title: 'Preços',
        href: '/',
      },
      {
        title: 'Loja',
        href: '/',
      },
    ],
  },
  {
    title: 'Recursos',
    links: [
      {
        title: 'Suporte',
        href: '/',
      },
      {
        title: 'Blog',
        href: '/',
      },
      {
        title: 'Parceiros',
        href: '/',
      },
      {
        title: 'Código Aberto',
        href: '/',
      },
      {
        title: 'Comandos',
        href: '/',
      },
      {
        title: 'Idioma',
        href: '/',
      },
    ],
  },
  {
    title: 'Política',
    links: [
      {
        title: 'Termos',
        href: '/',
      },
      {
        title: 'Política',
        href: '/',
      },
      {
        title: 'Pagamentos',
        href: '/',
      },
    ],
  },
];

export default routes;
