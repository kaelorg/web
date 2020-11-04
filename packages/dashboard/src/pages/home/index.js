import React from 'react';

import Layout from '@app/layouts/Default';

import { Container, Wave } from './styles';

const HomePage = () => (
  <Layout>
    <Container>
      <div>
        <h1>BEM-VINDO(A)!</h1>
        <p>
          Este é meu painel, aqui você pode configurar mensagens de boas-vindas,
          sistema de cargos vips, canal de sugestões e muito mais!
        </p>
      </div>

      <img src="/static/images/pages/home/moon.png" alt="Kael Moon" />
    </Container>

    <Wave src="/static/images/pages/home/footer.png" />
  </Layout>
);

export default HomePage;
