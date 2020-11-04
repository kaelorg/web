import PropTypes from 'prop-types';
import React from 'react';
import { useSelector } from 'react-redux';

import Configuration from '@app/components/Configuration';
import WithGuild from '@app/components/WithGuild';

import { guildProps } from '@app/config/propTypes';

import { handleSubmit } from './handlers';
import { UsersModal } from './modals';

import { Container, Hero, Content } from './styles';

const GeneralPage = ({ guild, refresh }) => {
  const { profile } = useSelector(state => state.user);

  return (
    <Container>
      <Hero>
        <div>
          <h2>VANITY SERVER</h2>
        </div>

        <hr />
      </Hero>

      <Content>
        {guild.canManage && (
          <Configuration
            title="USUÁRIOS VIP"
            description="Defina o cargo vip de usuários especiais no servidor."
            modalTitle="SERVIDOR VIP"
            isSwitch={false}
            modal={<UsersModal guild={guild} refresh={refresh} />}
            initialData={{ time: { label: '4 horas', value: 14400000 } }}
            handleSubmit={(...params) => {
              return handleSubmit({ refresh, guild, profile }, ...params);
            }}
          />
        )}
      </Content>
    </Container>
  );
};

GeneralPage.propTypes = {
  guild: guildProps.isRequired,
  refresh: PropTypes.func.isRequired,
};

export default WithGuild(GeneralPage, { canManage: false });
