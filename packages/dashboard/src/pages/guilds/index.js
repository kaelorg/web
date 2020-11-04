import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';

import GuildIcon from '@app/components/GuildIcon';
import Layout from '@app/layouts/Logged';

import api from '@app/services/api';
import { createInviteUrl, parseQueryString, reduceString } from '@app/utils';

import { Container, Content, GuildContainer, Icon } from './styles';

const GuildsPage = () => {
  const history = useHistory();
  const location = useLocation();
  const [guilds, setGuilds] = useState();

  useEffect(() => {
    async function getGuilds() {
      const memberGuilds = await api.get('guilds').then(r => r.data);
      setGuilds(memberGuilds.filter(g => g.canManage));
    }

    const { code, permissions, guild_id: guildId } = parseQueryString(
      location.search,
    );

    if (code && guildId && permissions) history.push(`/guilds/${guildId}`);
    else getGuilds();
  }, [history, location.search]);

  return (
    <Layout loading={!guilds}>
      <Container>
        <h1>Selecione um servidor</h1>

        <Content>
          {guilds && guilds.length ? (
            guilds.map(guild => (
              <GuildContainer key={guild.id}>
                <LinkWrapper guild={guild}>
                  <Icon>
                    <GuildIcon
                      iconURL={guild.iconURL}
                      nameAcronym={guild.nameAcronym}
                      borderColor={guild.clientAdded ? '#43b581' : '#f04747'}
                    />

                    {!guild.clientAdded && <span className="add">+</span>}
                  </Icon>
                </LinkWrapper>

                <p>{reduceString(guild.name, 15)}</p>
              </GuildContainer>
            ))
          ) : (
            <h3>Nenhum servidor encontrado!</h3>
          )}
        </Content>
      </Container>
    </Layout>
  );
};

const LinkWrapper = ({ guild, children }) => {
  if (!guild.clientAdded) {
    return (
      <a rel="noopener noreferrer" href={createInviteUrl(guild.id, '/guilds')}>
        {children}
      </a>
    );
  }

  return <Link to={`guilds/${guild.id}`}>{children}</Link>;
};

LinkWrapper.propTypes = {
  children: PropTypes.node.isRequired,
  guild: PropTypes.shape({
    id: PropTypes.string.isRequired,
    clientAdded: PropTypes.bool.isRequired,
  }).isRequired,
};

export default GuildsPage;
