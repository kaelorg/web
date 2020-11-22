import urlJoin from 'url-join';

const BASE_URL = 'https://discordapp.com/oauth2/authorize';
const { REACT_APP_DISCORD_ID, REACT_APP_SITE_URL } = process.env;

// Discord

export function buildQuery(query = {}) {
  return `?${new URLSearchParams({
    client_id: REACT_APP_DISCORD_ID,
    ...query,
  }).toString()}`;
}

export function createUrlByQuery(query = {}) {
  return decodeURI(`${BASE_URL}${buildQuery(query)}`);
}

export function createOAthUrl(scopes = ['identify', 'guilds']) {
  return createUrlByQuery({
    response_type: 'code',
    scope: scopes.join(' '),
    redirect_uri: urlJoin(REACT_APP_SITE_URL, 'auth'),
  });
}

export function createInviteUrl(guildId, redirectPath = '/') {
  return createUrlByQuery({
    scope: 'bot',
    response_type: 'code',
    permissions: 8,
    guild_id: guildId || '',
    redirect_uri: urlJoin(REACT_APP_SITE_URL, redirectPath),
  });
}

// Utils

export function parseQueryString(query = {}) {
  const obj = {};
  const params = new URLSearchParams(query);

  params.forEach((value, key) => {
    obj[key] = value;
  });

  return obj;
}

export function reduceString(str, maxLength = 20) {
  return `${str.slice(0, maxLength)}${str.length > maxLength ? '...' : ''}`;
}

export function createUrl(uri = '', ...paths) {
  return urlJoin(uri, ...paths.flatMap(path => [].concat(path)));
}
