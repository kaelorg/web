import * as Yup from 'yup';

import api, { imgurApi } from '@app/services/api';
import { actions } from '@app/store/modules/user';

const schema = Yup.object().shape({
  bio: Yup.string().required().min(1).max(130),
});

export async function handleSubmit(
  dispatch,
  { bio, background, favColor },
  { setHasChanged },
) {
  await schema.validate({ bio, background, favColor }, { abortEarly: false });

  if (background) {
    const data = new FormData();
    data.append('image', background.file, background.name);

    const {
      data: {
        data: { link },
      },
    } = await imgurApi.post('image', data);

    background = link;
  }

  await api.put('users/@me/profile', { bio, background, favColor }).then(() => {
    setHasChanged(false);
    dispatch(actions.refreshUser());
  });
}
