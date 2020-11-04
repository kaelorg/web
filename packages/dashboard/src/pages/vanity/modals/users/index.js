import React from 'react';

import Input from '@app/components/Input';
import Select from '@app/components/Select';

import { vanityTimeOptions } from '@app/config/dashboard';
import { guildProps } from '@app/config/propTypes';

import { Container, InputContainer } from './styles';

const UsersModal = ({ guild }) => (
  <Container>
    <h3>Adicionar usuário VIP</h3>
    <p>Ao adicionar o usuário o mesmo terá o cargo VIP dentro do servidor.</p>

    <InputContainer>
      <p>Insira o id do usuário desejado.</p>
      <Input name="id" maxLength="18" placeholder="ID" />

      <p>Insira o cargo que deseja dar ao usuário.</p>
      <Select
        name="role"
        style={{ color: '#000', marginTop: '15px' }}
        options={guild.roles
          .filter(role => role.id !== guild.id && !role.managed)
          .map(role => ({
            value: role.id,
            label: role.name,
          }))}
        isClearable
      />

      <p>Selecione o tempo que o cargo ficará ativo.</p>
      <Select
        name="time"
        options={vanityTimeOptions}
        style={{ color: '#000', marginTop: '15px' }}
        isClearable
      />
    </InputContainer>
  </Container>
);

UsersModal.propTypes = {
  guild: guildProps.isRequired,
};

export default UsersModal;
