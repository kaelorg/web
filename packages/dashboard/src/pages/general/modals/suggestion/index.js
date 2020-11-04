import React from 'react';

import Select from '@app/components/Select';

import { guildProps } from '@app/config/propTypes';

import { Container, SelectContainer } from './styles';

const SuggestionModal = ({ guild }) => (
  <Container>
    <h3>Selecionar um canal de sugestão</h3>
    <p>
      Ao selecionar um canal de sugestões, todas as mensagens enviadas no mesmo
      serão reagidas pelo bot.
    </p>

    <SelectContainer>
      <Select
        name="channel"
        style={{ color: '#000', marginTop: '15px' }}
        options={guild.channels.map(channel => ({
          value: channel.id,
          label: channel.name,
        }))}
        isClearable
      />
    </SelectContainer>
  </Container>
);

SuggestionModal.propTypes = {
  guild: guildProps.isRequired,
};

export default SuggestionModal;
