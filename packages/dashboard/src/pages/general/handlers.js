import * as Yup from 'yup';

import api from '@app/services/api';

const prefixSchema = Yup.object().shape({
  prefix: Yup.string().required().min(1).max(5),
});
const suggestionSchema = Yup.object().shape({
  channel: Yup.string().required().length(18),
});

export async function handleSuggestionSwitch({ guild, refresh }, active) {
  try {
    await api
      .put(`guilds/${guild.id}/suggestion`, { active })
      .then(() => refresh());
  } catch (e) {
    // Silent
  }
}

export async function handlePrefixSubmit(
  { guild, refresh },
  { prefix },
  { setHasChanged },
) {
  await prefixSchema.validate({ prefix }, { abortEarly: false });
  await api
    .put(`guilds/${guild.id}/general`, { prefix })
    .then(() => refresh().then(() => setHasChanged(false)));
}

export async function handleSuggestionSubmit(
  { guild, refresh },
  { channel },
  { setHasChanged },
) {
  await suggestionSchema.validate({ channel }, { abortEarly: false });
  await api
    .put(`guilds/${guild.id}/suggestion`, { channel })
    .then(() => refresh().then(() => setHasChanged(false)));
}
