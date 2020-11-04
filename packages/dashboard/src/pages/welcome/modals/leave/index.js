import React from 'react';

import Question from '@app/components/Question';
import Select from '@app/components/Select';
import TextArea from '@app/components/TextArea';

import { guildProps } from '@app/config/propTypes';

import { Container, SelectContainer } from './styles';

const LeaveModal = ({ guild }) => (
  <Container>
    <h3>Canal</h3>
    <p>Defina o canal para onde a mensagem de saída será enviada.</p>

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

    <h3>Mensagem</h3>
    <p>Defina a mensagem de saída.</p>

    <Question title="Parâmetros">
      <p>[server] - Para dizer o nome do servidor.</p>
      <p>[mention] - Para mencionar o usuário.</p>
      <p>[user] - Para dizer o nome do usuário.</p>
      <p>[user-id] - Para dizer o id do usuário.</p>
    </Question>

    <TextArea
      name="message"
      style={{ marginTop: '20px' }}
      custom={guild.emojis.map(emoji => ({
        imageUrl: emoji.url,
        name: emoji.displayName,
        customCategory: guild.name,
        short_names: [emoji.name],
      }))}
    />
  </Container>
);

LeaveModal.propTypes = {
  guild: guildProps.isRequired,
};

export default LeaveModal;
