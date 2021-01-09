import PropTypes from 'prop-types';
import React, { createContext, useState, useContext } from 'react';

import { guildDefaultProps } from '../config/propTypes';
import api from '../services/api';
import history from '../services/history';

// Context
export const GuildContext = createContext({
  guild: guildDefaultProps,
  getGuild: () => {
    // void
  },
  refresh: () => {
    // void
  },
});

export const GuildProvider = ({ children }) => {
  const [guild, setGuild] = useState(guildDefaultProps);

  async function getGuild(id, options = { canManage: true }) {
    if (id !== guild.id) {
      const { data } = await api.get(`guilds/${id}`).catch(() => ({}));

      if (data) {
        if (options.canManage && !data.canManage) return history.push('/');
        setGuild(data);
      } else history.push('/');
    }
  }

  async function refresh() {
    const { data } = await api.get(`guilds/${guild.id}`).catch(() => ({}));

    if (data) setGuild(data);
    else history.push('/');
  }

  return (
    <GuildContext.Provider value={{ guild, getGuild, refresh }}>
      {children}
    </GuildContext.Provider>
  );
};

export const useGuild = () => useContext(GuildContext);

GuildProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
