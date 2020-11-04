import * as Yup from 'yup';

import api, { imgurApi } from '@app/services/api';
import { actions } from '@app/store/modules/user';

const schema = Yup.object().shape({
  biography: Yup.string().required().min(1).max(130),
});

export async function handleSubmit(
  dispatch,
  { biography, background, favorite_color },
  { setHasChanged },
) {
  await schema.validate(
    { biography, background, favorite_color },
    { abortEarly: false },
  );

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

  await api
    .put('users/@me/profile', { biography, background, favorite_color })
    .then(() => {
      setHasChanged(false);
      dispatch(actions.refreshUser());
    });
}
