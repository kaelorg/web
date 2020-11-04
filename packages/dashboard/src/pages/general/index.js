import PropTypes from 'prop-types';
import React from 'react';

import Configuration from '@app/components/Configuration';
import Input from '@app/components/Input';
import WithGuild from '@app/components/WithGuild';

import { guildProps } from '@app/config/propTypes';

import {
  handleSuggestionSwitch,
  handlePrefixSubmit,
  handleSuggestionSubmit,
} from './handlers';
import { SuggestionModal } from './modals';

import { Container, Hero, Form, PrefixContainer } from './styles';

const GeneralPage = ({ refresh, guild }) => {
  const { prefix, suggestion } = guild.helpers;
  const suggestionChannel = guild.channels.find(
    c => c.id === suggestion.channel,
  );

  return (
    <Container>
      <Hero>
        <div>
          <h2>MÓDULO DE MODERAÇÃO</h2>
        </div>

        <hr />
      </Hero>

      <Form
        initialData={{ prefix }}
        handleSubmit={(...params) => {
          return handlePrefixSubmit({ refresh, guild }, ...params);
        }}
      >
        <PrefixContainer>
          <label>PREFIXO</label>

          <p>
            Altere o prefixo do bot. Responsável pela execução de comandos em
            seu servidor.
          </p>

          <Input name="prefix" maxLength="5" required />
        </PrefixContainer>
      </Form>

      <Configuration
        title="SUGESTÃO"
        description="Defina um canal de sugestões para o seu servidor."
        modalTitle="CANAL DE SUGESTÃO"
        switchChecked={suggestion.active}
        modal={<SuggestionModal guild={guild} />}
        handleSwitch={value => {
          return handleSuggestionSwitch({ refresh, guild }, value);
        }}
        handleSubmit={(...params) => {
          return handleSuggestionSubmit({ refresh, guild }, ...params);
        }}
        initialData={{
          ...(suggestionChannel && {
            channel: {
              value: suggestionChannel.id,
              label: suggestionChannel.name,
            },
          }),
        }}
      />
    </Container>
  );
};

GeneralPage.propTypes = {
  refresh: PropTypes.func.isRequired,
  guild: guildProps.isRequired,
};

export default WithGuild(GeneralPage);
