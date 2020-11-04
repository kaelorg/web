import PropTypes from 'prop-types';
import React from 'react';

import Configuration from '@app/components/Configuration';
import WithGuild from '@app/components/WithGuild';

import { guildProps } from '@app/config/propTypes';

import { handleSwitch, handleSubmit } from './handlers';
import { InputModal, LeaveModal } from './modals';

import { Container, Hero, Content } from './styles';

const WelcomePage = ({ guild, refresh }) => {
  const { input, leave } = guild.helpers.welcome;
  const inputChannel = guild.channels.find(c => c.id === input.channel);
  const leaveChannel = guild.channels.find(c => c.id === leave.channel);

  return (
    <Container>
      <Hero>
        <div>
          <h2>MÓDULO DE MENSAGENS</h2>
        </div>

        <hr />
      </Hero>

      <Content>
        <Configuration
          title="MENSAGEM DE ENTRADA"
          description="Mensagem de boas-vindas"
          modalTitle="BOAS-VINDAS"
          switchChecked={input.active}
          modal={<InputModal guild={guild} />}
          handleSwitch={value => {
            return handleSwitch({ refresh, guild, type: 'input' }, value);
          }}
          handleSubmit={(...params) => {
            return handleSubmit({ refresh, guild, type: 'input' }, ...params);
          }}
          initialData={{
            message: guild.helpers.welcome.input.message,
            ...(inputChannel && {
              channel: { value: inputChannel.id, label: inputChannel.name },
            }),
          }}
        />
        <Configuration
          title="MENSAGEM DE SAÍDA"
          description="Mensagem de saída"
          modalTitle="SAÍDA"
          switchChecked={leave.active}
          modal={<LeaveModal guild={guild} />}
          handleSwitch={value => {
            return handleSwitch({ refresh, guild, type: 'leave' }, value);
          }}
          handleSubmit={(...params) => {
            return handleSubmit({ refresh, guild, type: 'leave' }, ...params);
          }}
          initialData={{
            message: guild.helpers.welcome.leave.message,
            ...(leaveChannel && {
              channel: { value: leaveChannel.id, label: leaveChannel.name },
            }),
          }}
        />
      </Content>
    </Container>
  );
};

WelcomePage.propTypes = {
  guild: guildProps.isRequired,
  refresh: PropTypes.func.isRequired,
};

export default WithGuild(WelcomePage);
