import React from 'react';

import { guildProps } from '@app/config/propTypes';

import GuildIcon from '../../GuildIcon';

import { Container, TextContainer } from './styles';

const GuildHeaderComponent = ({ guild }) => (
  <Container>
    <GuildIcon
      iconURL={guild.iconURL}
      nameAcronym={guild.nameAcronym}
      borderColor="#fff"
      style={{ width: '6rem', height: '6rem' }}
    />

    <TextContainer>
      <span>{guild.name}</span>
      <p>
        Servidor de <strong>{guild.owner.tag}</strong>
      </p>
    </TextContainer>
  </Container>
);

GuildHeaderComponent.propTypes = {
  guild: guildProps.isRequired,
};

export default GuildHeaderComponent;
