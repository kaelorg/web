/* eslint-disable react-hooks/rules-of-hooks */

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { useGuild } from '@app/contexts/guild';

import Layout from '@app/layouts/Logged';

import Header from './Header/Guild';

const WithGuildComponent = (Page, options = { canManage: true }) => () => {
  const { guildId } = useParams();
  const { guild, getGuild, refresh } = useGuild();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getGuild(guildId, options).then(() => setLoading(false));
  }, [getGuild, guildId]);

  return (
    <Layout loading={loading}>
      <Header guild={guild} />

      <section className="padding">
        <Page refresh={refresh} guild={guild} />
      </section>
    </Layout>
  );
};

export default WithGuildComponent;
