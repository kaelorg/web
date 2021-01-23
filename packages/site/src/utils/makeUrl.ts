import urlJoin from 'url-join';

const urlRegex = /^https?:\/\/+/;
const baseUrl = process.env.BASE_URL || 'https://kaelbot.com';

function makeUrl(path: string): string {
  if (urlRegex.test(path)) {
    return path;
  }

  return urlJoin(baseUrl, path);
}

export default makeUrl;
