import React from 'react';

import WithGuild from '@app/components/WithGuild';

import { categories } from '@app/config/dashboard';
import { guildProps } from '@app/config/propTypes';

import { Container, Content, CategorieContainer } from './styles';

const DashboardPage = ({ guild }) => (
  <Container>
    <h1>Escolha a categoria desejada</h1>

    <Content>
      {categories
        .filter(
          categorie =>
            (categorie.canManage && guild.canManage) ||
            (categorie.premium && (guild.premium || guild.canManage)),
        )
        .map(categorie => (
          <CategorieContainer
            key={categorie.name}
            borderCcolor={categorie.borderColor}
            image={categorie.brand}
            to={`${guild.id}/${categorie.href}`}
          >
            <strong>{categorie.name}</strong>
          </CategorieContainer>
        ))}
    </Content>
  </Container>
);

DashboardPage.propTypes = {
  guild: guildProps.isRequired,
};

export default WithGuild(DashboardPage, { canManage: false });
